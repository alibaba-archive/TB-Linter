## TB-Linter: listen to me, or persuade me now

### Installation
```
$ npm i tb-linter -g
```

### CLI Usage
``` bash
$ tb-linter <source> [options]

Options:

  -h, --help        output usage information
  -V, --version     output the version number

  -l, --lang [l-l]  filter the linters by languages
  -f, --fix         automatically fix warnings and errors

Example:

 $ tb-linter src # Minimalist
 $ tb-linter src/styles -l stylus-less
 $ tb-linter src/scripts -l javascript -f # Re-write
```

### Supported Languages
- JavaScript (ES6)
- TypeScript
- Stylus

### Including Linters
- [standard](https://github.com/feross/standard) - JavaScript Standard Style.
- [tslint](https://github.com/palantir/tslint) - An extensible linter for the TypeScript language.
- [stylint](https://github.com/rossPatton/stylint) - Improve your Stylus code with Stylint.

### License
This work is licensed under the MIT license.
