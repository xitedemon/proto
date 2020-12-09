module.exports = {
    options: {
        jshintrc: true,
        reporter: require('jshint-stylish'),
    },
    demo: {
        files: {
            src: [
                'temp/**/*.js',
                '!temp/**/*.min.js',
                '!temp/vendors/**'
            ]
        }
    }
};