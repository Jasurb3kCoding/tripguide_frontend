/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['DM Sans', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'black': '#3B3E44',
                'background': '#fbfbfb',
                'primary': '#326BFF',
                'primary-': {
                    140: '#003EE0',
                    120: '#0A4EFF',
                    80: '#5A89FF',
                    60: '#83A7FF',
                    40: '#AEC4FE',
                    20: '#D6E1FF'
                },
                'input-gray': '#E7ECF2',
                product: {
                    'red': '#FF4332',
                },
                hero: {
                    input: '#F6F7F9'
                }
            },
            boxShadow: {
                'b-header': '0px 2px 5px 1px rgba(0,0,0,0.03)',
                'blue-btn': '0px 4px 20px 0px rgba(50,107,255,0.35)'
            },
            spacing: {
                '112': '28rem',
                '128': '32rem',
            }
        },
    },
    plugins: [],
}
