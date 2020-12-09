module.exports = {
    demo: {
        options: {
            caseSensitive: false,                                 
            removeComments: true,
            collapseInlineTagWhitespace:true,
            collapseWhitespace: true,
            html5: true,
            minifyCSS: true,
            minifyJS: true,
            removeComments: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            sortAttributes: true,
            sortClassName: false,
            trimCustomFragments: true,
            useShortDoctype: true
        },
        files: [{
            expand: true,
            cwd: '.',
            src: ['temp/**/*.php', 'temp/**/*.html', '!temp/none/**'],
            dest: '.'
        }]
    }
};