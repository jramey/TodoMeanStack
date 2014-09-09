module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    nodemon: {
  		dev: {
    		script: 'server.js'
  		}
	 }, 
	 protractor: {
  	 	options: {
    	keepAlive: true,
    	configFile: "e2e.config.js"
  	},
  		run: {}
	}, 
    karma: {
      unit: {
        configFile: 'karma.config.js',
        singleRun: true
      }        
    }
});

  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-protractor-runner');
  grunt.loadNpmTasks('grunt-karma');
  grunt.registerTask('default', ['nodemon']);
  grunt.registerTask('e2e', ['protractor:run']);
  grunt.registerTask('unit', ['karma']);
};