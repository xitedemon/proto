module.exports = {
    options: {
        jshintrc: true,
        reporter: require('jshint-stylish'),
    },
    all: {
        files: {
            src: [
                'test/**/*.js',
                '!test/**/*.min.js',
                '!test/vendor/'
            ]
        }
    }
};