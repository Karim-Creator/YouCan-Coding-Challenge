module.exports = {
    content: ['./dist/**/*.html', "./src/**/*.{js, jsx, ts, tsx}"],
    theme: {
        extend: {
            colors: {
                primary: '#8463EE',
                dark: '#101727',
                light: '#F9FAFC',
                grey: '#9FA3AF',
                'light-green': '#6ACE9E'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}