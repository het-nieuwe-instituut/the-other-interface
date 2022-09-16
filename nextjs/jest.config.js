module.exports = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    moduleNameMapper: {
        '\\.(scss|sass|css)$': 'identity-obj-proxy',
        '^@/features/(.*)$': '<rootDir>/src/features/$1',
        '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
        'react-markdown': '<rootDir>/node_modules/react-markdown/react-markdown.min.js',
    },
    moduleDirectories: ['node_modules', '<rootDir>'],
    testEnvironment: 'jsdom',
}
