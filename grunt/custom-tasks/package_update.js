// place or include in Gruntfile.js
// usage grunt package_update:key:value
	grunt.registerTask('package_update', function (key, value) {
		'use strict';
		const fs = require('fs');
		const packageconfigs = require('./project-configurations/package/package-config').configs;


		
		let rawdata = fs.readFileSync('package.json');
		let student = JSON.parse(rawdata);

		student.name = packageconfigs.name;
		console.log(student);

let data = JSON.stringify(student, null, "\t");
fs.writeFileSync('package.json', data);

/*
		var package_source_file = "package.json";
        if (!grunt.file.exists(package_source_file)) {
            grunt.log.error("file " + package_source_file + " not found");
            return true;//return false to abort the execution
        }

        var packagejson = grunt.file.readJSON(package_source_file);
        console.log(packagejson);
        */
        /*

        project[key]= value;//edit the value of json object, you can also use projec.key if you know what you are updating

        grunt.file.write(projectFile, JSON.stringify(project, null, 2));//serialize it back to file
        */
    });