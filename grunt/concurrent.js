module.exports = {
	options: {
		limit: 8,
		logConcurrentOutput:true,
		indent: true
	},
	// Here, two tasks performed concurrently
	// copy/htmlmin and jshint runs concurrently
	// In copy/html, first copy finishes than htmlmin starts
	demo: [['newer:copy:demo', 'htmlmin:demo'], 'jshint:demo']
};