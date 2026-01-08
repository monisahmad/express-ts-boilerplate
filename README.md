# 🚀 Express TypeScript Boilerplate (Node v24+)

A professional, modular, and lightweight starter kit for building REST APIs. This boilerplate leverages modern Node.js features to provide a high-performance development experience without unnecessary dependency bloat.

## ✨ Key Features

- **Modern Node.js**: Built for Node v24.12+ using native `--watch` and `--experimental-strip-types`.
- **Zero-Babel/Zero-Nodemon**: Uses built-in Node.js tools for the fastest developer workflow.
- **Type Safe**: Full TypeScript integration with strict mode enabled.
- **Modular Architecture**: Clean separation between routes, controllers, and configuration.
- **Infrastructure Ready**: Pre-configured Healthcheck endpoint and centralized config management.

---

## 📁 Project Structure

```text
├── src/
│   ├── config/          # Centralized environment variable management
│   ├── controllers/     # Request handlers (Business logic)
│   ├── routes/          # API route definitions
│   ├── middleware/      # Custom Express middleware (logging, auth, etc.)
│   ├── types/           # Custom TypeScript interfaces & declarations
│   └── index.ts         # Application entry point & assembly
├── .env.example         # Template for required environment variables
├── eslint.config.mjs    # Modern ESLint (v9+) flat configuration
├── package.json         # Project scripts and dependencies
├── tsconfig.json        # TypeScript compiler configuration
└── .prettierrc          # Prettier configs


## 🚦 Getting Started

### 1. Installation
```bash
npm install
```

### 2. Environment Setup

Create your local environment file from the template:

```bash
cp .env.example .env
```

### 3. Development

Run the server with native hot-reloading (requires Node v22.6+):

```bash
npm run dev
```

### 4. Build & Production

Compile the TypeScript to optimized JavaScript and run the production build:

```bash
npm run build
npm start
```

## 📡 API Endpoints

Method,Endpoint,Description
GET,/,Base greeting and environment status
GET,/healthCheck,Infrastructure check (uptime & timestamp)

## 🛠️ Scripts Reference

Command,Action
npm run dev,Starts the app in watch mode using Node's native runner.
npm run build,Compiles TypeScript files to the dist/ folder.
npm run lint,Runs ESLint to check for code quality issues.
npm start,Runs the compiled JavaScript from the dist/ folder.

## 🛡️ Best Practices Applied

- The Config Pattern: All process.env calls are centralized in src/config/index.ts to ensure type safety, parsing (e.g., strings to numbers), and default values.

- Separation of Concerns: Routes define the "where" (URLs), and Controllers define the "how" (Logic).

- Middleware Architecture: Includes a sample logging middleware and JSON parsing as standard.

- Clean Builds: The .gitignore ensures that node_modules and dist folders are never committed.

## 📝 License

This project is open-source and available under the MIT License.
