module.exports = {
    demo: {
        options: {
            mangle: {
                reserved: ['jQuery'],
                keep_fnames: true
            },
            compress: {
                global_defs: {
                    DEBUG: false
                },
                dead_code: true,
                keep_fnames: true,
                typeofs: false
            },
            beautify: false,
            report: 'min',
            output: {
                comments: false
            }
        },
        files: [{
            expand: true,
            src: ['**/*.js', '!**/*.min.js','!sw.js'],
            dest: 'temp/assets/js',
            cwd: 'temp',
            rename: function(dest, src) { return dest + '/' + src.replace('.js', '.min.js'); }
        }]
    }
};