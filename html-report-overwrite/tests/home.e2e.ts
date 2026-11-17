import { expect, test } from 'e2e';

test('home shows its heading', async ({ app, screen }) => {
  await app.open('/');
  await expect(screen.getByRole('heading', { name: 'Home' })).toBeVisible();
});
