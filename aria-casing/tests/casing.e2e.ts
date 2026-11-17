import { expect, test } from 'e2e';

test('prints the tree', async ({ app, screen }) => {
  await app.open('/');
  console.log(await screen.tree());
});

test('a checkbox found as checked is checked', async ({ app, screen }) => {
  await app.open('/');
  const box = screen.getByRole('checkbox', { checked: true });
  await expect(box).toHaveCount(1);
  await expect(box).toBeChecked();
});

test('a button found as expanded is expanded', async ({ app, screen }) => {
  await app.open('/');
  const menu = screen.getByRole('button', { expanded: true });
  await expect(menu).toHaveCount(1);
  await expect(menu).toBeExpanded();
});
