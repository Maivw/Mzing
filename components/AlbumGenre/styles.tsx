import { StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    width: '90%',
    marginLeft: '5%',
    borderRadius: 10,
    height: 200,
    position: 'relative'
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  }, 
  titleWrapper: {
    position: 'absolute',
    zIndex: 2,
    top: 30,
    right: 20,
    paddingVertical: 10,
    width:  120,
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#111',
    opacity: 0.6,
    borderRadius: 10,

  },
  image:{
    width: '100%',
    height: '100%',
    borderRadius: 10,
  }
  
})
// const { width, height } = Dimensions.get("window");
// const MIN_HEIGHT = 128;
// export const MAX_HEIGHT = height / 2;
// export const styles = StyleSheet.create({
//   container: {
//     width,
//     height: MIN_HEIGHT,
//     justifyContent: "flex-end",
//   },
//   picture: {
//     ...StyleSheet.absoluteFillObject,
//     width: undefined,
//     height: undefined,
//   },
//   title: {
//     color: "white",
//     textAlign: "center",
//     fontSize: 32,
//     fontWeight: "500",
//   },
//   titleContainer: {
//     maxHeight: MAX_HEIGHT * 0.61,
//     justifyContent: "center",
//     flex: 1,
//   },
//   mainTitle: {
//     ...StyleSheet.absoluteFillObject,
//     justifyContent: "center",
//     padding: 32,
//     transform: [{ translateY: 64 }],
//   },
//   subtitle: {
//     color: "white",
//     textAlign: "center",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });
