# Repro: `htmlReporter()` overwrites `report.html` when a run stops before its tests

```sh
npm install
npx e2e run                  # passes; .e2e/report.html shows the test
npx e2e run --grep nomatch   # NO_TESTS, exit 2: "Report  (not written)"
```

After the second run, `report.json`, `junit.xml`, and `summary.md` are still the
first run's (same checksums), but `report.html` was replaced by a page with no
tests and a `NO_TESTS` error. The terminal says the report was not written, then
names the HTML report on the next line:

```text
 ERROR  configuration error NO_TESTS (collection)
1 tests were collected but none is runnable: 1 have titles matching none of /nomatch/; pass --pass-with-no-tests to allow this
 Test Files  no test files
      Tests  no tests executed
     Errors  1 error
     Report  (not written)
HTML report  .e2e/report.html
```

`npx e2e run --last-failed` after a green run does the same.
