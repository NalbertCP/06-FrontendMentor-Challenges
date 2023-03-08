/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
    theme: {
        extend: {
            keyframes: {
                "gradient-transition": {
                    "100%": { "background-position": "230%" }
                },
                "fade-menu": {
                    "100%": { opacity: "0" }
                },
                "show-menu": {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" }
                },
                "slide-up": {
                    "100%": { transform: "translateY(-2.5rem)" }
                },
                "slide-down": {
                    "0%": { transform: "translateY(-2.5rem)" },
                    "100%": { transform: "translateY(0)" }
                }
            },
            screens: {
                mdd: "900px"
            }
        }
    },
    plugins: []
}
