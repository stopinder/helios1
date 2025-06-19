const path = require('path');

module.exports = {
    content: [
        path.join(__dirname, 'index.html'),
        path.join(__dirname, 'src/**/*.{vue,js,ts,jsx,tsx,html}'),
        path.join(__dirname, 'Views/**/*.{vue,js,ts,jsx,tsx,html}'),
        path.join(__dirname, '*.html'),
        path.join(__dirname, '*.js')
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
