import WebSocket from "ws";
import chokidar from "chokidar";
import path from "path";
import fs from "fs";

// WebSocket Server (port 3000)
const wss = new WebSocket.Server({ port: 3000 });
const clients: WebSocket[] = [];

wss.on("connection", (ws) => {
  clients.push(ws);
  ws.on("close", () => {
    const index = clients.indexOf(ws);
    if (index !== -1) clients.splice(index, 1);
  });
});

// Bun HTTP Server (port 3001)
Bun.serve({
  fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === "/") {
      // Serve the index.html file
      const html = fs.readFileSync(
        path.join(__dirname, "src/index.html"),
        "utf-8"
      );
      return new Response(html, {
        status: 200,
        headers: { "Content-Type": "text/html" },
      });
    }

    // Serve other static assets (CSS, JS)
    const filePath = path.join(__dirname, "src", url.pathname);
    try {
      const file = fs.readFileSync(filePath);
      const fileType = filePath.endsWith(".css")
        ? "text/css"
        : filePath.endsWith(".js")
        ? "application/javascript"
        : "application/octet-stream";

      return new Response(file, {
        status: 200,
        headers: { "Content-Type": fileType },
      });
    } catch (error) {
      return new Response("Not Found", { status: 404 });
    }
  },
  port: 3001, // HTTP server will run on port 3001
});

console.log("HTTP server is running on http://127.0.0.1:3001");

// Watch for file changes using Chokidar
function watchFiles() {
  const watcher = chokidar.watch("./src", {
    ignored: /(^|[\/\\])\../, // Ignore dotfiles
    persistent: true,
  });

  watcher.on("change", (eventPath) => {
    console.log(`🔄 File changed: ${eventPath}`);
    for (const client of clients) {
      client.send("reload");
    }
  });
}

watchFiles(); // Start watching files
