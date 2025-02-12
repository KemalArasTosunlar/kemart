import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html'),
      output: {
        manualChunks: {
          vendor: [
            'react',
            'react-dom',
            'react-router-dom',
            'react-redux',
            '@reduxjs/toolkit'
          ],
          components: [
            './src/components/ProductCard.jsx'
          ],
          pages: [
            './src/pages/HomePage.jsx',
            './src/pages/ShopPage.jsx',
            './src/pages/ProductDetailPage.jsx',
            './src/pages/ContactPageMobile.jsx',
            './src/pages/ContactPageDesktop.jsx'
          ]
        }
      }
    }
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
});
