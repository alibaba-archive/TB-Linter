var fs       = require('fs')
var glob     = require( 'glob' )
var fmt      = require('standard-format')
var standard = require('standard')
var chalk    = require('chalk')
var table    = require('text-table')

function pluralize (word, count) {
  return (count === 1 ? word : word + 's')
}

function processResults (results) {
  var output = '\n'
  var total = 0

  results.forEach(function (result) {
    var messages = result.messages

    if (messages.length === 0) {
      return
    }

    total += messages.length
    output += chalk.underline(result.filePath) + '\n'

    output += table(
      messages.map(function (message) {
        var messageType

        messageType = chalk.red('error')

        return [
          '',
          message.line || 0,
          message.column || 0,
          messageType,
          message.message.replace(/\.$/, ''),
          chalk.gray(message.ruleId || '')
        ]
      }),
      {
        align: ['', 'r', 'l'],
        stringLength: function (str) {
          return chalk.stripColor(str).length
        }
      }
    ).split('\n').map(function (el) {
      return el.replace(/(\d+)\s+(\d+)/, function (m, p1, p2) {
        return chalk.gray(p1 + ':' + p2)
      })
    }).join('\n') + '\n\n'
  })

  if (total > 0) {
    output += chalk.red.bold([
      '\u2716 ', total, pluralize(' problem', total), '\n'
    ].join(''))
  }

  return total > 0 ? output : ''
}

function processFile (transformed, isFix) {
  if (isFix && transformed.name !== 'stdin') {
    fs.writeFileSync(transformed.name, transformed.data)
  }
}

function getFiles (path, done) {
  return glob(path, {}, function(err, files) {
    return done(null, files.map(function (file) {
      return { name: file, data: fs.readFileSync(file).toString() }
    }))
  })
}

function error (err) {
  console.error(err)
  process.exit(1)
}

module.exports = function(dir, isFix) {
  var path = dir + '/**/*.+(js|vue|jsx)'
  if (isFix) {
    getFiles(path, function (err, files) {
      if (err) return error(err)
      files.forEach(function (file) {
        try {
          file.data = fmt.transform(file.data)
          processFile(file, isFix)
        } catch (e) { error(file.name + ': ' + e) }
      })
    })
  }
  standard.lintFiles(path, {}, function(err, results) {
    console.log(processResults(results.results))
  })
}
