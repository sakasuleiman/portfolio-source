<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h1 align="center">Saka Suleiman's Portfolio ✨</h1>

  <p align="center">
    A customized portfolio website showcasing my research, education, and projects as a PhD student in cybersecurity and privacy.
    <br />
    <strong>Live Demo » </strong>
    <a href="https://sakasuleiman.github.io">sakasuleiman.github.io</a>
    <br />
    <br />
    <a href="#about-the-project">About My Portfolio</a>
  </p>
</p>

# About the project

[![Site preview](/public/social-image.png)](https://sakasuleiman.github.io)

This portfolio is based on a template by [Hashir Shoaeb](https://github.com/hashirshoaeb/home), which I've significantly customized to showcase my work as a PhD student specializing in cybersecurity, privacy, and IoT.

## Key Modifications & Customizations

- **Research Section**: Added a comprehensive research section highlighting my focus areas and scholarly contributions in cybersecurity and IoT privacy
- **Publications Component**: Created a dedicated publications section with formatted citations and links to papers
- **Enhanced Education Display**: Expanded education section with academic details, GPAs, and relevant coursework
- **Professional Experience Timeline**: Added a detailed experience section with chronological work history
- **Icon Integration**: Implemented custom icons including ResearchGate for improved social connectivity
- **Navigation Improvements**: Restructured navigation for better user experience
- **Visual Styling**: Updated color schemes and layout for improved aesthetics
- **Mobile Responsiveness**: Enhanced mobile display and responsiveness
- **Deployment Configuration**: Modified deployment process for GitHub Pages using manual deployment

## Technology stack 🛠️

Dependencies defined in package.json:

[Reactjs](https://reactjs.org/)
| [Bootstrap](https://getbootstrap.com/)
| [Typist](https://github.com/jstejada/react-typist)
| [GitHub API](https://developer.github.com/v3/repos/)
| [Font Awesome](https://fontawesome.com/)

## Project Structure

The key files and directories you might want to modify:

```
portfolio-source/
├── public/                 # Public assets
│   ├── index.html          # Main HTML file
│   └── social-image.png    # Preview image
├── src/
│   ├── components/         # React components
│   │   ├── home/           # Main page components
│   │   │   ├── AboutMe.jsx
│   │   │   ├── EducationPage.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── MainBody.jsx
│   │   │   ├── Research.jsx
│   │   │   └── Skills.jsx
│   │   ├── Footer.jsx
│   │   └── Navbar.jsx      # Navigation component
│   ├── editable-stuff/     # Content configuration
│   │   ├── config.js       # Main configuration file
│   │   └── resume.pdf      # Your resume
│   └── scss/               # Styling
│       └── _custom.scss    # Custom styles
└── package.json            # Project configuration
```

# Getting started 

If you like this portfolio and want to adapt it for your own use, follow these steps.

## Prerequisites 🍪

You should have [Node.js](https://nodejs.org/en/) and [Git](https://git-scm.com/) installed on your PC. You should also own a GitHub account.

## Setup And Deployment 🔧

1. To Get Started, Fork this repository to your GitHub account
2. Clone the forked repo from your account using:
```bash
git clone https://github.com/<your-username>/portfolio-source.git
```
3. Open in editor and edit src/editable-stuff/config.js file to customize the content:
   - Update personal information
   - Add your own social media links
   - Configure education details
   - Set up research information and publications
   - Customize skills and experience data
4. Add your resume as <resume.pdf> in place of src/editable-stuff/resume.pdf
5. Edit title and meta description in public/index.html.
6. Change URL in package.json file:
```json
"homepage": "https://<your-username>.github.io"
```
7. After editing run the following bash commands:
```bash
npm install
npm start
```
8. To deploy website to GitHub Pages, run:
```bash
npm run build
cd build
git init
git add .
git commit -m "Deploy to GitHub Pages"
git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
git push -f origin master:main
```
9. Congrats your site is up and running. To see it live, visit:
```
https://<your-username>.github.io
```

## Creating the Source Code Repository

If you also want to maintain a source code repository separate from your deployed site:

1. Create a new repository (e.g., "portfolio-source") on GitHub
2. Push your code to this repository:
```bash
git remote add origin https://github.com/<your-username>/portfolio-source.git
git add .
git commit -m "Initial commit of portfolio source code"
git push -u origin main
```

## Troubleshooting

- If you encounter issues with icons not displaying, make sure FontAwesome is properly imported in your index.html
- For deployment issues, try using the manual deployment method described above rather than gh-pages
- If components aren't rendering correctly, check for syntax errors in config.js

## Original Template Credit

This site is based on the personal static website/portfolio template by [Hashir Shoaeb](https://github.com/hashirshoaeb/home), hosted with GitHub Pages.
Original template: [hashirshoaeb.github.io/home](https://hashirshoaeb.github.io/home)

## License

Distributed under the MIT License. See `LICENSE` for more information.
