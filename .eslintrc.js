module.exports = {
  // Specifies the ESLint parser
  parser: "@typescript-eslint/parser",
  plugins: ["react", "@typescript-eslint", "jest"],
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports,
    project: "./tsconfig.json",
  },
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  extends: [
    "airbnb-typescript", // Uses the recommended rules from airbnb typescript
    "plugin:jest/recommended",
    "prettier/react",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  rules: {
    "no-param-reassign": ["error", { props: false }],
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "jsx-a11y/label-has-associated-control": [ "error", {
      "required": {
        "some": [ "nesting", "id"  ]
      }
    }],
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  },
};
