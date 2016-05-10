var stylint        = require('stylint')
var stylintConfig  = require('../configures/stylint')

var standardFormat = require('./standard-format')
var tslint         = require('./tslint')

exports.stylint = function (path) {
  return stylint(path, stylintConfig).create()
}

exports.standard = function (path, isFix) {
  return standardFormat(path, isFix)
}

exports.tslint = function (path) {
  return tslint(path)
}
