module.exports = function (grunt) {

  grunt.initConfig({
    sass: {
      dist: {
        src: 'scss/sb-admin-2.scss',
        dest: 'dist/css/sb-admin-2.css'
      }
    },
    watch: {
      css: {
        files: ['scss/**.scss'],
        tasks: ['sass'],
        options: {
          livereload: true,
        },
      },
    },
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-node-sass');
  grunt.registerTask('default', ['sass', 'watch']);
};