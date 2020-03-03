// This file adds some React specific settings
module.exports = {
  settings: {
    // Append 'ts' and 'tsx' extensions to Airbnb 'import/resolver' setting
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
      },
    },
    // Append 'ts' and 'tsx' extensions to Airbnb 'import/extensions' setting
    'import/extensions': ['.js', '.ts', '.mjs', '.jsx', '.tsx'],
  },
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "all",
        "printWidth": 120,
        "tabWidth": 2
      }
    ],
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/adjacent-overload-signatures": "warn",
    "@typescript-eslint/array-type": "warn",
    "arrow-parens": ["error", "always"],
    "arrow-body-style": "off",
    "@typescript-eslint/ban-types": [
      "error",
      {
        "types": {
          "Object": "Avoid using the `Object` type. Did you mean `object`?",
          "Boolean": "Avoid using the `Boolean` type. Did you mean `boolean`?",
          "Number": "Avoid using the `Number` type. Did you mean `number`?",
          "String": "Avoid using the `String` type. Did you mean `string`?",
          "Symbol": "Avoid using the `Symbol` type. Did you mean `symbol`?"
        }
      }
    ],
    "@typescript-eslint/prefer-function-type": "warn",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/class-name-casing": "warn",
    "spaced-comment": [
      "warn",
      "always",
      {
        "line": {
          "markers": ["/"],
          "exceptions": ["-", "+"]
        },
        "block": {
          "markers": ["!"],
          "exceptions": ["*"],
          "balanced": true
        }
      }
    ],
    "curly": "warn",
    "complexity": ["error", 8],
    "eol-last": "error",
    "guard-for-in": "error",
    "@typescript-eslint/interface-name-prefix": [
      "error",
      {
        "prefixWithI": "always",
        "allowUnderscorePrefix": true
      }
    ],
    "@typescript-eslint/consistent-type-definitions": ["warn", "type"],
    "valid-jsdoc": "warn",
    "no-unused-labels": "error",
    "max-classes-per-file": ["error", 1],
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/member-ordering": [
      "warn",
      {
        "default": ["signature", "method", "constructor", "field"]
      }
    ],
    "new-parens": "warn",
    "@typescript-eslint/consistent-type-assertions": "error",
    "@typescript-eslint/no-explicit-any": "off",
    "no-caller": "error",
    "no-bitwise": "warn",
    "no-cond-assign": "error",
    "no-multiple-empty-lines": "error",
    "no-console": "error",
    "no-new-wrappers": "error",
    "no-debugger": "error",
    "constructor-super": "error",
    "no-empty": "warn",
    "@typescript-eslint/no-empty-interface": "warn",
    "no-eval": "warn",
    "@typescript-eslint/prefer-namespace-keyword": "warn",
    "no-invalid-this": "warn",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-parameter-properties": "error",
    "@typescript-eslint/triple-slash-reference": "warn",
    "no-shadow": "error",
    "dot-notation": "warn",
    "no-throw-literal": "error",
    "no-fallthrough": "warn",
    "no-trailing-spaces": ["error", { "skipBlankLines": true, "ignoreComments": true }],
    "no-undef-init": "error",
    "no-unsafe-finally": "error",
    "no-unused-expressions": "error",
    "@typescript-eslint/no-use-before-define": "off",
    "no-var": "error",
    "@typescript-eslint/no-var-requires": "error",
    "quote-props": ["error", "consistent-as-needed"],
    "object-shorthand": "error",
    "sort-keys": "off",
    "brace-style": ["warn", "1tbs"],
    "one-var": ["error", "never"],
    "ordered-imports": "off",
    "prefer-const": "error",
    "@typescript-eslint/prefer-for-of": "warn",
    "quotes": ["warn", "single", { "avoidEscape": true, "allowTemplateLiterals": true }],
    "radix": "warn",
    "no-extra-semi": "warn",
    "comma-dangle": ["warn", "always-multiline"],
    "eqeqeq": ["error", "always", { "null": "ignore" }],
    "typedef": "off",
    "@typescript-eslint/type-annotation-spacing": [
      "warn",
      {
        "before": false,
        "after": true,
        "overrides": {
          "arrow": {
            "before": true,
            "after": true
          }
        }
      }
    ],
    "typeof-compare": "off",
    "@typescript-eslint/unified-signatures": "error",
    "use-isnan": "warn",
    "react/jsx-no-bind": ["error", {
      "ignoreDOMComponents": false,
      "ignoreRefs": false,
      "allowArrowFunctions": false,
      "allowFunctions":  false,
      "allowBind": false
    }]
  }
};
