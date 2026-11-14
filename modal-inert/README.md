# Repro: the web engine's tree offers controls behind a modal dialog

```sh
npm install
npx e2e run
cat .e2e/results/*a-control-behind*/attempt-1/screen-at-failure.txt
```

The page opens a `<dialog>` with `showModal()`, so the rest of the page is inert.
Chrome's accessibility tree drops it; the engine's tree lists it.

- `a control behind the modal`: the tree lists `button "Add to cart"`; tapping it
  fails after the full action timeout (`<dialog> intercepts pointer events`).
- `a control in an inert section`: an `inert` attribute section is left out of
  the tree, so the same kind of dead control is never offered.

The executor in `e2e.config.ts` stands in for a model: it taps the node the tree
names, so the repro needs no API key.
