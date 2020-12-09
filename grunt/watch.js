module.exports = {
    options: {
        /*
        // Uncomment to enable livereload with/ssl
        livereload: {
            hostname: '<%= appHost %>',
            port: 9090,
            key: '<%= sslKey %>',
            cert: '<%= sslCert %>'
        },
        */
        keepalive: true,
        interrupt: true,
        debounceDelay: 0,
        reload: false,
        open: false,
        spawn: false
    },
    demo: {
        files: ['**/*.php', 'src/main/assets/js/**/*.js', '!node_modules/**'],
        tasks: ['shell:demo']
    }
};