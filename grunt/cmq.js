module.exports = {
  demo: {
    options: {
      log: true
    },
    files: [{
      expand: true,
      cwd: 'temp/assets',
      src: ['**/*.css', '!**/*.min.css'],
      dest: 'temp/assets'
    }]
  }
};