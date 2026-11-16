# Repro: names from content include descendants with their own role

```sh
npm install
npx e2e run
cat .e2e/results/*parent-tree-item*/attempt-1/screen-at-failure.txt
```

Chrome and Playwright name the parent tree item `src` and the tab `Inbox`. A
descendant whose role is not named from content (a tree item's child `group`, a
tab's `status` badge) adds nothing to the name.

The web engine adds every descendant's text, so the tree reads
`treeitem "src lib a.ts b.ts index.ts"` and `tab "Inbox 3"`. `getByRole('treeitem', 'src')`
finds the node, and `toHaveAccessibleName('src')` on that same locator fails.
