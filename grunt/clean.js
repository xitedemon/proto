module.exports = {
	demo: {
		src: [
			'temp/test-folder', // Delete Folder with its contents.
			'temp/test-folder-2/*', // Delete Contents of Folder Only.
			'!temp/test-folder-2/one', // Preserve a Folder(with its contents).
			'temp/test-folder-3/*.js', // Delete Files With Given Extention (Current Directory).
			'temp/test-folder-3/**/*.js', // Delete Files With Given Extention (Current/Sub Directory).
			'temp/test-folder-3/index.html' // Delete Specific File.
		]
	}
};