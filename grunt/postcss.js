module.exports = {
    options: {
        map: false,
        processors: [
            require('autoprefixer')({
                cascade: true,
                add: true,
                grid: "autoplace"
            })
        ]
    },
    demo: {
        src: ['temp/css/**/*.css', '!temp/css/**/*.min.css', '!temp/css/theme-raw.css']
    }
};