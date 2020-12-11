const pngquant = require('imagemin-pngquant');
const mozjpeg = require('imagemin-mozjpeg');
const gifsicle = require('imagemin-gifsicle');
const svgo = require('imagemin-svgo');
module.exports = {
	demo: {
		options: {
			// PNG ONLY [0-7]
			optimizationLevel: 7,
			// JPG-JPEG ONLY
			progressive: true,
			// GIF ONLY
			interlaced: true,
			// SVG ONLY
			svgoPlugins: [
				// Don't remove the viewbox attribute from the SVG
				{removeViewBox: false},
				// Don't remove Useless Strokes and Fills [false is preffered]
				{removeUselessStrokeAndFill: true},
				// Don't remove Empty Attributes from the SVG
				{removeEmptyAttrs: true}
			],
			// Define Plugins
			use: [pngquant(), mozjpeg(), gifsicle(), svgo()],
			// Number of CPU Cores
			concurrency: 2
		},
		files: [
			{
				expand: true,
				cwd: 'temp/images',
				src: ['**/*.{png,svg,ico,jpg,jpeg,gif}'],
				dest: 'temp/output'
			}
		]
	}
};