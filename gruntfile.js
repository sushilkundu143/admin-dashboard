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
        files: 'scss/sb-admin-2.scss',
        tasks: ['sass'],
        options: {
          livereload: true,
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-node-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['sass']);
  

};