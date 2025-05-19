let clients: WebSocket[] = [];

Bun.serve({
  port: 3000,
  fetch(req, server) {
    const url = new URL(req.url);

    // Handle WebSocket upgrade for live reload
    if (server.upgrade(req)) return;

    const path = url.pathname === "/" ? "/index.html" : url.pathname;
    const filePath = `./src${path}`;

    try {
      const file = Bun.file(filePath);
      return new Response(file, {
        headers: {
          "Content-Type": getContentType(filePath),
        },
      });
    } catch {
      return new Response("404 Not Found", { status: 404 });
    }
  },
  websocket: {
    open(ws) {
      clients.push(ws);
    },
    close(ws) {
      clients = clients.filter((client) => client !== ws);
    },
  },
});

function getContentType(path: string): string {
  if (path.endsWith(".html")) return "text/html";
  if (path.endsWith(".css")) return "text/css";
  if (path.endsWith(".js")) return "application/javascript";
  return "text/plain";
}

// 🔁 Watch for changes to HTML or CSS files
watchFiles();

function watchFiles() {
  const watcher = Bun.watch({
    paths: ["./src"],
    onChange(event) {
      console.log("🔄 File changed:", event.path);
      for (const client of clients) {
        client.send("reload");
      }
    },
  });
}
