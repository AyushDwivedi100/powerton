import js from "@eslint/js";
import typescript from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import i18next from "eslint-plugin-i18next";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        console: "readonly",
        process: "readonly",
        Buffer: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        exports: "writable",
        global: "readonly",
        module: "readonly",
        require: "readonly",
        window: "readonly",
        document: "readonly",
        navigator: "readonly",
        localStorage: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": typescript,
      react,
      "react-hooks": reactHooks,
      i18next,
    },
    rules: {
      // i18next rules for detecting hardcoded strings
      "i18next/no-literal-string": [
        "error",
        {
          markupOnly: false, // Check all strings, not just JSX
          ignoreAttribute: [
            "data-testid",
            "id",
            "className",
            "key",
            "role",
            "aria-labelledby",
            "aria-describedby",
            "href",
            "src",
            "alt",
          ], // Ignore technical attributes
          ignoreProperty: ["displayName", "name"], // Ignore component properties
          ignoreCallee: [
            "console.log",
            "console.error",
            "console.warn",
            "require",
            "import",
          ], // Allow console calls and imports
          mode: "jsx-text-only", // Focus on user-facing text
        },
      ],

      // React rules
      "react/react-in-jsx-scope": "off", // Not needed in React 17+
      "react/prop-types": "off", // Using TypeScript instead

      // TypeScript rules
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "warn",

      // General rules
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-undef": "off", // Handled by TypeScript
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    ignores: [
      "dist",
      "node_modules",
      "eslint.config.js",
      "vite.config.ts",
      "tailwind.config.ts",
      "postcss.config.js",
    ],
  },
];
