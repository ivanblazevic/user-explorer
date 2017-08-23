module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                files: {
                    'main.css': 'scss/main.scss'
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-sass');

    // Default task(s)
    grunt.registerTask('default', ['sass']);

};
