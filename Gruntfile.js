module.exports = function(grunt){
	var path = require('path');
	require('jit-grunt')(grunt);
	require('time-grunt')(grunt);
	// SSL CERTIFICATE CONFIGURATION [OPTIONAL]
	// Required, When Using LiveReload in Watch Task on HTTPS websites/urls.
	// You must create your own SSL Certificates.
	// Remember to change rootDomain to your root domain for SSL
	// To use just uncomment below lines :
	// To be configured by user :
	//var sslPrivateKey = "grunt/ssl/livereload.key";
	//var sslCertificateKey = "grunt/ssl/livereload.crt";
	//var rootDomain = "example.com";
	// Don't Change:
	//var sslKEY = grunt.file.read(sslPrivateKey);
	//var sslCERT = grunt.file.read(sslCertificateKey);
	//var appHost = rootDomain;
	require('load-grunt-config')(grunt, {
		jitGrunt: {
			jitGrunt: true,
			staticMappings: {
				'cmq' : 'grunt-combine-media-queries',
				'postcss': '@lodder/grunt-postcss'
			}
		},
		// Path to task.js files, defaults to 'grunt' dir
		configPath: path.join(process.cwd(), 'grunt'),
		// Path to project package.json file
		packageJsonPath: path.join(process.cwd(), 'package.json'),
		// Uncomment to auto grunt.initConfig
		//init: true,

		// Pass Extra Variable to your task files.
		// These variables can be accessed like <%= exampleVariable %>
		// Within your task files
		data: {
			exampleVariable:"Hello Example",
			// Uncomment below lines To enable SSL LiveReload Support.
			//sslKey:sslKEY,
			//sslCert:sslCERT,
			//appHost:appHost
		}
	});
};