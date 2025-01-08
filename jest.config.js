module.exports = {
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/*.d.ts', '!**/node_modules/**', '!**/pages/api/**'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/__mocks__/fileMock.js',
    '@common': '<rootDir>/src/common',
    '@components': '<rootDir>/src/components',
    '@types': '<rootDir>/src/types',
    '@data': '<rootDir>/src/data',
    '@context': '<rootDir>/src/context',
    '@utility': '<rootDir>/src/utility',
    '@constants': '<rootDir>/src/constants',
  },
};
