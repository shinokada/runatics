# runatics

## 0.2.0

### Minor Changes

- feat: improvements
  - SSR Safety - Checks for window existence before running browser-specific code
  - Prevent Duplicate Initialization - Checks if gtag already exists before initializing
  - Proper Cleanup - Returns cleanup function from $effect to remove scripts when component unmounts
  - Debug Mode - Added optional debug prop for development logging
  - Better Error Handling - Console warnings instead of rendering error UI by default (UI shown only in debug mode)
  - Type Safety - Added global type declarations for window.gtag and window.dataLayer
  - Better Documentation - Updated component documentation with proper prop types and usage examples
  - Development-Friendly - Warns developers about missing IDs without breaking production builds

## 0.1.4

### Patch Changes

- fix: update svelte and tailwindcss 4

## 0.1.3

### Patch Changes

- fix: add main to package.json
  docs: add runes-meta-tags

## 0.1.2

### Patch Changes

- fe91fba: feat: add types
  docs: add link to warning when the project is not set up correctly

## 0.1.1

### Patch Changes

- 22c1ed4: fix: package.json update

## 0.0.2

### Patch Changes

- 2f1ad60: docs: update README
- c8495fe: docs: add doc to homepage
