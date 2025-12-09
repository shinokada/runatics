# Runatics Test Suite

Comprehensive unit and integration tests for the Runatics component using Vitest and Testing Library.

## Test Files

> **Important**: Test files must use the `.svelte.test.ts` extension to run in the jsdom (browser) environment. Files with just `.test.ts` will run in Node.js environment where DOM APIs are unavailable.

### `Runatics.svelte.test.ts` - Unit Tests

Core functionality tests covering:

- **Basic Functionality**
  - Component rendering with valid analyticsId
  - Google Analytics script injection in `<svelte:head>`
  - gtag initialization in document head

- **Duplicate Prevention**
  - Skips initialization if gtag already exists
  - Debug logging when skipping initialization

- **Missing Analytics ID**
  - Console warnings when ID is missing
  - Error UI visibility based on debug mode
  - Documentation link verification

- **Debug Mode**
  - Initialization logging when debug is enabled
  - Silent operation when debug is disabled

- **Props Validation**
  - analyticsId prop handling
  - debug prop default value

- **Cleanup**
  - Script removal on component unmount
  - Proper effect cleanup

- **Multiple Analytics IDs**
  - Handling different GA measurement IDs

- **SSR Safety**
  - Graceful handling when window is undefined

### `Runatics.integration.svelte.test.ts` - Integration Tests

Real-world scenario tests covering:

- **Google Analytics Script Loading**
  - External script (gtag.js) loading
  - Inline script initialization
  - dataLayer array initialization
  - gtag function definition
  - Configuration calls

- **Real-world Scenarios**
  - Various GA4 measurement ID formats
  - Production environment (no debug)
  - Development environment (with debug)

- **Error Prevention**
  - Empty string handling
  - Switching between valid IDs

- **Script Injection Timing**
  - Immediate injection verification

- **Analytics ID Validation**
  - Valid GA4 measurement ID formats
  - Edge cases (empty, invalid formats)

- **Component Lifecycle**
  - Mount and unmount behavior
  - Multiple mount/unmount cycles

## Running Tests

```bash
# Run all tests
npm run test:unit

# Run tests in watch mode
npm run test:unit -- --watch

# Run tests with coverage
npm run test:unit -- --coverage

# Run specific test file
npm run test:unit -- Runatics.svelte.test

# Run specific test suite
npm run test:unit -- -t "Basic Functionality"
```

## Test Coverage

The test suite covers:

✅ Component rendering and initialization
✅ Script injection (both external and inline)
✅ Duplicate prevention logic
✅ Debug mode functionality
✅ Error handling and warnings
✅ Props validation
✅ Cleanup and lifecycle management
✅ SSR safety
✅ Real-world GA4 measurement IDs
✅ Production vs development behavior
✅ Multiple mount/unmount cycles

## Test Environment

- **Test Runner**: Vitest
- **Testing Library**: @testing-library/svelte
- **DOM Environment**: jsdom
- **Assertions**: Vitest expect API with @testing-library/jest-dom matchers

## Writing New Tests

When adding new features, follow this pattern:

```typescript
import { render, screen } from '@testing-library/svelte';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import Runatics from './Runatics.svelte';

describe('Feature Name', () => {
  beforeEach(() => {
    // Clean up DOM and mocks
    document.head.innerHTML = '';
    delete window.gtag;
    delete window.dataLayer;
    vi.clearAllMocks();
  });

  it('should do something specific', () => {
    const { container } = render(Runatics, {
      props: { analyticsId: 'G-TEST123' }
    });

    // Your assertions here
    expect(container).toBeTruthy();
  });
});
```

## Mocking Console Methods

When testing console output:

```typescript
const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

// Your test code

expect(consoleSpy).toHaveBeenCalledWith('expected message');
consoleSpy.mockRestore();
```

## Testing Cleanup

Always clean up after tests to prevent side effects:

```typescript
beforeEach(() => {
  document.head.innerHTML = '';
  delete window.gtag;
  delete window.dataLayer;
  vi.clearAllMocks();
});

afterEach(() => {
  vi.restoreAllMocks();
});
```
