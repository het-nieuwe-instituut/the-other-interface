module.exports = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    moduleNameMapper: {
        '\\.(scss|sass|css)$': 'identity-obj-proxy',
        '^@/features/(.*)$': '<rootDir>/src/features/$1',
        '^@/icons/(.*)$': '<rootDir>/src/features/shared/assets/$1',
    },
    moduleDirectories: ['node_modules', '<rootDir>'],
    testEnvironment: 'jsdom',
}
