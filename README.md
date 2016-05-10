## TB-Linter: listen to me, or persuade me now

### Installation
```
$ npm i tb-linter -g
```

### CLI Usage
```
$ tb-linter <source> [options]

Options:

  -h, --help        output usage information
  -V, --version     output the version number

  -l, --lang [l-l]  filter the linters by languages
  -f, --fix         automatically fix warnings and errors

Example:

 $ tb-linter src/styles -l stylus-less
 $ tb-linter src/scripts -l javascript -f
```

### Supported Languages
- JavaScript, ES6
- Stylus

### Including Linters
- [stylint](https://github.com/rossPatton/stylint) - Improve your Stylus code with Stylint.
- [standard](https://github.com/feross/standard) - JavaScript Standard Style.

### License
This work is licensed under the MIT license.
