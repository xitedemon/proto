module.exports = {
    demo: {
        options: {
            style: 'expanded',
            // auto to generate sourcemap
            sourcemap: 'none',
            // remove for production
            cacheLocation: '.sass-cache',
            // true for production
            noCache: false
        },
        files: [{
            expand: true,
            cwd: 'temp/sass',
            src: ['**/*.scss', '!configs/**'],
            dest: 'assets/css',
            ext: '.css'
        }]
    }
};