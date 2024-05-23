import react from '@vitejs/plugin-react'
import { configDefaults, defineConfig } from 'vitest/config'
 
export default defineConfig({
  plugins: [react()],
  test: {
    exclude: [
      '/e2e/*',
      ...configDefaults.exclude,
    ],
    environment: 'jsdom',
  },
})