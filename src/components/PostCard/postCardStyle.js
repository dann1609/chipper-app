import {StyleSheet} from 'react-native';

const postCardStyles = StyleSheet.create({
  postCard: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    padding: 5,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 'auto',
    marginBottom: 'auto',
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 10,
  },
  title: {
    fontSize: 21,
  },
  minorInfoContainer: {
    flexDirection: 'row',
    marginTop: 'auto',
    paddingTop: 10,
  },
  minorInfo: {
    flex: 1,
    fontSize: 12,
  },
});

export default postCardStyles;
