module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@helpers': './src/helpers',
          '@models': './src/models',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@themes': './src/themes',
          '@fonts': './src/themes/fonts',
          '@locales': './src/locales',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
