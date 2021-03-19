import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  artistHeadline: {
    color: '#9c9898',
    fontSize: 18,
    textAlign: 'center',
    paddingVertical: 20,
  },

  browserall: {
    color: '#9c9898',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
  input: {
    backgroundColor: "#fff",
    height: 45,
    margin: 12,
    borderWidth: 1,
    color: '#111',
    paddingLeft: 50,
    borderRadius: 20,
  },

  inputWrapper: {
    marginTop: 50,
  },
  iconSearch :{
    position: 'absolute',
    left: 35,
    top: 22,
    elevation: 2,
    color: '#111'
  },
  homeContainer: {

  },
  gradient: {
    position: 'absolute',
    top:0,
    left: 0,
    right: 0,
    bottom: 0,
    height: '100%',
    paddingHorizontal: 20,
    
  },
  genre: {
    backgroundColor: '#111'
  },
  songDetailContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  songIndetail: {
    width: '100%',
    height: 400,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 1,
    shadowColor: '#fff',
    shadowOpacity: 0.1,

  },
  songImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 5,
  },
  songName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#9c9898',
    paddingLeft: 20,
    paddingVertical: 10,
  },
  songProgressContainer:{

  },
  songButtonController: {},
  searchContainer: {

  },
  yourLibContainer: {

  },
  accountContainer: {},
})
