/*global module:false*/
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        // Task configuration.
        sass: {
            dist: {
                files: {
                    'Site.css': 'Site.scss'
                },
                options: {
                    style: 'expanded ', // compact, compressed, nested or expanded
                    compass: ''
                }
            }
        },
        recess: {
            dist: {
                options: {
                    compile: true
                },
                files: {
                    'Site.css': 'Site.css'
                }
            }
        },
        watch: {
            sass: {
                files: ['./*.scss', './**/*.scss'],
                tasks: ['sass', 'recess']
            }
        }
    });

    grunt.registerTask('none', '', function () {
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-recess');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    // Default task.
    grunt.registerTask('default', ['sass', 'recess', 'watch']);
};
