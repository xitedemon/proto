module.exports = {
    demo: {
        options: {
            sourceMap: false,
            restructure: true,
        },
        files: [{
            expand: true,
            cwd: 'assets/css',
            src: ['**/*.css', '!*.min.css'],
            dest: 'assets/css',
        }]
    }
};