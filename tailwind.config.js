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
                'background': '#fbfbfb',
                'primary': '#326BFF',
                'primary-': {
                    80: '#5A89FF',
                    60: '#83A7FF',
                    40: '#AEC4FE',
                    20: '#D6E1FF'
                }
            },
            boxShadow: {
                'b-header': '0px 2px 5px 1px rgba(0,0,0,0.03)'
            },
            spacing: {
                '112': '28rem',
                '128': '32rem',
            }
        },
    },
    plugins: [],
}
