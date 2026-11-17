import { afterEach, expect, test } from 'e2e';

// A skip after the body has passed: not supported, but the error says nothing.
afterEach(() => {
  test.skip(true, 'too late');
});

test('passes', async () => {
  expect(1).toBe(1);
});
