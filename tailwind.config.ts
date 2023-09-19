import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    ' ./styles/**/*.css'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#001E00'
      }
    },
  },
  plugins: [],
}
export default config
