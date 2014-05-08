module.exports = function(grunt) {

	grunt.initConfig({

		// Compiling Less
		less: {
			options: {
				paths: ["css"],
				ieCompat: false
			},
			dev: {
				dest: "css/styles.min.css",
				src: "css/less/main.less"
			}
		},

		// Combining all JavaScript & CSS
		concat: {
			options: {
				separator: "\n"
			},
			js: {
				dest: "js/app.min.js",
				src: [
					"js/libs/ui-bootstrap-tpls-0.10.0.min.js",
					"js/libs/angular-ui-router.min.js",
					"js/app.min.js"
				]
			},
			css: {
				dest: "css/styles.min.css",
				src: [
					"css/styles.min.css"
				]
			}
		},

		// Minifying CSS
		cssmin: {
			add_banner: {
				options: {
					banner: '/* My minified css file */'
				},
				files: {
					'css/styles.min.css': 'css/styles.min.css'
				}
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
				src: [
					"js/app.js",
					"js/services/marquees-data.js",
					"js/controllers/marquees-controller.js",
					"js/directives/active-release.js",
					"js/directives/marquees.js",
					"js/directives/editor.js",
					"js/directives/timeline.js",
					"js/directives/likecontrol.js"
				]
			}
		},

		// Watching files and folders for changes
		watch: {
			app: {
				files: ['css/less/*.less', 'js/**/*.js'],
				tasks: ['less', 'cssmin', 'uglify', 'concat'],
				options: {
					spawn: false
			   }
			}
		}
	});

	// Loading plugins
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Registering plugins
	grunt.registerTask('default', ['less', 'cssmin', 'uglify', 'concat', 'watch']);

};