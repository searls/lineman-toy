/* Exports a function which returns an object that overrides the default &
 *   plugin file patterns (used widely through the app configuration)
 *
 * To see the default definitions for Lineman's file paths and globs, see:
 *
 *   - https://github.com/linemanjs/lineman/blob/master/config/files.coffee
 */
module.exports = require(process.env['LINEMAN_MAIN']).config.extend('files', {
  js: {
    vendor: [
      "vendor/js/angular.js",
      "vendor/js/angular-routes.js",
      "vendor/js/**/*.js"
    ]
    // app: [
    //   "app/js/application.coffee",
    //   "app/js/**/*.coffee"
    // ]
  },
  coffee: {
    app: [
      "app/js/application.coffee",
      "app/js/**/*.coffee"
    ]
  },
  // sass: {
  //   app: ["app/css/**/*.scss"]
  // }
  // sass: {
  //   compile: {
  //     options: {
  //       paths: ["app/css/**/*.scss"]
  //       // paths: ["vendor/css/normalize.css", "vendor/css/**/*.css", "app/css/**/*.less"]
  //     }
  //   }
  // }
});
