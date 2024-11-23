import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  console.log(`Running ${test.info().title}`);
  await page.goto('/');
});

test('index page has expected h1', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'Runatics' })).toBeVisible();
});

test('index page has expected meta title', async ({ page }) => {
  await expect(page).toHaveTitle('Runatics');
});

test('index page has expected meta description', async ({ page }) => {
  const metaDescription = page.locator('meta[name="description"]');
  await expect(metaDescription).toHaveAttribute(
    'content',
    'A simple Google analyics component for Svelte Runes project.'
  );
});

test('index page has expected meta keywords', async ({ page }) => {
  const metaKeywords = page.locator('meta[name="keywords"]');
  await expect(metaKeywords).toHaveAttribute('content', 'svelte, runes, google, analytics');
});

test('index page has expected meta og', async ({ page }) => {
  const metaOgTitle = page.locator('meta[property="og:title"]');
  await expect(metaOgTitle).toHaveAttribute('content', 'Runatics');
  const metaOgDescription = page.locator('meta[property="og:description"]');
  await expect(metaOgDescription).toHaveAttribute(
    'content',
    'A simple Google analyics component for Svelte Runes project.'
  );
  const metaOgUrl = page.locator('meta[property="og:url"]');
  await expect(metaOgUrl).toHaveAttribute('content', 'http://localhost:4173/');
  const metaOgImage = page.locator('meta[property="og:image"]');
  await expect(metaOgImage).toHaveAttribute(
    'content',
    'https://open-graph-vercel.vercel.app/api/runatics'
  );
});

test('index page has expected meta twitter', async ({ page }) => {
  const metaTwitterTitle = page.locator('meta[name="twitter:title"]');
  await expect(metaTwitterTitle).toHaveAttribute('content', 'Runatics');
  const metaTwitterDescription = page.locator('meta[name="twitter:description"]');
  await expect(metaTwitterDescription).toHaveAttribute(
    'content',
    'A simple Google analyics component for Svelte Runes project.'
  );
  const metaTwitterImage = page.locator('meta[name="twitter:image"]');
  await expect(metaTwitterImage).toHaveAttribute(
    'content',
    'https://open-graph-vercel.vercel.app/api/runatics'
  );
});
