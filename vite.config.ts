import { defineConfig, loadEnv } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
  return {
    plugins: [svelte()],
    define: {
      'process.env': loadEnv(mode, process.cwd(), '')
    }
  }
})