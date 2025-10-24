# GitHub Pages Deployment Setup

## Overview
This portfolio is configured to automatically build and deploy to GitHub Pages using GitHub Actions.

## How It Works

### Local Development
1. **Install Node.js** (if not already installed):
   - Download from https://nodejs.org (LTS version recommended)

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```
   - Opens at `http://localhost:3000`
   - Hot reload enabled - changes appear instantly

4. **Build for production** (optional, to test locally):
   ```bash
   npm run build
   ```
   - Creates `dist/` folder with optimized files

### Automated Deployment
- **Workflow File**: `.github/workflows/deploy.yml`
- **Trigger**: Every push to the `main` branch
- **Process**:
  1. GitHub checks out your code
  2. Installs Node.js 18
  3. Runs `npm ci` (clean install)
  4. Runs `npm run build` (creates optimized `dist/` folder)
  5. Deploys `dist/` contents to GitHub Pages

### GitHub Pages Configuration
1. Go to your repository: https://github.com/ohkai-ship-it/ohkai-ship-it.github.io
2. Settings → Pages
3. Under "Build and deployment":
   - Source: **Deploy from a branch**
   - Branch: **gh-pages** (will be created automatically)
   - Folder: **/ (root)**
4. Save

## Deployment Steps

### First Time Setup
1. Push this code to your `main` branch:
   ```bash
   git add .
   git commit -m "Add GitHub Actions workflow"
   git push origin main
   ```

2. Go to your repository's **Actions** tab on GitHub
   - You'll see the workflow running
   - Wait for it to complete (usually ~1-2 minutes)

3. Check **Settings → Pages** - your site URL will appear

### After Initial Setup
- Simply push changes to `main`
- GitHub Actions automatically builds and deploys
- Visit your site at: `https://ohkai-ship-it.github.io`

## Troubleshooting

### Workflow Fails
- Check the **Actions** tab for error messages
- Common issues:
  - Missing dependencies (check package.json)
  - Build errors (check console output in Actions)

### Site Not Updating
- Clear browser cache (Ctrl+Shift+Delete)
- GitHub deployment can take 2-5 minutes
- Check Actions tab to confirm workflow completed

### Local Issues
- **Port 3000 already in use**: `npm run dev -- --port 3001`
- **Dependencies not installing**: Delete `node_modules/` and `package-lock.json`, then `npm install`

## Files Modified
- `.github/workflows/deploy.yml` - Deployment configuration
- `vite.config.ts` - Updated output directory to `dist`
- `.gitignore` - Excludes build artifacts from git
- `package.json` - Already has build script

## Next Steps
1. Install Node.js locally
2. Commit and push these files to GitHub
3. Monitor the Actions workflow
4. Visit your deployed site!
