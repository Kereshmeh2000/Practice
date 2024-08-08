/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.{jsx,js,ts,tsx}",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            screens: {
                xs: "480px",
            },
            boxShadow: {
                t: "0 -2px 4px rgba(110, 110, 110, 0.1)",
            },
            keyframes: {
                slideIn: {
                  '0%': { transform: 'translateX(-100%)' },
                  '100%': { transform: 'translateX(0)' },
                },
                slideOut: {
                  '0%': { transform: 'translateX(0)' },
                  '100%': { transform: 'translateX(-100%)' },
                },
              },
              animation: {
                'slide-in-left': 'slideIn 0.3s ease-out',
                'slide-out-left': 'slideOut 0.3s ease-in',
              },
        },
    },
    plugins: [],
};
