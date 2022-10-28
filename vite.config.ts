import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // sass 配置
  css: {
    preprocessorOptions: {
      // 导入scss预编译程序
      scss: {
        // 配置样式的路径
        additionalData: `@import "@/scss/index.scss";`,
      },
    },
  },
});
