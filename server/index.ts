#!/usr/bin/env node
// Redirect to frontend-only client application
// This file ensures the workflow runs the client dev server

import { spawn } from "child_process";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const clientDir = resolve(__dirname, "..", "client");
const port = process.env.PORT || '5000';

console.log(`🚀 Starting Powerton Engineering (Frontend-Only)`);
console.log(`📁 Client directory: ${clientDir}`);

// Start Vite development server
const viteProcess = spawn('npm', ['run', 'dev', '--', '--host', '0.0.0.0', '--port', port], {
  cwd: clientDir,
  stdio: 'inherit'
});

viteProcess.on('error', (err) => {
  console.error('❌ Client server error:', err);
  process.exit(1);
});

viteProcess.on('close', (code) => {
  console.log(`✅ Client server exited with code ${code}`);
  process.exit(code || 0);
});

// Handle termination
process.on('SIGINT', () => {
  console.log('🛑 Shutting down...');
  viteProcess.kill('SIGINT');
});

process.on('SIGTERM', () => {
  console.log('🛑 Shutting down...');
  viteProcess.kill('SIGTERM');
});