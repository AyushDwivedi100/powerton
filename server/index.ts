#!/usr/bin/env node
// Server for Powerton Engineering Application
// Properly configured for Replit environment

console.log(`🚀 Starting Powerton Engineering Application`);
console.log(`🌐 Running on 0.0.0.0:5000 for Replit compatibility`);

import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync, existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 5000;

// Serve static files from client directory 
const clientDir = join(__dirname, '..', 'client');
const publicDir = join(clientDir, 'public');
const srcDir = join(clientDir, 'src');

// Basic middleware
app.use(express.json());
app.use(express.static(publicDir));

// API routes can be added here
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Powerton Engineering Server Running' });
});

// Serve the main HTML file for all non-API routes  
app.use((req, res, next) => {
  if (req.path.startsWith('/api/')) {
    return next();
  }
  const indexPath = join(clientDir, 'index.html');
  if (existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send('<h1>Application Loading...</h1><p>Client files not found. Please check the build setup.</p>');
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Powerton Engineering server running on http://0.0.0.0:${PORT}`);
  console.log(`📁 Serving from: ${clientDir}`);
  console.log(`🔧 Environment: ${process.env.NODE_ENV || 'development'}`);
});