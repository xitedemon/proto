module.exports = {
    // to : Use Single Quote, to replace variable value with no quotes.
    // to : Use Double Quote, to replace variable value with quotes.
    demo: {
        options: {
            variables: [
                {
                    name: 'font',
                    to: 100
                }
            ]
        },
        files: {
            'temp/sass-rep/output-num.scss':'temp/sass-rep/input-num.scss',
        }
    },
    dev: {
        options: {
            variables: [
                {
                    name: 'website',
                    to: "https://example.com"
                },
                {
                    name: 'color',
                    to: '#000000'
                }
            ]
        },
        files: {
            'temp/sass-rep/output.scss':'temp/sass-rep/input.scss',
            'temp/sass-rep/output-2.scss':'temp/sass-rep/input-2.scss'
        }
    }
};