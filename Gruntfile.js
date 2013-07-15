/*global module:false*/
module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        // Task configuration.
        cssRoot: '.',
        sass: {
            dev: {
                files: {
                    '<%= cssRoot %>/Site.css': '<%= cssRoot %>/Site.scss'
                },
                options: {
                    style: 'expanded ', // compact, compressed, nested or expanded
                    compass: ''
                }
            }
        },
        recess: {
            dev: {
                options: {
                    compile: true
                },
                files: {
                    '<%= cssRoot %>/Site.css': '<%= cssRoot %>/Site.css'
                }
            },
            dist: {
                options: {
                    compile: true,
                    compress: true
                },
                files: {
                    '<%= cssRoot %>/Site.min.css': '<%= cssRoot %>/Site.css'
                }
            }
        },
        watch: {
            sass: {
                files: ['<%= cssRoot %>/*.scss', '<%= cssRoot %>/**/*.scss'],
                tasks: ['resass:dev']
            }
        }
    });

    grunt.registerTask('resass', ['sass:dev', 'recess:dev']);

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-recess');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    // Dist
    grunt.registerTask('dist', ['resass', 'recess:dist']);

    // Default task.
    grunt.registerTask('default', ['resass', 'watch']);
};
