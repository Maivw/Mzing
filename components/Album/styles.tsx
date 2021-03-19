import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 200,
    paddingHorizontal: 10,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 1,
    shadowColor: '#fff',
    shadowOpacity: 0.1,
  },
  albumDetails: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 5
  },
  title: {
    color: '#9c9898',
    fontSize: 14,
  }, 
  artistHeadline: {
    color: '#9c9898',
    fontSize: 12,
  }

})
