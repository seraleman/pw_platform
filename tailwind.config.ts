import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        ['purple-brand']: '#421c65',
        ['violet-brand']: '#e8d7ff',
        ['purple-card-dark']: '#b19dfc',
      },
    },
  },
  plugins: [],
} satisfies Config
