module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "no-console": "warn",
        semi: ["error", "always"],
        quotes: ["error", "double"],
        "react/jsx-filename-extension": "off",
        "no-undef": "off",
        "linebreak-style": "off",
        "import/prefer-default-export": "off",
    }
};