import { test } from 'e2e';

// The page opens a cookie-consent <dialog> with showModal(), so everything outside it is inert.

test('a control behind the modal is offered, and the tap times out', async ({ app, agent }) => {
  await app.open('/');
  await agent.act('tap "Add to cart"');
});

test('a control in an inert section is not offered', async ({ app, agent }) => {
  await app.open('/');
  await agent.act('tap "Inert section button"');
});
