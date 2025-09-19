# Mato Industries Website Rework

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

This is a React + Vite web application for Mato Industries, an ISO-9001 certified manufacturer specializing in Bronze Bushings, Washers, and related copper alloy components. The project uses React 19.1.1, Vite 7.1.6, and Tailwind CSS v4 for styling.

## Working Effectively

### Prerequisites
- Node.js v20.19.5 and npm v10.8.2 are available
- All commands should be run from the `frontend/` directory: `cd /path/to/repo/frontend`

### Bootstrap and Dependencies
- Install dependencies: `npm install`
  - Takes ~8 seconds to complete
  - Installs 176 packages with 0 known vulnerabilities
  - NEVER CANCEL: Set timeout to 30+ seconds for safety

### Build Process
- Development build: `npm run dev`
  - Starts Vite dev server on http://localhost:5173/
  - Takes ~500ms to start
  - Includes HMR (Hot Module Replacement)
  - NEVER CANCEL: Set timeout to 30+ seconds
- Production build: `npm run build`
  - Takes ~1.6 seconds to complete
  - Creates optimized bundle in `dist/` directory
  - NEVER CANCEL: Set timeout to 60+ seconds for safety
- Preview production build: `npm run preview`
  - Serves built application on http://localhost:4173/
  - NEVER CANCEL: Set timeout to 30+ seconds

### Linting and Code Quality
- Run ESLint: `npm run lint`
  - Takes <1 second to complete
  - Uses modern ESLint v9 configuration with React hooks and refresh plugins
  - NEVER CANCEL: Set timeout to 30+ seconds
  - ALWAYS run before committing changes

## Validation

### Required Manual Testing After Changes
- ALWAYS run through the complete startup process after making changes:
  1. `cd frontend && npm install`
  2. `npm run build` 
  3. `npm run dev`
  4. Navigate to http://localhost:5173/ in browser
  5. Test interactive functionality (e.g., button clicks, form interactions)
  6. Verify visual styling appears correctly with Tailwind CSS
  7. Test responsive design on different screen sizes if UI changes were made

### End-to-End Validation Scenario
- Start the development server and verify the application loads
- Test any interactive elements (buttons, forms, navigation)
- Verify counter button increments correctly (default test functionality)
- If making component changes, ensure React hot reload works by editing a file
  - HMR updates appear in browser console as "[vite] hot updated"
  - Changes reflect immediately without page reload
- Verify Tailwind CSS classes are applied correctly  
- Test both development (`npm run dev` on :5173) and preview (`npm run preview` on :4173) servers
- Take screenshots of UI changes for documentation

### Pre-commit Checklist
- ALWAYS run `npm run lint` before committing - this must pass
- Build must complete successfully: `npm run build`
- Manual testing scenario must be completed for any functional changes

## Project Structure

### Key Directories and Files
```
frontend/
├── src/
│   ├── App.jsx          # Main React component
│   ├── main.jsx         # React app entry point
│   ├── App.css          # Component-specific styles
│   ├── index.css        # Global styles with Tailwind imports
│   └── assets/          # Static assets (images, icons)
├── public/              # Public static files
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── eslint.config.js     # ESLint configuration
└── index.html           # HTML entry point
```

### Configuration Files
- **package.json**: Contains npm scripts and dependencies
- **vite.config.js**: Vite build configuration with React and Tailwind plugins
- **eslint.config.js**: Modern ESLint configuration for React development
- **index.css**: Imports Tailwind CSS and contains global styles

## Technology Stack

### Core Technologies
- **React 19.1.1**: UI framework
- **Vite 7.1.6**: Build tool and dev server
- **Tailwind CSS v4**: Utility-first CSS framework via @tailwindcss/vite plugin

### Development Tools
- **ESLint 9.35.0**: Code linting with React-specific rules
- **eslint-plugin-react-hooks**: React hooks linting
- **eslint-plugin-react-refresh**: React refresh linting

## Important Notes

### No Test Suite
- This project currently has NO test suite configured
- Do NOT attempt to run `npm test` or similar commands
- Manual validation through browser testing is required

### No CI/CD Pipeline
- No GitHub Actions workflows are configured
- No automated builds or deployments
- All validation must be done locally

### Build Performance
- Build times are very fast (<2 seconds) due to Vite's optimization
- No long-running processes or complex build steps
- Development server starts quickly (~500ms)

## Troubleshooting

### Common Issues
- If build fails, check that all dependencies are installed: `npm install`
- If linting fails, review ESLint configuration in `eslint.config.js`
- If styles don't apply, verify Tailwind CSS is properly imported in `index.css`
- CSS warning about `/src/style.css` during build is expected and harmless

### Development Server Issues
- Development server runs on port 5173 by default
- Preview server runs on port 4173 by default
- Use `--host` flag to expose server to network if needed

## Project Requirements Reference

This website should implement:
- Modern, professional design for manufacturing company
- Responsive layout for mobile and desktop
- Pages: Home, About Us, Infrastructure, Products, Contact, FAQ
- Features: Image carousels, contact forms, team sections
- Quality process highlights: SPC Edge software, CP/CPK, digital work instructions

Always refer to `PROJECT_REQUIREMENTS.md` for detailed content and feature specifications.

## Common Command Outputs

### Repository Structure
```
ls -la [repo-root]
.git/
.github/
.gitignore
PROJECT_REQUIREMENTS.md
README.md
frontend/
```

### Frontend Directory
```
ls -la frontend/
.gitignore
README.md
eslint.config.js
index.html
package-lock.json
package.json
public/
src/
vite.config.js
```

### Successful Build Output
```
npm run build
> vite build
vite v7.1.6 building for production...
✓ 32 modules transformed.
✓ built in ~1000ms
```

### Development Server Startup
```
npm run dev
VITE v7.1.6  ready in ~500ms
➜  Local:   http://localhost:5173/
```