module.exports = function(grunt) {

	grunt.initConfig({
		// Compiling Less
		less: {
			options: {
				paths: ["css"],
				ieCompat: false
			},
			dev: {
				dest: "css/styles.css",
				src: "css/less/styles.less"
			}
		},
		// Minifying JavaScript
		uglify: {
			options: {
				preserveComments: false,
				mangle: false
			},
			js: {
				dest: "js/app.min.js",
				src: "controllers/app.js"
			}
		},
		// Combining all JavaScript
		concat: {
			options: {
				separator: "\n"
			},
			js: {
				dest: "js/app.min.js",
				src: [
					"js/libs/ui-bootstrap-tpls-0.10.0.min.js",
					"js/libs/angular-ui-router.min.js",
					"js/libs/xeditable.min.js",
					"js/app.min.js"
				]
			},
			css: {
				dest: "css/styles.css",
				src: [
					"css/xeditable.css",
					"css/styles.css"
				]
			}
		},
		// Watching files and folders for changes
		watch: {
			app: {
				files: ['css/less/*.less', 'controllers/*.js', 'js/*.js'],
				tasks: ['less', 'uglify', 'concat'],
				options: {
					spawn: false
			   }
			}
		}
	});

	// Loading plugins
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Registering plugins
	grunt.registerTask('default', ['less', 'uglify', 'concat', 'watch']);

};