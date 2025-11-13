# Preview Mode Debugging Guide

## Issue
Running `npm run preview` in `client` folder shows white screen

## Root Cause Analysis

### Port Conflict
- Dev server is running on port 5000 (via workflow "Start application")
- When you run `npm run preview`, it detects port 5000 is busy
- Preview automatically starts on port 5001

### White Screen Causes
The white screen could be caused by one of these issues:

1. **Wrong URL** - Accessing http://localhost:5000 instead of http://localhost:5001
2. **Console Errors** - JavaScript errors preventing React from mounting
3. **Missing Translation Files** - i18n failing to load locale files
4. **Asset Loading Issues** - CSS/JS files not loading properly

## How to Debug

### Step 1: Stop Dev Server First
```bash
# Stop the workflow "Start application" or press Ctrl+C if running manually
# This frees up port 5000
```

### Step 2: Run Preview on Port 5000
```bash
cd client
npm run preview
# Should now run on http://localhost:5000/
```

### Step 3: Check Browser Console
Open browser DevTools (F12) and check for:
- Red errors in Console tab
- Failed network requests in Network tab
- Look for 404 errors on `/locales/` files

### Step 4: Common Fixes

**If translations fail to load:**
- The build should have copied `public/locales` to `dist/locales` ✅ (Verified: locales are in dist)
- Check if `/locales/en/common.json` loads (should return 200, not 404)

**If assets fail to load:**
- All asset paths in built HTML use absolute paths starting with `/`
- This works for root-level serving but may fail if deployed to subdirectory
- For subdirectory deployment, you'd need to set `base: '/your-subdirectory/'` in vite.config.ts

**If React doesn't mount:**
- Check console for errors in `main.tsx` or `App.tsx`
- Verify `<div id="root"></div>` exists in dist/index.html ✅ (Verified: present)

## Testing Checklist

✅ Build completed successfully - verified
✅ dist/index.html exists - verified  
✅ dist/assets/ folder has JS/CSS files - verified
✅ dist/locales/ has all translation files - verified
❓ Preview server accessed at correct port - **needs verification**
❓ Browser console shows no errors - **needs verification**

## Next Steps

1. Access the preview at the **correct port** (5001 if dev server running, 5000 if stopped)
2. Open browser DevTools and check Console tab for errors
3. Share any error messages you see
4. Check Network tab for failed requests (especially `/locales/` files)
