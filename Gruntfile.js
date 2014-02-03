/* jshint node:true, camelcase:false */

module.exports = function(grunt) {

  // config
  grunt.initConfig({
    jekyll: {
      options: {
        src: 'content',
        plugins: '_plugins',
        config: '_config.yml',
        dest: '_site'
      },
      dist: {
        options: {

        }
      },
      serve: {
        options: {
          watch: true,
          serve: true
        }
      }
    }
  });

  // plugins
  grunt.loadNpmTasks('grunt-jekyll');

  // tasks
  grunt.registerTask('default', ['jekyll:dist']);
  grunt.registerTask('serve', ['jekyll:serve']);

};
