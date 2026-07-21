/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#8B4513',
                secondary: '#D2691E',
                accent: '#F4A460',
                cream: '#FFF8F0',
                warm: {
                    100: '#FFECD1',
                    200: '#FFD6A3',
                },
                dark: '#2D1810',
                medium: '#5C3305',
            },
        },
    },
    plugins: [],
}
