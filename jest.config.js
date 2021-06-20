module.exports = {
  root: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/**.{ts,tsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
