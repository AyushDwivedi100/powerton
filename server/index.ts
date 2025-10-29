#!/usr/bin/env node
// Vite development server launcher for Replit environment
// This ensures proper startup and port binding for React development

console.log(`🚀 Starting Powerton Engineering Application`);
console.log(`🌐 Binding to 0.0.0.0:5000 for Replit compatibility`);

import { spawn } from "node:child_process";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const clientDir = resolve(__dirname, "..", "client");

const isProduction = process.env.NODE_ENV === 'production';

if (isProduction) {
  console.log(`🏭 Starting production server (Vite preview)`);
  process.env.VITE_PORT = '5000';
  
  // Start Vite preview server for production
  const viteProcess = spawn('npx', ['vite', 'preview', '--host', '0.0.0.0', '--port', '5000', '--strictPort'], {
    cwd: clientDir,
    stdio: 'inherit',
    env: {
      ...process.env,
      FORCE_COLOR: '1'
    }
  });
  
  viteProcess.on('error', (error) => {
    console.error(`❌ Failed to start Vite preview server: ${error.message}`);
    process.exit(1);
  });

  viteProcess.on('close', (code) => {
    if (code !== 0) {
      console.log(`⚠️ Vite preview process exited with code ${code}`);
      process.exit(code || 0);
    }
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
} else {
  // Development mode
  process.env.NODE_ENV = 'development';
  process.env.VITE_PORT = '5000';
  
  console.log(`📁 Starting Vite dev server from: ${clientDir}`);
  
  // Start Vite development server with proper configuration
  const viteProcess = spawn('npx', ['vite', '--host', '0.0.0.0', '--port', '5000', '--strictPort'], {
    cwd: clientDir,
    stdio: 'inherit',
    env: {
      ...process.env,
      NODE_ENV: 'development',
      FORCE_COLOR: '1'
    }
  });

  viteProcess.on('error', (error) => {
    console.error(`❌ Failed to start Vite server: ${error.message}`);
    // Fallback: try installing dependencies first
    console.log('💡 Attempting to install client dependencies...');
    const installProcess = spawn('npm', ['install'], {
      cwd: clientDir,
      stdio: 'inherit'
    });
    
    installProcess.on('close', (code) => {
      if (code === 0) {
        console.log('✅ Dependencies installed, restarting Vite...');
        // Restart Vite after installation
        const retryVite = spawn('npx', ['vite', '--host', '0.0.0.0', '--port', '5000', '--strictPort'], {
          cwd: clientDir,
          stdio: 'inherit',
          env: { ...process.env, NODE_ENV: 'development' }
        });
      } else {
        console.error('❌ Failed to install dependencies');
      }
    });
  });

  viteProcess.on('close', (code) => {
    if (code !== 0) {
      console.log(`⚠️ Vite process exited with code ${code}`);
    }
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
}