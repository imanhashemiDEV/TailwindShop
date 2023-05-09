const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
    ],
    darkMode: "class",
    theme: {
        container: {
            center: true,
            padding: '0.1rem',
        },
        extend: {
            colors: {},
            fontFamily: {
                "Dana": "Dana",
            },
            boxShadow:{
                "normal ":"0px 1px 10px rgba(0,0,0,0.05)"
            },
            borderRadius:{
                "4xl":"2rem"
            },
            letterSpacing:{
                "tightest":"-0.065em"
            }
        },
    },

    plugins: [
        require('@tailwindcss/forms'),
        function ({ addVariant }) {
            addVariant('child', '& > *');
            addVariant('child-hover', '& > *:hover');
        }
    ],
};
