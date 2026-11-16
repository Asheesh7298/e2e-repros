import { expect, test } from 'e2e';

// Chrome and Playwright name these "src" and "Inbox": a descendant whose role is not
// named from content (a tree item's child group, a tab's status badge) adds nothing.
// The web engine adds every descendant's text, so getByRole finds the node by the
// short name and then reads its name as the whole subtree.

test('a parent tree item is named by its own label', async ({ app, screen }) => {
  await app.open('/');
  const src = screen.getByRole('treeitem', 'src');
  await expect(src).toHaveCount(1);
  await expect(src).toHaveAccessibleName('src', { timeout: 1000 });
});

test('a tab is named without its status badge', async ({ app, screen }) => {
  await app.open('/');
  const inbox = screen.getByRole('tab', 'Inbox');
  await expect(inbox).toHaveCount(1);
  await expect(inbox).toHaveAccessibleName('Inbox', { timeout: 1000 });
});
