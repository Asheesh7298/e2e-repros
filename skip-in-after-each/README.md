# Repro: `test.skip()` in `afterEach` fails a passing test with `ERROR: [object Object]`

```sh
npm install
npx e2e run
```

The test passes, then its `afterEach` hook calls `test.skip(true, 'too late')`.
A skip there is not supported (the conditional skip works in a test body or a
`beforeEach` hook), but the run reports the test failed with no usable message:

```text
   × |web| tests/late-skip.e2e.ts > passes 504ms
     → [object Object]
 FAIL  |web| tests/late-skip.e2e.ts > passes
ERROR: [object Object]
```

The same skip in a `test.extend()` fixture's teardown gives the same result.
`test.fail()` in the same place gets a clear refusal instead:
`INVALID_ARGUMENT: test.fail() cannot mark a test from an afterEach hook or a fixture teardown: its verdict is already reached`.
