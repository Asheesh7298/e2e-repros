import type { E2EConfig } from 'e2e';
import { web } from '@e2e-dev/web';
import { htmlReporter } from '@e2e-dev/html-reporter';

export default {
  projectId: 'repro.html-report-overwrite',
  tests: 'tests/**/*.e2e.ts',
  targets: [{ name: 'web', engine: web(), app: { url: 'http://127.0.0.1:4464', command: { executable: 'node', args: ['app/server.mjs'] } } }],
  reporters: ['list', 'junit', 'markdown', htmlReporter()],
} satisfies E2EConfig;
