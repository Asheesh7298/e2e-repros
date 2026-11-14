import type { E2EConfig, StepExecutor } from 'e2e';
import { web } from '@e2e-dev/web';

/**
 * No model: taps the button the instruction names, by its node id in the tree,
 * the way an agent picks a node off the observation it is shown.
 */
const tapNamed: StepExecutor = {
  name: 'tap-named',
  version: '1',
  cache: 'off',
  async runStep(context) {
    const screen = await context.observe();
    const name = /"([^"]+)"/u.exec(context.step.instruction)?.[1] ?? '';
    const line = screen.text.split('\n').find((entry) => entry.includes(`button "${name}"`));
    const id = /#(\S+)/u.exec(line ?? '')?.[1];
    if (id === undefined) return { status: 'failed', summary: `the tree offers no button "${name}"`, errorCode: 'STEP_NO_CONCLUSION' };
    const started = Date.now();
    await context.actions.tap({ id });
    return { status: 'passed', summary: `tapped #${id} in ${Date.now() - started}ms` };
  },
};

export default {
  projectId: 'repro.modal-inert',
  tests: 'tests/**/*.e2e.ts',
  timeout: 30_000,
  targets: [{ name: 'web', engine: web(), app: { url: 'http://127.0.0.1:4461', command: { executable: 'node', args: ['app/server.mjs'] } } }],
  agents: { default: { executor: tapNamed } },
} satisfies E2EConfig;
