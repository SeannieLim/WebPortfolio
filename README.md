# WebPortfolio

## Prerequisites
### React JS
`npm create vite@latest`

### Tailwind Css
1) Install tailwindcss and its peer dependencies, then generate your tailwind.config.js and postcss.config.js files.

    `npm install -D tailwindcss postcss autoprefixer`

    `npx tailwindcss init -p`

2) Add the paths to all of your template files in your tailwind.config.js file.

```
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

```

3) Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

4) Run your build process

    `npm run dev`

5) Add react Routing
    `npm install reac-router-dom`