const path = require('path');
const fs = require('fs');

const viewersBasePath = path.resolve(__dirname, '../Viewers/jest.config.base.js');
const base = fs.existsSync(viewersBasePath)
  ? require(viewersBasePath)
  : {
      testEnvironment: 'jsdom',
      transform: {
        '^.+\\.[jt]sx?$': 'babel-jest',
      },
      moduleNameMapper: {},
    };

module.exports = {
  ...base,
  rootDir: __dirname,
  testMatch: [
    '<rootDir>/test/**/*.test.js',
    '<rootDir>/test/**/*.test.ts',
    '<rootDir>/src/**/*.test.js',
    '<rootDir>/src/**/*.test.ts',
  ],
  moduleNameMapper: {
    ...(base.moduleNameMapper || {}),
    '@ohif/(.*)': '<rootDir>/../Viewers/platform/$1/src',
    '\\.(css|less)$': '<rootDir>/test/__mocks__/styleMock.js',
  },
  reporters: ['default'],
};
