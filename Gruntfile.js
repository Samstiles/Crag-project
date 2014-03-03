module.exports = function(grunt) {
  var pushState = require('grunt-connect-pushstate/lib/utils').pushState;

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      js: {
        src: [
          'assets/lib/angular/angular.js',
          'assets/lib/angular-route/angular-route.js',
          'assets/lib/angular-sanitize/angular-sanitize.js',
          'assets/lib/angular-bootstrap/ui-bootstrap-tpls.js',
          'app/**/*.js'
        ],
        dest: 'prod/js/production.min.js'
      },
      css_libs: {
        src: [
          'assets/lib/bootstrap/dist/css/bootstrap.min.css'
        ],
        dest: 'prod/css/libs.min.css'
      },
      css: {
        src: [
          'assets/css/**/*.less',
          'assets/css/**/*.css'
        ],
        dest: 'prod/css/production.less'
      }
    },

    watch: {
      prod: {
        files: ['app/**/*', 'assets/img/**/*', 'assets/css/**/*', 'index.html'],
        tasks: ['default'],
        options: {
          livereload: true,
          spawn: false
        }
      }
    },

    copy: {
      templates: {
        expand: true,
        flatten: true,
        src: ['app/templates/**'],
        dest: 'prod/templates/',
        filter: 'isFile'
      },
      images: {
        expand: true,
        flatten: true,
        src: ['assets/img/**'],
        dest: 'prod/img/',
        filter: 'isFile'
      },
      favicon: {
        expand: true,
        flatten: true,
        src: ['favicon.ico'],
        dest: 'prod/',
        filter: 'isFile'
      }
    },

    htmlmin: {
      index: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'prod/index.html': 'index.html'
        }
      }
    },

    connect: {
      server: {
        options: {
          port: 9001,
          base: 'prod',
          keepalive: true,
          open: true,
          middleware: function (connect, options) {
            return [
              // Rewrite requests to root so they may be handled by router
              pushState(),
              // Serve static files
              connect.static(options.base)
            ];
          }
        }
      }
    },

    less: {
      prod: {
        options: {
          cleancss: true,
          compress: true,
          strictImports: true,
          strictMath: true,
          strictUnits: true,
          dumpLineNumbers: true,
          report: 'min'
        },
        src: 'prod/css/production.less',
        dest: 'prod/css/production.min.css'
      }
    },

    clean: {
      prod: {
        src: ['prod/']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-newer');

  grunt.registerTask('go', ['default', 'connect']);
  grunt.registerTask('default', ['clean', 'concat', 'htmlmin', 'less', 'copy']);

};
