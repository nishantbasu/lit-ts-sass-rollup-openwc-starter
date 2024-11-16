# Lit Element TypeScript Sass Rollup OpenWC Starter

This is a boilerplate project that creates a simple "Hello World" component using Lit Element, TypeScript, and Sass. It uses Rollup as the bundler and Web Dev Server for development. OpenWC is integrated for testing.

## Features

- Lit Element for creating web components
- TypeScript for type-safe JavaScript
- Sass for enhanced CSS functionality
- Rollup for efficient bundling
- Web Dev Server for local development
- OpenWC for testing web components

## Prerequisites

- Node.js (version 14 or later)
- npm (usually comes with Node.js)

## Getting Started

1. Clone the repository:
   git clone https://github.com/your-username/lit-ts-sass-rollup-openwc-starter.git
   cd lit-ts-sass-rollup-openwc-starter

2. Install dependencies:
   npm install

3. Build the project:
   npm run build

4. Start the development server:
   npm run start

5. Open your browser and navigate to `http://localhost:8000` to see the Hello World component.

## Scripts

- `npm run clean`: Removes the `dist` directory
- `npm run build`: Cleans and builds the project
- `npm run build:watch`: Builds the project and watches for changes
- `npm run start`: Starts the Web Dev Server
- `npm run serve`: Runs the build in watch mode and starts the Web Dev Server concurrently

## Development

1. The main component is located in `src/components/hello-world/hello-world.ts`.
2. Styles are written in Sass and located in `src/styles/component-styles.scss`.
3. The entry point for the application is `src/index.ts`.

To start development:

1. Run `npm run dev`
2. Edit the files in the `src` directory
3. The browser will automatically reload with your changes

## Building for Production

To create a production build:

npm run build

This will generate optimized files in the `dist` directory.

## Testing

This project uses OpenWC for testing. To run tests:

npm test

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the ISC License.
