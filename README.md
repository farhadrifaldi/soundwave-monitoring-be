# Monitor Alert Backend

This project is a Node.js/Express backend with TypeScript support.

## Scripts
- `npm run dev` — Start the server with ts-node (TypeScript, development)
- `npm run build` — Compile TypeScript to JavaScript
- `npm run start` — Run the compiled JavaScript server

## VS Code Tasks
- **Start Express Server (TS):** Runs the server with ts-node
- **Build TypeScript:** Compiles TypeScript to JavaScript
- **Start Express Server (JS):** Runs the compiled JavaScript server

## Getting Started
1. Install dependencies: `npm install`
2. Start in development: `npm run dev` or use the VS Code task
3. Build for production: `npm run build`
4. Start production server: `npm run start` or use the VS Code task

## Project Structure
- `index.ts` — Main Express server (TypeScript)
- `index.js` — (Legacy, JavaScript version)
- `dist/` — Compiled JavaScript output (after build)

---

Feel free to remove `index.js` if you only want TypeScript support.
