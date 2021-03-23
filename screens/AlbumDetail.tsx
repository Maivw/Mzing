import * as React from 'react';
import { Text, View, StyleSheet, Image,TouchableWithoutFeedback, FlatList, Pressable} from 'react-native';
import {album } from "../data/data";
import {styles} from "./styles";
import { MaterialIcons } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function AlbumDetail() {
  const navigation = useNavigation();
  const onPress = (id ) => {
    navigation.navigate('SongDetail');
  }

  return (
    <LinearGradient colors={['rgba(0,0,0,0.5)', '#4f4e4e', 'rgba(0,0,0,0.5)']}
    style={styles.gradient}>
   <View style={customStyles.container}> 
     <View style={customStyles.coverContainer}>
     <View style={customStyles.circleOne}></View>
      <Image source={{uri: album.imageUri}}style={customStyles.image}/>
      <View style={customStyles.circleTwo}></View>
     </View>
     <View
      style={customStyles.contentContainer}>
        <FlatList data={album.songs}
        renderItem={({item}) => (
          <Pressable onPress={() => onPress(item.id)}style={customStyles.songContainer}>
            <View style={customStyles.songContainerLeft}>
              <Image  source={{uri: item.songImgUri}} style={customStyles.songImage
              }/>
            <Text style={customStyles.songName}>{item.name}</Text>
            </View>
            <View>
              <MaterialIcons name="more-horiz" size={24} color="#9c9898" />
            </View>
          </Pressable>
        )}
        keyExtractor={item => item.id}
        />
      </View>
     <View style={customStyles.buttonWrapper}>
     <TouchableWithoutFeedback>
        <View style={customStyles.button}>
          <Text style={customStyles.label}>PLAY</Text>
        </View>
      </TouchableWithoutFeedback>
     </View>
   </View>
   </LinearGradient>
  );
}


const customStyles = StyleSheet.create({
  buttonWrapper:{
    position: 'absolute',
    left: 0,
    right:0, 
  },
  button: {
    alignSelf: "center",
    backgroundColor: "#1ed760",
    height: 40,
    width:170,
    borderRadius: 32,
    justifyContent: "center",
    marginTop: 330,
  },
  circleOne: {
    height: 250,
    width: 250,
    backgroundColor: '#111',
    position: 'absolute',
    borderRadius: 250,
    opacity:0.9,
    left:15,
    top: 70,
    borderColor: '#9c9898',
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 1,
    shadowColor: '#fff',
    shadowOpacity: 0.1,
  },
  circleTwo: {
    height: 190,
    width: 250,
    backgroundColor: '#111',
    opacity: 1,
    position: 'absolute',
    borderRadius: 260,
    right: 25,
    top: 50,
    zIndex: -1,
    borderColor: '#9c9898',
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 1,
    shadowColor: '#fff',
    shadowOpacity: 0.8,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius:350,
    marginTop: 50,

  },
  label: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
    fontWeight: "bold",
  },
  container: {
    width: '100%',
    height: '100%',
    borderWidth: 1,
    alignItems: 'center',
    borderColor: 'transparent'
  },
  contentContainer: {
    marginTop: 80,
    width: '100%',
  },
  songContainerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  songContainerRight: {
    textAlign: 'center'
  },

  coverContainer:{},
  songContainer: {
    height: 'auto',
    paddingVertical: 10,
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  songName: {
    color: '#9c9898',
    paddingLeft: 15,
    fontSize: 16,
  },
  songImage :{
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#9c9898',
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 1,
    shadowColor: '#fff',
    shadowOpacity: 0.1,
  }, 
})
