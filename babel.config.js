module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          AppRedux: './src/redux',
          Components: './src/Components',
          Containers: './src/Containers',
          Utils: './src/Utils',
          MainApp: './src',
        },
      },
    ],
  ],
};
