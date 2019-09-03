module.exports = {
    projects: [
        {
            displayName: 'cli',
            moduleFileExtensions: [
                'js',
                'ts'
            ],
            testEnvironment: 'node',
            testMatch: [
                '**/e2e/cli/**/?(*.)test.ts'
            ],
            transform: {
                ts: 'ts-jest'
            }
        }
    ]
};
