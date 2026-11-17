import type { E2EConfig } from 'e2e';
import { web } from '@e2e-dev/web';

export default {
  projectId: 'repro.aria-casing',
  tests: 'tests/**/*.e2e.ts',
  targets: [{ name: 'web', engine: web(), app: { url: 'http://127.0.0.1:4465', command: { executable: 'node', args: ['app/server.mjs'] } } }],
} satisfies E2EConfig;
