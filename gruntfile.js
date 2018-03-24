module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
        dist: {
            src: 'scss/sb-admin-2.scss',
            dest: 'dist/css/sb-admin-2.css'
        }
    }
  });
  grunt.loadNpmTasks('grunt-node-sass');
  grunt.registerTask('default', ['sass']);
};