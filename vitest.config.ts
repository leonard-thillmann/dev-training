import react from '@vitejs/plugin-react';
import path from 'path';
import { configDefaults, defineConfig } from 'vitest/config';
 
export default defineConfig({
  plugins: [react()],
  test: {
    exclude: [
      ...configDefaults.exclude,
      '**/e2e/**',
    ],    
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'istanbul', // or 'v8',
      reporter: ['text', 'json', 'html'],
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "./"),
    }
  }
})