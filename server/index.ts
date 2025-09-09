#!/usr/bin/env node
// Simple server launcher for Replit environment
// This ensures proper startup and port binding

console.log(`🚀 Starting Powerton Engineering Application`);
console.log(`🌐 Binding to 0.0.0.0:5000 for Replit compatibility`);

import { exec } from "child_process";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const clientDir = resolve(__dirname, "..", "client");

// Start Vite development server directly
const viteCmd = `cd ${clientDir} && npm run dev -- --host 0.0.0.0 --port 5000`;

const viteProcess = exec(viteCmd, (error, stdout, stderr) => {
  if (error) {
    console.error(`❌ Error: ${error}`);
    return;
  }
  console.log(stdout);
  console.error(stderr);
});

viteProcess.stdout?.on('data', (data) => {
  console.log(data.toString());
});

viteProcess.stderr?.on('data', (data) => {
  console.error(data.toString());
});

viteProcess.on('close', (code) => {
  console.log(`✅ Process exited with code ${code}`);
});

// Handle process termination
process.on('SIGINT', () => {
  console.log('🛑 Shutting down...');
  viteProcess.kill('SIGINT');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('🛑 Shutting down...');
  viteProcess.kill('SIGTERM');
  process.exit(0);
});