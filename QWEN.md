# MTW Project Context

## Project Overview

**MTW** is a React-based visualization application for solving problems from *Gravitation* by Misner, Thorne, and Wheeler. The project uses **Vite** as the build tool and development server.

The project currently contains mathematical reference materials on **quaternions and the exponential map**, including:
- Quaternion algebra (ℍ)
- The exponential function on ℝ, ℂ, and ℍ
- Jacobian matrices for quaternion exponential maps
- Applications to 3D rotations and Lie group theory

## Technology Stack

| Layer | Technology |
|-------|------------|
| Framework | React 19 |
| Build Tool | Vite 8 |
| Language | JavaScript (ES Modules) |
| Linting | ESLint (Flat Config) |
| Styling | CSS |

## Project Structure

```
mtw/
├── src/
│   ├── main.jsx          # React entry point
│   ├── App.jsx           # Main application component
│   ├── App.css           # Component styles
│   ├── index.css         # Global styles
│   ├── assets/           # Images, icons, media
│   └── reference/        # Mathematical reference documents
│       ├── exponential-quat.md   # Quaternion exponential documentation
│       ├── exponential-quat.tex  # LaTeX source
│       ├── exponential_quat.pdf  # PDF export
│       └── mtw.pdf               # Gravitation reference
├── public/
│   ├── favicon.svg
│   └── icons.svg         # SVG sprite for UI icons
├── index.html            # HTML entry point
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
└── eslint.config.js      # ESLint flat configuration
```

## Building and Running

```bash
# Install dependencies
npm install

# Start development server with HMR
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Development Conventions

### Code Style
- **ES Modules**: All JavaScript uses ES module syntax (`import`/`export`)
- **JSX**: React components use JSX with modern hooks patterns
- **Naming**: Components use PascalCase; utilities use camelCase
- **Unused Variables**: ESLint configured to ignore variables starting with `A-Z_` (common for React components)

### Linting Rules
- Uses ESLint Flat Config with:
  - `@eslint/js` recommended rules
  - `eslint-plugin-react-hooks` for hooks best practices
  - `eslint-plugin-react-refresh` for Vite HMR compatibility
- Ignores `dist/` directory

### File Organization
- Component-specific styles co-located with components (`.css` alongside `.jsx`)
- Reference materials stored in `src/reference/` (excluded from build via `.gitignore`)
- Static assets in `public/` for direct serving

## Key Configuration

### Vite (`vite.config.js`)
- Default React plugin configuration
- No custom aliases or build overrides currently configured

### ESLint (`eslint.config.js`)
```javascript
// Key rules:
- no-unused-vars: Allows uppercase variables (components)
- languageOptions: ECMAScript 2020, JSX enabled
```

## Notes

- The `reference/` directory contains LaTeX and PDF documents that are gitignored
- The project is set up as a private package (version 0.0.0)
- React 19 with StrictMode enabled for development
