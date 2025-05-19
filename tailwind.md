* Tailwind CSS (v3)
* Sass
* PostCSS
* Autoprefixer

```bash
npm init -y

# npm install -D tailwindcss postcss autoprefixer sass postcss-cli
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init
```

🧠 How Tailwind and Sass Work Together
Tailwind provides utility classes.

Sass helps with custom design parts, like:
Mixins (@mixin underline-hover)
Reusables (_variables.scss, _typography.scss)
Nesting (.navbar a {})
You’ll compile both into one output CSS file using PostCSS.

postcss.config.js
 ```js
 module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
};
```

✨ Your styles.scss (main Sass entry)
```scss
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

// Your Sass below
@import './variables';
@import './mixins';

// Example: Custom class using Tailwind and Sass
.custom-underline {
  @include underline-hover($color: #f43f5e);
}
```
This file is both your Tailwind entry point and your Sass source.


🧪 Build script
Add a script in package.json to compile Sass + Tailwind into a single CSS:
```json
"scripts": {
  "build:css": "sass src/sass/styles.scss src/styles.css && postcss src/styles.css -o dist/styles.css",
  "watch:css": "sass --watch src/sass/styles.scss:src/styles.css"
}
```
Then run:
```bash
npm run build:css
```

🧾 In Your HTML
```html
<link rel="stylesheet" href="styles.css">
```

💡 Tips for Working With Tailwind + Sass
Use Tailwind for layout (flex, grid, gap, padding, text-center, etc.)

Use Sass for mixins, reusable classes, and any custom effects not easily done in Tailwind

Avoid overriding Tailwind too much — use utility-first by default

Don’t forget to purge unused CSS in production with content paths in tailwind.config.js


tailwind.config.js
```js
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

or 
```js
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```




How the Process Works:
Work in src/index.html:

This is your working file. You write and test everything here — linking to the correct development CSS files, images, etc.

Run npm run build:

This will compile your Sass, process your assets, and copy src/index.html to dist/index.html, where it will reference the final, compiled CSS (dist/styles.css).

Serve from dist/index.html:

When you’re testing the final output (or preparing for production), you’ll open dist/index.html, which now includes the processed styles and assets.

Key Differences:
src/index.html: Where you work and modify your content. This is the development version.

dist/index.html: Generated after running the build process. This is the final production-ready version.



3. Setup live-server for Auto-reloading
In your package.json, you can add a dev script to run both the Sass watcher and the live-server:

json
Copy
Edit
"scripts": {
  "watch:css": "sass --watch src/sass/main.scss:src/styles.css",
  "build:css": "sass src/sass/main.scss src/styles.css && postcss src/styles.css -o dist/styles.css",
  "copy:assets": "copyfiles -u 1 src/assets/**/* dist/assets",
  "build": "npm run build:css && npm run copy:assets",
  "dev": "npm run watch:css & live-server src"
}
This dev script does two things:

Watches your Sass files and compiles them automatically with sass --watch.

Starts the live-server, which serves your src/ folder and watches for changes in your HTML, CSS, or JavaScript files to refresh the page automatically in the browser.

Now, when you run:

bash
Copy
Edit
npm run dev
You will:

Automatically compile your Sass files when you save them.

Have your HTML page automatically reload in the browser when you make changes.

Alternative: Using http-server (Without Live Reload)
If you prefer to stick with http-server, you can simply run this in a separate terminal window or tab:

First, run the watch script to compile your Sass:

bash
Copy
Edit
npm run watch:css
Then, in another terminal window, run http-server to serve your files:

bash
Copy
Edit
npx http-server src
This will serve your src/ folder, but you won’t get live reloading unless you manually refresh the page.


1. Tailwind CSS is a PostCSS Plugin
Tailwind isn’t just a plain CSS library — it’s built as a PostCSS plugin. This means it needs PostCSS to:

Scan your content for class names.

Generate the corresponding utility classes.

Purge unused CSS in production.

Apply features like variants (hover:, md:) dynamically.

So, without PostCSS, Tailwind won't run at all.

2. PostCSS + Autoprefixer
Most setups also include Autoprefixer, another PostCSS plugin that:

Automatically adds vendor prefixes to your CSS (like -webkit-, -ms-, etc.)

Ensures better cross-browser compatibility.


// ------------------------------------
// 1. Sass @use statements FIRST
// ------------------------------------
@use "abstracts/variables" as *;
@use "abstracts/mixins" as *;
@use "abstracts/functions" as *;

// ------------------------------------
// 2. Tailwind's PostCSS imports NEXT
// ------------------------------------
@import "vendors/tailwind";

// ------------------------------------
// 3. Your other Sass partials LAST
// ------------------------------------
@use "base/typography";
@use "components/buttons";
@use "components/cards";

// Your custom styles (if needed)
body {
  font-family: $font-main;
}



✅ Here's the Right Way to Keep vendors/_tailwind.scss
✳️ Step 1: Rename _tailwind.scss → _tailwind.pcss
To avoid Sass trying to process this file, change:

bash
Copy
Edit
src/sass/vendors/_tailwind.scss → src/sass/vendors/_tailwind.pcss
🔁 .pcss is a common extension used to indicate "this file is meant for PostCSS only."