import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Sales_Haken_simu/', // 👈 今回のリポジトリ名「SalesForecast」に書き換えます
})
