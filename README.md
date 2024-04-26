# Web Portfolio

## Purpose

This web portfolio serves as a showcase of my skills, projects, and experiences as a web developer. It is designed to provide visitors with an overview of my work and abilities in the field of web development.

The portfolio integrates with YouTube API and GitHub API to display dynamic content such as my latest YouTube videos and GitHub repositories.

## Features

### Home

- **Description**: The landing page that welcomes visitors to my portfolio.

### About Me

- **Description**: A dedicated section providing a detailed overview of my background, experience, and interests.
- **Content**: Personal information, career journey, and passion for web development.

### Resume

- **Description**: An interactive section showcasing my professional resume.
- **Content**: Education, work experience, skills, certifications, and accomplishments.

### YouTube API Integration

- **Description**: Display and search functionality for my YouTube videos directly on the portfolio.
- **Features**:
  - Display my latest YouTube videos.
  - Search for specific videos within my channel.
  - Thumbnails, titles, and descriptions for each video.

### GitHub API Integration

- **Description**: Showcase of my GitHub repositories and the number of commits on the master branch.
- **Features**:
  - List of GitHub repositories.
  - Display the number of commits on the master branch for each repository.
  - Links to GitHub repositories for detailed exploration.

## Technologies Used

- HTML5
- Tailwind CSS
- ReactJS
- YouTube API
- GitHub API

## Contributing

If you are interested in contributing to the development of this web portfolio, follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/new-feature`
3. Make your changes and commit them: `git commit -m 'Add some new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request.

Please ensure your pull request adheres to the following guidelines:

- Keep descriptions clear and concise.
- Make sure your code follows the existing code style and conventions.
- Test your changes thoroughly before submitting the pull request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.


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


6) Smooth-Scrolling
    `npm i smooth-scroll`
