module.exports = {
    options: {
        banner: '',
        debugProtection: true,
        debugProtectionInterval: true,
    },
    demo: {
        options: {},
        files: {
            './': [
                        'temp/offo/**/*.js', 
                        '!temp/offo/**/*.min.js', 
                        'temp/temp-secure.js'
                      ]
        }
    }
};