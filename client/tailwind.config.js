/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  important: "#root",
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors : {
        "grey": "#2C3033",
        "grey-50": '#F3F6F9',
        "grey-100": '#E5EAF2',
        "grey-200": '#DAE2ED',
        "grey-300": '#C7D0DD',
        "grey-400": '#B0B8C4',
        "grey-500": '#9DA8B7',
        "grey-600": '#6B7A90',
        "grey-700": '#434D5B',
        "grey-800": '#303740',
        "grey-900": '#1C2025',

        "blue-100": '#DAECFF',
        "blue-200": '#B6DAFF',
        "blue-400": '#3399FF',
        "blue-500": '#007FFF',
        "blue-600": '#0072E5',
        "blue-700": '#0059B2',
        "blue-900": '#003A75',
      },
    },
  },
  plugins: [],
}
