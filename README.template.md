# 🚀 LitElement TypeScript SASS Rollup OpenWC Starter Kit

<p align="center">
  <strong>A comprehensive starter kit for building scalable and maintainable micro-frontends with modern web component ecosystem.</strong>
</p>

<p align="center">
  🔥 LitElement | 🌐 TypeScript | 🎨 SASS | 📦 Rollup | 🧪 OpenWC
</p>

## 🌟 Key Features

- **⚡ LitElement**: Lightweight and fast web components.
- **🔷 TypeScript**: Enhanced developer experience with static typing.
- **🎨 SASS**: Write styles using SASS syntax, processed through PostCSS.
- **🖌️ PostCSS**: Automatic vendor prefixing and CSS optimization.
- **📦 Rollup**: Efficient bundling for optimized production builds.
- **🔧 Web Dev Server**: Modern development servers with hot reloading.
- **🔍 OpenWC && Web Test Runner**: Modern, fast testing for web components.
- **📚 Automatic Docs**: Generate component documentation effortlessly.
- **✨ Linting & Formatting**: Ensure code quality with ESLint and Prettier.
- **🖥️ Built-in Demo**: Showcase your micro-frontend components.
- **🔧 Modern JavaScript**: Utilizes `.mjs` files for ES6 modules.

## 📋 Prerequisites

- Node.js 
- npm

## 🚀 Getting Started

1. Clone the repository:
   git clone https://github.com/your-username/lit-ts-sass-rollup-openwc-starter.git
   cd lit-ts-sass-rollup-openwc-starter

2. Install dependencies:
   npm install

3. Build the project:
   npm run build

4. Start the development server:
   npm run serve

5. Open your browser and navigate to `http://localhost:8000/demo` to see the Hello World component's demo.

## 📜 Available Scripts

This project comes with several predefined scripts in the `package.json` file:

- **`npm run lint`**: 
  Runs ESLint to check for code quality and style issues across the project.

- **`npm run format`**: 
  Uses Prettier to automatically format JavaScript, TypeScript, CSS, and HTML files in the `src` directory.

- **`npm run clean`**: 
  Removes the `dist` directory to ensure a clean slate before builds.

- **`npm run build`**: 
  Cleans the `dist` directory, runs Rollup to build the project, and generates documentation.

- **`npm run build:watch`**: 
  Similar to `build`, but watches for file changes and rebuilds automatically.

- **`npm run sass:build`**: 
  Compiles the main SASS file (`styles-for-demo-app.scss`) to CSS, used for the demo application. Main sass build is taken care by rollup.

- **`npm start`**: 
  Builds SASS files and starts the Web Dev Server for development.

- **`npm run serve`**: 
  Runs `build:watch` and `start` concurrently, providing a full development environment with live rebuilding.

- **`npm run test`**: 
  Runs tests using Web Test Runner.

- **`npm run docs`**: 
  Generates component documentation using Web Component Analyzer and updates the README file.

## 💻 Development Workflow

For active development, use:

**`npm run serve`**: 


### 🏗️ Project Structure and Conventions

1. Each component has its own directory within `src/components/`
2. Test files (`.spec.ts`) are located alongside their respective components
3. HTML templates (`.html`) are separate files inside `src/components/html` folder, promoting a clear separation of logic and view
4. Styles are written in Sass and located in `src/styles/component-styles.scss`
5. The entry point for the application is `src/index.ts`

 
### ⚙️ Configuration Files

This project uses several configuration files to manage its build process, development server, and code quality tools:

1. **`rollup.config.mjs`**: Configures the Rollup bundler for efficient production builds.
2. **`eslint.config.mjs`**: Sets up ESLint rules for maintaining code quality. Use the **`ignores`** attribute to specify the files to be ignored by lint.
3. **`.prettierrc`**: Defines code formatting rules for Prettier.
4. **`web-dev-server.config.mjs`**: Configures the development server.
5. **`web-test-runner.config.mjs`**: Sets up the testing server.
6. **`postcss.config.mjs`**: Currently empty, but available for future PostCSS configurations.

#### Custom Plugins and Middleware

In the `web-dev-server` folder, you'll find:

- Two custom plugins that handle CSS and HTML file imports.
- A middleware for for sass path handling for web test runner.

These custom configurations enable seamless development and testing with hot reloading for both styles and templates.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Web Component Documentation



