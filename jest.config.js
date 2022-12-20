const nextJest = require('next/jest');

const babelConfigEmotion = {
  presets: [
    [
      'next/babel',
      {
        'preset-react': {
          runtime: 'automatic',
          importSource: '@emotion/react',
        },
      },
    ],
  ],
  plugins: [
    require.resolve('babel-plugin-macros'),
    require.resolve('@emotion/babel-plugin'),
  ],
};

const createJestConfig = nextJest({ dir: '.' });

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  clearMocks: true,
  moduleDirectories: ['node_modules', 'src'],
  // setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  testRegex: '(/__tests__/.*|(\\.|/)spec)\\.[jt]sx?$',
  transform: {
    '^.+\\.(js|jsx|ts|tsx|mjs)$': ['babel-jest', babelConfigEmotion],
  },
};

module.exports = createJestConfig(customJestConfig);
