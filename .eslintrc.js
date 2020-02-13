module.exports = {
  root: true,
  extends: '@react-native-community',
  "settings": {
    "import/resolver": {
      "babel-module": {
        "alias": {
          "AppRedux": './src/redux',
          "Components": './src/Components',
          "Containers": './src/Containers',
          "Utils": './src/Utils',
          "MainApp": './src'
        }
      }
    }
  }
};
