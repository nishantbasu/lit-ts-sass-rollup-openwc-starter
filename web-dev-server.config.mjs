import { esbuildPlugin } from '@web/dev-server-esbuild';
import { rollupAdapter } from '@web/dev-server-rollup';
import rollupConfig from './rollup.config.mjs';

export default {
  open: true,
  watch: true,
  nodeResolve: true,
  appIndex: 'index.html',
  plugins: [
    esbuildPlugin({ ts: true }),
    rollupAdapter(rollupConfig),
  ],
  middleware: [
    function rewriteIndex(context, next) {
      if (context.url.includes('.')) return next();
      context.url = '/index.html';
      return next();
    },
  ],
};
