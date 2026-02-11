# Project Overview

This project serves as the documentation portal for ML4W (MyLinuxForWork), providing tutorials, application information, and details about the ML4W OS and Hyprland dotfiles. The documentation is generated as a static website using VitePress.

## Main Technologies

*   **VitePress**: A Vue-powered static site generator for building fast, content-centric websites.
*   **Bun**: A fast all-in-one JavaScript runtime for executing, bundling, testing, and packaging applications.

## Architecture

The project's architecture is based on VitePress's static site generation capabilities. Markdown files located in the `docs` directory are transformed into HTML, CSS, and JavaScript assets. The `docs/.vitepress/config.ts` file configures the site's structure, navigation, and theme.

## Building and Running

To work with this project, ensure you have Bun installed.

### 1. Install Dependencies

Install the project's dependencies using Bun:

```bash
bun install
```

### 2. Development Server

To run a local development server with hot-reloading:

```bash
bun run docs:dev
```

This will typically start the server at `http://localhost:5173`.

### 3. Build Static Site

To build the static HTML, CSS, and JavaScript files for production:

```bash
bun run docs:build
```

The output will be generated in the `./docs/.vitepress/dist/` directory.

### 4. Preview Built Site

To locally preview the production build:

```bash
bun run docs:preview
```

### 5. Deployment

The project can be deployed using the `publish.sh` script. This script first builds the VitePress site and then uses `lftp` to upload the generated static assets to a remote server.

```bash
./publish.sh
```

**Note**: The `publish.sh` script relies on a private `ftp.sh` credentials file, which is sourced from `$HOME/Projects/private/credentials/ftp.sh`.

## Development Conventions

*   **Documentation Content**: All primary documentation content is written in Markdown files and located within the `docs` directory.
*   **VitePress Configuration**: The main configuration for the VitePress site, including navigation, sidebar, and theme settings, is managed in `docs/.vitepress/config.ts`.
*   **Custom Styling**: Custom CSS for the VitePress theme is located in `docs/.vitepress/theme/custom.css` and `docs/.vitepress/theme/style.css`.
*   **Assets**: Static assets such as images and favicons are stored in `docs/public/`.