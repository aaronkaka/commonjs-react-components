module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            options: { livereload: true },
            all: {
                files: ['react_components/*.jsx', 'index.html', 'scripts/*.js'],
                tasks: ['browserify']
            }
        },

        browserify: {
            options: {
                transform: [ require('grunt-react').browserify ]
            },
            client: {
                src: ['react_components/**/*.jsx'],
                dest: 'dist/card-component.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', [
        'browserify'
    ]);
};
