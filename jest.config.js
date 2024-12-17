export default {
    testEnvironment: 'jest-environment-jsdom',
    transform: {
      '^.+\\.jsx?$': 'babel-jest', // Transform JSX and JS with Babel
    }, // Use jsdom for the test environment
    setupFilesAfterEnv: ['@testing-library/jest-dom'], // Correct the import path here
  };
  