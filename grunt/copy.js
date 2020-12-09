module.exports = {
  options: {
    // timestamp: true
  },
  demo: {
    files: [
      {
        expand: true,
        cwd: 'temp/src/assets',
        src: ['**'],
        dest: 'assets/files'
      }
    ]
  }
};