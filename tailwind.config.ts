import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B82F6',
          light: '#60A5FA',
          dark: '#2563EB',
        },
        accent: {
          DEFAULT: '#8B5CF6',
          light: '#A78BFA',
        },
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'neutral-dark': '#1F2937',
        'neutral-darker': '#111827',
      },
    },
  },
  plugins: [],
};

export default config;
