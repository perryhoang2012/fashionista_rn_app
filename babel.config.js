module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@apis': './src/apis',
          '@assets': './src/assets',
          '@components': './src/components',
          '@helpers': './src/helpers',
          '@hooks': './src/hooks',
          '@locales': './src/locales',
          '@models': './src/models',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@store': './src/store',
          '@themes': './src/themes',
          '@utils': './src/utils',
          '@fonts': './src/themes/fonts',
        },
      },
    ],
  ],
};
