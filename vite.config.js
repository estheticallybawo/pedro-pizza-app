import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        configure: (proxy) => {
          proxy.on("proxyReq", (proxyReq) => {
            console.log("Proxying request to:", proxyReq.path);
          });
          proxy.on("proxyRes", (proxyRes) => {
            console.log("Received response from target:", proxyRes.statusCode);
          });
        },
      },
    },
  },
  "/public": {
    target: "http://localhost:3000",
    changeOrigin: true,
    configure: (proxy) => {
      proxy.on("proxyReq", (proxyReq) => {
        console.log("Proxying request to:", proxyReq.path);
      });
      proxy.on("proxyRes", (proxyRes) => {
        console.log("Received response from target:", proxyRes.statusCode);
      });
    },
  },
  plugins: [react()],
});
