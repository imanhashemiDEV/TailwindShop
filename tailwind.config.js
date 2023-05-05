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
            }
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
