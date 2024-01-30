/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
    theme: {
        extend: {
          fontFamily: {
            NovoMono: ['Novo Mono', "monospace"],
            RedHat: ["Red Hat Mono", "monospace"],
          },
        },
    },
    plugins: [],
};

