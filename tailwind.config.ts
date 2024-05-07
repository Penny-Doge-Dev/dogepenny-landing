import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(2rem)' },
          '100%': { transform: 'translateY(-0px)' },
        },
      },
      animation: {
        float: 'float 1s ease-in-out infinite',
      },
      colors: {
        bg: '#B3DEFE',
        black: '#212121',
        blackBorder: '#000',
        primary: '#FFBB43',
        primaryDarkest: '#EA9E18',
        primaryDarker: '#FCB943',
        secondary: '#FB850E',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
