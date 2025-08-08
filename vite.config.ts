import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],  
  build: {
    outDir: 'dist'
  },
  // 生产资源走 /_content/WebAssets/ 前缀（库名要与你的 RCL 项目名一致）
  base: '/_content/WebAssets/',
  server: {
    proxy: {
      // 当前端请求 /api/... 时，转发到后端 ASP.NET
      '/api': {
        target: 'https://localhost:7080', // 你的后端调试地址（看 launchSettings.json）
        changeOrigin: true,
        secure: false,                    // 后端是开发证书 https 时常用
        // 如果后端真实路由没有 /api 前缀，需要这样改写再转发：
        // rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})