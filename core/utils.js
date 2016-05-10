var fs   = require('fs')
var glob = require('glob')

module.exports = {
  getFiles: function (path, done) {
    return glob(path, {}, function(err, files) {
      return done(null, files.map(function (file) {
        return { name: file, data: fs.readFileSync(file).toString() }
      }))
    })
  },

  error: function (err) {
    console.error(err)
    process.exit(1)
  }
}
