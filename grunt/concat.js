var tempDir = 'temp/';
var header_js_file = 'header.js';
var footer_js_file = 'footer.js';
module.exports = {
  demo: {
    options: {
      // separator: ';',
      stripBanners: false,
      sourceMap: false
    },
    src: [tempDir+header_js_file, tempDir+footer_js_file],
    dest: 'temp/assets/bundle.js'
  }
};