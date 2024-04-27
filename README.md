# Web Portfolio

## Purpose

This web portfolio serves as a showcase of my skills, projects, and experiences as a web developer. It is designed to provide visitors with an overview of my work and abilities in the field of web development.

The portfolio integrates with YouTube API and GitHub API to display dynamic content such as my favourite athlete YouTube videos and GitHub repositories.

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
  - Display favourite athelete's youTube videos.
  - Search for specific videos within that channel
  - Thumbnails, titles, and descriptions for each video.

### GitHub API Integration

- **Description**: Showcase of my GitHub repositories and the number of commits on the master branch.
- **Features**:
  - List of GitHub repositories.
  - Display the number of commits on the master branch for each repository.
  - Links to GitHub repositories for detailed exploration.

  ## Application Architecture

The web portfolio is built using a modern and scalable architecture to ensure performance, maintainability, and extensibility. Below is an overview of the application's architecture:

### Frontend

- **Framework**: The frontend is developed using a combination of HTML5, CSS3, and JavaScript.
- **Responsive Design**: The portfolio is designed with a mobile-first approach, ensuring optimal viewing experience across various devices and screen sizes.
- **API Integration**: Utilizes the YouTube API and GitHub API to fetch and display dynamic content such as videos and repositories.
  
### Data Flow

1. **User Interaction**: Users interact with the frontend UI to browse through different sections like Home, About Me, Resume, and integrations with YouTube and GitHub.
2. **API Calls**: When required, the frontend makes API calls to fetch data from the YouTube API and GitHub API.
3. **Data Display**: The fetched data is then displayed dynamically on the respective sections of the portfolio.

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

## Reporting Issues

If you encounter any issues, bugs, or have suggestions for improvements, please feel free to report them. To report an issue:

1. Navigate to the [Issues](https://github.com/YourUsername/YourRepositoryName/issues) section of this repository.
2. Click on the `New Issue` button.
3. Provide a descriptive title and detailed description of the issue or suggestion.
4. Include screenshots, error messages, or any other relevant information that can help in understanding and reproducing the issue.
5. Assign appropriate labels and milestones if available.
6. Click on `Submit new issue`.

Your feedback is valuable, and it helps in enhancing the quality of this web portfolio. Thank you for taking the time to report issues and contribute to the improvement of this project!
