module.exports = {
    demo: {
        options: {
            sourceMap: false,
            level: {
                1: {
                    roundingPrecision: false
                },
                2: {
                    mergeIntoShorthands: true
                }
            },
            compatibility: '*'
        },
        files: [{
            expand: true,
            cwd: 'temp/assets/css',
            src: ['**/*.css', '!*.min.css'],
            dest: 'temp/assets/css',
            ext: '.min.css'
        }]
    }
};