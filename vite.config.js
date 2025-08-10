// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'ffa77252-a04a-4c59-adba-36189ed855c5-00-2uaidltlf3qqq.pike.replit.dev' // your replit host
    ]
  }
});
