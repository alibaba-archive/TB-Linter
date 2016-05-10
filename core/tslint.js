var TSLint       = require('tslint')
var stylish      = require('tslint-stylish')

var tslintConfig = require('../configures/tslint')
var utils        = require('./utils')

module.exports = function(dir) {
  var path = dir + '/**/*.ts'
  utils.getFiles(path, function (err, files) {
    if (err) return utils.error(err)
    files.forEach(function (file) {
      try {
        file.path = file.name
        var tslint = new TSLint(file.name, file.data, {
          configuration: tslintConfig,
          formatter: "json",
          // not used, use reporters instead
          formattersDirectory: null,
          rulesDirectory: null
        })
        var lint = tslint.lint()
        var failures = JSON.parse(lint.output)
        if (failures.length > 0) {
          stylish(failures, file, {
            sort: true,
            bell: true,
            fullPath: true
          })
        }
      } catch (e) { utils.error(file.name + ': ' + e) }
    })
  })
}
