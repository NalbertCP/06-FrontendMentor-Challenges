/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
    theme: {
        extend: {
            keyframes: {
                "gradient-transition": {
                    "100%": { "background-position": "230%" }
                }
            },
            screens: {
                mdd: "900px"
            }
        }
    },
    plugins: []
}
