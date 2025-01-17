module.exports = {
  extends: ["eslint:recommended", "plugin:vue/recommended", "plugin:jest/recommended", "prettier", "prettier/vue"],
  plugins: ["jest"],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 8,
    sourceType: "module"
  },
  env: {
    "jest/globals": false,
    jest: false
  },
  overrides: [
    {
      files: ["**/*.test.js"],
      env: {
        "jest/globals": true,
        jest: true
      }
    },
    {
      files: ["src/.vuepress/plugins/**/*.js"],
      env: {
        node: true
      }
    }
  ]
};
