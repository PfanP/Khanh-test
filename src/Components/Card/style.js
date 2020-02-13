import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  user: {
    marginTop: 30,
    padding: 10,
    flexDirection: 'column',
    width: 100,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    borderRadius: 5,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginBottom: 3,
  },
  title: {
    textAlign: 'center',
    paddingHorizontal: 5,
  },
});
