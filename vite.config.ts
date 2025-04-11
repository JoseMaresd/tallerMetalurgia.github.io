import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // For username.github.io repositories, the base should be '/'
  base: "/",
})
