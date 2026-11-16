import type { E2EConfig } from 'e2e';
import { web } from '@e2e-dev/web';

export default {
  projectId: 'repro.name-from-content',
  tests: 'tests/**/*.e2e.ts',
  targets: [{ name: 'web', engine: web(), app: { url: 'http://127.0.0.1:4462', command: { executable: 'node', args: ['app/server.mjs'] } } }],
} satisfies E2EConfig;
