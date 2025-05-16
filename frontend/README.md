# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Getting Started

Follow these steps to set up and run the frontend application:

### Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 16 or higher recommended)
- [pnpm](https://pnpm.io/) (package manager)

### Installation

1. Clone the repository and navigate to the `frontend` directory:

   ```bash
   git clone <repository-url>
   cd frontend
   ```

2. Install the dependencies using `pnpm`:

   ```bash
   pnpm install
   ```

### Running the Development Server

To start the development server, run:

```bash
pnpm dev
```

This will start the Vite development server. Open your browser and navigate to `http://localhost:5173` to view the application.

### Building for Production

To build the application for production, run:

```bash
pnpm build
```

The production-ready files will be generated in the `dist` directory.

### Previewing the Production Build

To preview the production build locally, run:

```bash
pnpm preview
```

This will start a local server to serve the files from the `dist` directory.