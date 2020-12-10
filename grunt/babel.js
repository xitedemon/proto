module.exports = {
    options: {
        sourceMap: false,
        babelrc: true,
        minified: false,
        comments: false,
        presets: [
            [
                "@babel/preset-env",
                {
                    "modules": false,
                    "loose": true,
                    "debug":false
                }
            ]
        ],
        plugins: ["@babel/plugin-proposal-class-properties"]
    },
    demo: {
        files: [
            {
                expand: true,
                src: ['babel.js', '!babel-source.js'],
                dest: 'temp/babel',
                cwd: 'temp/babel'
            }
        ]
    }
};