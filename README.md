# e2e repros

Minimal reproductions for bugs reported to [e2e](https://github.com/e2e-inc/e2e).
Each folder is a standalone project on the published npm packages.

| Folder | Bug |
| --- | --- |
| [`modal-inert`](modal-inert) | The web engine's tree lists controls behind a `showModal()` dialog |
| [`name-from-content`](name-from-content) | Names from content include descendants with their own role (a tree item, a tab badge) |
| [`skip-in-after-each`](skip-in-after-each) | `test.skip()` in `afterEach` fails a passing test with `ERROR: [object Object]` |
| [`html-report-overwrite`](html-report-overwrite) | `htmlReporter()` overwrites `report.html` when a run stops before its tests |
| [`aria-casing`](aria-casing) | `aria-checked="True"`, `aria-expanded`, `aria-pressed`, and `role="Button"` are read case-sensitively, unlike Playwright 1.65 |
