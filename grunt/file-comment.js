module.exports = {
	demo: {
		options: {
			comments: ['First comment', 'Second Comment'],
			carriageReturn: "\n",
			prepend: true,
			syntaxes: {
				'.js': '//',
				'.json': '--',
				'.css': ['/*', '*/']
			}
		},
		files: [
			{
				expand: true,
				src: ['mini.js', '!test.json'],
				cwd: 'temp/data',
				dest: 'temp/data'
			}
		]
	}
};