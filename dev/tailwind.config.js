/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'selector',
    content: [
        './src/**/*.{html,vue,js,ts}'
    ],
    theme: {
        fontFamily: {
            'mono': ['Source Code Pro', 'ui-monospace']
        }
    }
}