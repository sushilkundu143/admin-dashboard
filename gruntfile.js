module.exports = function (grunt) {

  grunt.initConfig({
    sass: {
      dist: {
        src: 'scss/sb-admin-2.scss',
        dest: 'dist/css/sb-admin-2.css'
      }
    },
    watch: {
      scripts: {
        files: ['scss/**.scss'],
        tasks: ['sass'],
        options: {
          spawn: false,
        },
      },
    },
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-node-sass');
  grunt.registerTask('default', ['sass', 'watch']);

};