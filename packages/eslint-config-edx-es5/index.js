module.exports = {
    env: {
        amd: true,
        browser: true,
        jasmine: true,
        jquery: true
    },
    extends: 'airbnb-base/legacy',
    globals: {
        edx: true,
        RequireJS: true
    },
    parserOptions: {
        ecmaVersion: 5,
        ecmaFeatures: {
            globalReturn: false
        }
    },
    plugins: [
        'dollar-sign'
    ],
    rules: {
        'dollar-sign/dollar-sign': ['error', 'ignoreProperties'],
        'func-names': 'off',
        indent: ['error', 4],
        'max-len': ['error', 120],
        'new-cap': 'off',
        'no-else-return': 'off',
        'no-shadow': 'error',
        'object-curly-spacing': ['error', 'never'],
        'one-var': 'off',
        'one-var-declaration-per-line': ['error', 'initializations'],
        'space-before-function-paren': ['error', 'never'],
        strict: ['error', 'safe']
    }
};
