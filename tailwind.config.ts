import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff8165",
      },
      fontFamily: {
        // 日本語・見出し用
        'mobo': ['mobo', 'sans-serif'],
        // 日本語・小見出し用
        'genjyuu-bold': ['GenJyuuGothic-Monospace-Bold', 'monospace'],
        // 日本語・本文用
        'genjyuu': ['GenJyuuGothic-P-Medium', 'sans-serif'],
        // 英語・見出し用
        'segoe-black': ['Segoe UI Black', 'sans-serif'],
        // 英語・本文用
        'segoe': ['Segoe UI Symbol', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
