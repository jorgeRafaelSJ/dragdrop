module.exports = function(grunt) {
	grunt.initConfig({
		watch: {
			build: {
				tasks: ["babel"],
				files: [
					'dev.js',
				]
			}
		},
		babel: {
	    options: {
	        sourceMap: true,
	        presets: ['babel-preset-es2015'],
	    },
	    dist: {
	        files: {
	            './js/main.js': './js/dev.js'
	        }
	    }
	  }
	});

	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-contrib-watch');
};
