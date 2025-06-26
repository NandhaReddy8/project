import { defineConfig, PluginOption, ViteDevServer } from 'vite';
import react from '@vitejs/plugin-react';

// Plugin to suppress missing source map warnings
function suppressSourceMapWarnings(): PluginOption {
  return {
    name: 'suppress-source-map-warnings',
    configureServer(server: ViteDevServer) {
      const originalWarn = server.config.logger.warn;
      server.config.logger.warn = ((warn: (msg: string) => void) => (msg: string) => {
        if (msg && msg.includes('Failed to load source map')) return;
        warn(msg);
      })(originalWarn);
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), suppressSourceMapWarnings()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
