import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sass from 'sass'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        // svgr options
      }
    })
  ],
  // esbuild: {
  //   loader: 'jsx'
  // },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx'
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass
      }
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    // this points to the setup file created earlier
    setupFiles: './src/setupTests.ts',
    // you might want to disable the `css: true` line, since we don't have
    // tests that rely on CSS -- and parsing CSS is slow.
    // I'm leaving it in here because often people want to parse CSS in tests.
    css: true,
    reporters: ['junit', 'json', 'verbose'],
    outputFile: {
      junit: './coverage/junit-report.xml',
      json: './coverage/test-results.json'
    },
    coverage: {
      provider: 'istanbul', // or 'v8'
      reportsDirectory: './coverage',
      reporter: ['html', 'text', 'lcov'],
      exclude: [
        '*/node_modules/*',
        '*/test/*',
        '*/coverage/*',
        '*/dist/*',
        '*/express-server-wrapper/*',
        '*/.d.ts' // Exclude TypeScript definition files
      ]
    }
  }
})
