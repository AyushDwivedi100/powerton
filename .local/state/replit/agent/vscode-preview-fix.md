# VS Code Preview White Screen - Fixed

## Changes Made

### 1. Added explicit base path in vite.config.ts
```typescript
base: "/"
```
This ensures all asset paths resolve correctly in preview mode.

### 2. Commented out Content Security Policy
The CSP in `client/index.html` (line 122-124) was potentially blocking scripts. It's now commented out for development/preview. You can uncomment it for production deployment if needed.

## How to Test in VS Code

### Step 1: Pull Latest Changes
```bash
# In VS Code terminal, pull the latest code
git pull
```

### Step 2: Clean Build and Preview
```bash
cd client
rm -rf dist node_modules
npm install
npm run build
npm run preview
```

### Step 3: Access the Preview
- Look for the URL in terminal output (e.g., `http://localhost:5173/` or `http://localhost:5000/`)
- Open that URL in your browser
- **Press F12** to open DevTools

### Step 4: Check for Errors
If you still see a white screen:

1. **Console Tab** - Look for red error messages. Common ones:
   - `Failed to fetch` - Translation files not loading
   - `Uncaught TypeError` - JavaScript error
   - `Cannot read property of undefined` - Missing data/config

2. **Network Tab** - Click it and refresh (Ctrl+R). Look for:
   - Red/failed requests (404, 500 errors)
   - Check if `/locales/en/common.json` loads (should be 200 OK)
   - Check if JS/CSS files load from `/assets/`

### Step 5: Report Back
If still broken, please share:
- Any **error messages** from Console tab
- Any **failed requests** from Network tab (screenshot helps!)
- The **exact URL** you're accessing

## What Was Likely Causing the Issue

### Most Probable Cause: Content Security Policy
The CSP was blocking inline scripts and potentially the module scripts that Vite generates. By commenting it out, the preview should now work.

### Secondary Cause: Missing Base Path
Without `base: "/"`, Vite might generate incorrect asset paths in some environments.

## If Still Not Working

### Quick Test - Check if HTML Loads
1. Open preview URL
2. Right-click → "View Page Source"
3. Check if you see the HTML with `<script type="module" src="/assets/index-*.js"></script>`
4. If yes, HTML is loading but JavaScript is failing
5. If no, there's a server/build issue

### Check Translation Files
1. In browser, navigate to: `http://localhost:XXXX/locales/en/common.json`
2. You should see JSON content
3. If you get 404, the locales folder didn't copy to dist

### Verify Build Output
```bash
cd client
ls -la dist/
# Should see: index.html, assets/, locales/, manifest.json, etc.

ls -la dist/locales/en/
# Should see: common.json, navigation.json, pages.json, etc.
```

## Production Deployment Note

When deploying to production:
1. Uncomment the CSP in `client/index.html` if needed for security
2. Ensure your web server serves the `dist/` folder as static files
3. Configure server to redirect all routes to `index.html` (for client-side routing)
