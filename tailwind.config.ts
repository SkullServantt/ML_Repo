import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        honda: "#E60012",
        ink: "#080808",
        smoke: "#A1A1AA"
      },
      boxShadow: {
        glass: "0 20px 70px rgba(0,0,0,.35)"
      }
    }
  },
  plugins: []
};
export default config;