module.exports = {
	demo: {
		options: {
			archive: 'temp/build/output.zip',
			level: 1,
			createEmptyArchive: false,
			mode: 'zip'
		},
		files: [
			{
				expand: true,
				flatten: true,
				cwd: 'temp/source',
				src: '**',
				dest: '/'
			}
		]
	}
};