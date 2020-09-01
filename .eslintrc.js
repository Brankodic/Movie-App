export default {
    "env": {
        "browser": true,
        "es2021": true
    },
    "editor.codeActionsOnSave": {
        "source.fixAll": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
    },
    "settings": {
        "react": {
          "version": "detect"
        }
      }
};
