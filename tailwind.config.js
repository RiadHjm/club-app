/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {},
    colors: {
      'midnight-blue': {
        '50': '#eef7ff',
        '100': '#dcefff',
        '200': '#b2e1ff',
        '300': '#6dc9ff',
        '400': '#20aeff',
        '500': '#0093ff',
        '600': '#0074df',
        '700': '#005bb4',
        '800': '#004e94',
        '900': '#003667',
        '950': '#002851',
      },
      'barberry': {
        '50': '#f8fee8',
        '100': '#eeffc2',
        '200': '#e2ff88',
        '300': '#d8ff43',
        '400': '#daff10',
        '500': '#d5ef03',
        '600': '#d0d700',
        '700': '#a49c04',
        '800': '#87790c',
        '900': '#736210',
        '950': '#433605',
    },    
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xlg': '1200',
    }  
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

