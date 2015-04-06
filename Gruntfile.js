/*global module:false*/

module.exports = function (grunt) {
    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    var autoprefixer = require('autoprefixer-core');

    // Project configuration.
    grunt.initConfig({
        // Task configuration.
        cssRoot: '.',
        sass: {
            files: {
                expand: true,
                src: ['<%= cssRoot %>/*.scss', '<%= cssRoot %>/!_*.scss'],
                ext: '.css'
            },
            options: {
                //style: 'compact ', // compact, compressed, nested or expanded
                precision: 10,
                compass: ''
            }
        },
        postcss: {
            options: {
                map: true,
                processors: [
                    autoprefixer({browsers: ['last 2 version']}).postcss
                ]
            },
            files: {
                expand: true,
                src: ['<%= cssRoot %>/*.css'],
                ext: '.css'
            }
        },
        watch: {
            sass: {
                files: ['<%= cssRoot %>/*.scss', '<%= cssRoot %>/**/*.scss'],
                tasks: ['sass', 'postcss']
            }
        }
    });

    // Default task.
    grunt.registerTask('default', [
        'sass', 'postcss'
    ]);
};
