import type { E2EConfig } from 'e2e';
import { web } from '@e2e-dev/web';

export default {
  projectId: 'repro.skip-in-after-each',
  tests: 'tests/**/*.e2e.ts',
  targets: [{ name: 'web', engine: web(), app: { url: 'http://127.0.0.1:4463', command: { executable: 'node', args: ['app/server.mjs'] } } }],
} satisfies E2EConfig;
