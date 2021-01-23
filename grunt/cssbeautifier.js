module.exports = {
    demo: {
        options: {
            sourceMap: false,
            indent: "    ",
            openbrace: 'end-of-line',
            autosemicolon: true
        },
        files: [{
            expand: true,
            cwd: 'assets/css',
            src: ['**/*.css', '!*.min.css'],
            dest: 'assets/css'
        }]
    }
};