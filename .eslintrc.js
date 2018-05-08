module.exports = {
  "parserOptions": {
    "ecmaVersion": 8,
    "sourceType": "module"
  },
  "parser": "babel-eslint",
  "plugins": [
    "babel"
  ],
  "extends": "eslint:recommended",
  "env": {
    "es6": true,
    "browser": true,
    "commonjs": true,
  },
  "globals": {
  },
  "rules": {
    "object-shorthand": "error",
    "generator-star-spacing": ["error", "after"],
    "camelcase": ["error", {"properties": "never"}],
    "eqeqeq": ["error", "smart"],
    "linebreak-style": ["error", "unix"],
    "no-array-constructor": "error",
    "no-lonely-if": "error",
    "no-loop-func": "error",
    "no-param-reassign": "error",
    "no-sequences": "error",
    "no-shadow-restricted-names": "error",
    "no-unneeded-ternary": "error",
    "no-unused-expressions": "error",
    "no-unused-vars": ["error", {"args": "none"}],
    "no-use-before-define": ["error", "nofunc"],
    "no-var": "error",
    "prefer-arrow-callback": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "wrap-iife": ["error", "inside"],
    "yoda": ["error", "never"]
  }
}