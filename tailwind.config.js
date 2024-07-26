/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'dark-blue': '#212732',
                'light-blue': '#3898ec' // Define the custom color
            },
        },
    },
    plugins: [],
}