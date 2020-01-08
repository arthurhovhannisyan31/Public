module.exports = {
    "env": {
    "browser": true,
        "es6": true,
        "jest": true
},
    "plugins": [
    "react",
    "prettier"
],
    "extends": [
    "eslint:recommended",
    "airbnb",
    "prettier",
    "prettier/react"
],
    "globals": {
    "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "window": true,
        "document": true,
        "localStorage": true,
        "FormData": true,
        "FileReader": true,
        "Blob": true,
        "navigator": true
},
    "parser": "babel-eslint",
    "parserOptions": {
    "ecmaFeatures": {
        "jsx": true
    },
    "ecmaVersion": 2020,
        "sourceType": "module"
},
    "rules": {
    "react/jsx-filename-extension": [
        1,
        {
            "extensions": [
                ".js",
                ".jsx"
            ]
        }
    ],
        "react/prop-types": 0,
        "no-underscore-dangle": 0,
        "import/imports-first": [
        "error",
        "absolute-first"
    ],
        "import/newline-after-import": "error"
}
};

