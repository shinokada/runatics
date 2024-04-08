import { expect, test } from '@playwright/test';

test('index page has expected h1, meta title', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Svelte Supertiny' })).toBeVisible();
  await expect(page).toHaveTitle('Svelte SVG Icons - Svelte Supertiny');
});

test('Icons page has expected h1, meta title', async ({ page }) => {
  await page.goto('/icons');
  await expect(page.getByRole('heading', { name: 'Icons: Svelte Supertiny' })).toBeVisible();
  await expect(page).toHaveTitle('Icons: Svelte Supertiny');
});

test('Svelte 4 getting started page has expected h1, meta title', async ({ page }) => {
  await page.goto('/guide/svelte-4/getting-started');
  await expect(page.getByRole('heading', { name: 'Svelte Supertiny: v1' })).toBeVisible();
  await expect(page).toHaveTitle('Svelte Supertiny v1');
});

test('Svelte 4 props page has expected h1, meta title', async ({ page }) => {
  await page.goto('/guide/svelte-4/props');
  await expect(page.getByRole('heading', { name: 'Props: v1' })).toBeVisible();
  await expect(page).toHaveTitle('Svelte Supertiny v1 Props');
});

test('Svelte 5 getting started page has expected h1, meta title', async ({ page }) => {
  await page.goto('/guide/svelte-5/getting-started');
  await expect(page.getByRole('heading', { name: 'Svelte Supertiny: v2' })).toBeVisible();
  await expect(page).toHaveTitle('Svelte Supertiny v2');
});

test('Svelte 5 props page has expected h1, meta title', async ({ page }) => {
  await page.goto('/guide/svelte-5/props');
  await expect(page.getByRole('heading', { name: 'Props: v2' })).toBeVisible();
  await expect(page).toHaveTitle('Svelte Supertiny v2 Props');
});

test('Global icons page has expected h1, meta title', async ({ page }) => {
  await page.goto('/guide/global-icons');
  await expect(
    page.getByRole('heading', { name: 'Setting Global Icon using setContext' })
  ).toBeVisible();
  await expect(page).toHaveTitle('Svelte Supertiny - Global Icons');
});

test('Custom default icons props page has expected h1, meta title', async ({ page }) => {
  await page.goto('/guide/custom-icons');
  await expect(page.getByRole('heading', { name: 'Custom Default Icons' })).toBeVisible();
  await expect(page).toHaveTitle('Svelte Supertiny - Custom Default Icons');
});
