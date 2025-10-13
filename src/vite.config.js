import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { imagetools } from 'vite-imagetools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    imagetools({
      defaultDirectives: (url) => {
        // Hero image optimization (higher quality)
        if (url.searchParams.has('hero')) {
          return new URLSearchParams({
            format: 'webp',
            quality: '85',
            w: '300;600',
          })
        }
        // Portfolio images optimization
        if (url.searchParams.has('portfolio')) {
          return new URLSearchParams({
            format: 'webp',
            quality: '75',
            w: '400;800',
          })
        }
        // Default optimization for other images
        return new URLSearchParams({
          format: 'webp',
          quality: '75',
        })
      },
    }),
  ],
  base: '/',
})
