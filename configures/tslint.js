module.exports = {
  "rules": {
    "ban": [true,
      ["_", "extend"],
      ["_", "isNull"],
      ["_", "isDefined"]
    ],
    "class-name": true,
    "comment-format": [true,
      "check-space"
    ],
    "curly": false,
    "eofline": true,
    "forin": true,
    "indent": [true, 2],
    "interface-name": false,
    "jsdoc-format": true,
    "label-position": true,
    "label-undefined": true,
    "max-line-length": [true, 140],
    "member-ordering": [true,
      "public-before-private",
      "static-before-instance",
      "variables-before-functions"
    ],
    "no-arg": true,
    "no-bitwise": true,
    "no-console": [true,
      "debug",
      "info",
      "time",
      "timeEnd",
      "trace"
    ],
    "no-construct": true,
    "no-constructor-vars": false,
    "no-debugger": true,
    "no-duplicate-key": true,
    "no-duplicate-variable": true,
    "no-empty": true,
    "no-eval": true,
    "no-switch-case-fall-through": true,
    "no-trailing-whitespace": true,
    "no-unused-expression": true,
    "no-unused-variable": true,
    "no-unreachable": true,
    "no-use-before-declare": true,
    "no-var-requires": false,
    "one-line": [true,
      "check-open-brace",
      "check-catch",
      "check-else",
      "check-whitespace"
    ],
    "quotemark": [true, "single"],
    "radix": true,
    "semicolon": [true, "never"],
    "triple-equals": [true, "allow-null-check"],
    "typedef": [true,
      "callSignature",
      "indexSignature",
      "propertySignature",
      "variableDeclarator"
    ],
    "typedef-whitespace": [true,
      ["callSignature", "noSpace"],
      ["catchClause", "noSpace"],
      ["indexSignature", "space"]
    ],
    "use-strict": [true,
      "check-module"
    ],
    "variable-name": false,
    "whitespace": [true,
      "check-branch",
      "check-decl",
      "check-operator",
      "check-separator",
      "check-type"
    ]
  }
}
