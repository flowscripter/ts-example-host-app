module.exports = {
    hooks: {
        'pre-commit': 'npm run lint',
        'commit-msg': 'npx commitlint -E HUSKY_GIT_PARAMS'
    }
};
