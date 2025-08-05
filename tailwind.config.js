/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{astro,html,js,jsx,ts,tsx}", // adjust paths as needed
    ],
    theme: {
        extend: {
            keyframes: {
                'spin-card': {
                    '0%, 100%': {
                        transform: 'rotateX(180deg)',
                        opacity: '0',
                    },
                },
            },
            animation: {
                'spin-card': 'spin-card 2s ease-in-out',
            },
        },
    },
    plugins: [],
};