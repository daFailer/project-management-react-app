import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  let base = '/'

  if (mode === 'test') {
    base = '/project-management-react-app/'
  }

  return {
    plugins: [react(), tailwindcss()],
    base,
  }
})
