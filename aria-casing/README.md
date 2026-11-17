# Repro: mixed-case ARIA values are read case-sensitively

```sh
npm install
npx e2e run                    # the tree, then two failing matchers
node playwright/compare.mjs    # the same page in Playwright 1.65.0
```

The page has `aria-checked="True"`, `aria-expanded="True"`, `aria-pressed="True"`,
and `role="Button"`, as server templates that stringify booleans write them.

`getByRole('checkbox', { checked: true })` finds the checkbox, and `toBeChecked()`
on that same locator fails. The same goes for `expanded` and `toBeExpanded()`. The
tree the agent reads drops the states and reads `role="Button"` as text:

```text
 #n2 checkbox "Remember me"
 #n3 button "Menu"
 #n4 button "Bold"
 #n5 text="Save"
```

Playwright 1.65.0, the version `@e2e-dev/web` 0.16.0 installs, reads all four:

```text
- checkbox "Remember me" [checked]
- button "Menu" [expanded]
- button "Bold" [pressed]
- button "Save"
```
