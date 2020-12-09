module.exports = {
    options: {
        banner: '',
        debugProtection: true,
        debugProtectionInterval: true,
    },
    demo: {
        options: {},
        files: {
            'temp/offo/': ['**/*.js', '!**/*.min.js'],
            'temp/temp-secure.js' : ['temp/temp-secure.js']
        }
    }
};