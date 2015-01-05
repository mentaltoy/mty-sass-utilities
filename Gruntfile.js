'use strict';

module.exports = function(grunt) {

grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-contrib-sass');

grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	meta: {
		banner:
		'/* \n'+
		' * <%= pkg.name %> v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> \n'+
		' * \n'+
		' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %> \n'+
		' * Licensed under the <%= pkg.license %> license. \n'+
		' * \n'+
		' * Demo: <%= pkg.homepage %> \n'+
		' * Source: <%= pkg.repository.url %> \n'+
		' */\n'
	},
	clean: {
		dist: {
			src: ['mty-utils.css']
		}
	},	
	sass: {
		dist: {
			options: {
				style: 'expanded'
			},
			files: {
				'mty-utils.css': 'mty-utils.scss',
			}
		}
	}
});

grunt.registerTask('default', [
	'clean',
	'sass'
]);

};