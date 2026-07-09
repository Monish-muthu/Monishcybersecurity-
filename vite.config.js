import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

function removeCrossorigin() {
  return {
    name: 'remove-crossorigin',
    transformIndexHtml(html) {
      return html.replace(/ crossorigin(="")?/g, '')
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), removeCrossorigin()],
  base: '/Monishcybersecurity-/',
})