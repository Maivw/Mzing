import  React, {useState, useEffect} from 'react';
import {styles} from "./styles";
import { Text, StyleSheet, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Audio } from 'expo-av';
import { AntDesign,  MaterialIcons} from '@expo/vector-icons'; 

const song = {
  id: '1',
  title: 'Hoa hải đường',
  imageUri: 'https://res.cloudinary.com/maivw/image/upload/v1616095330/hoahaiduong_xf1xiu.jpg',
  artist :'J97',
  uri: require("../assets/mp3/hoahaiduong.mp3"),
  numberOfLikes: '10000000'
};

function SongDetailScreen() {
  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(true);
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);
  const onPlaybackStatusUpdate = (status) => {
    console.log("status", status);
    setIsPlaying(status.isPlaying);
    setDuration(status.durationMillis);
    setPosition(status.positionMillis);

  }
  const playCurrentSong = async() => {
    if(sound) {
      await sound.unloadAsync(); 
    }
    const {sound: newSound} = await Audio.Sound.createAsync( require('../assets/mp3/mixaund-motivation-mode.mp3'),
    { shouldPlay: isPlaying}, onPlaybackStatusUpdate);
    setSound(newSound);
  }
  useEffect(()=> {
    playCurrentSong();
  }, []);

  const onPressPlayPause = async() => {
    if(!sound) {
      return; 
    };

    if(isPlaying) {
      await sound.stopAsync();
    } else {
     await sound.playAsync();
    }
  };
  const getProgress = () => {
    if(sound === null ||duration === null || position ===null) {
      return 0;
    }else {
      return (position /duration) * 100;
    }
  }

  return (
    <LinearGradient colors={['rgba(0,0,0,0.5)', '#4f4e4e', 'rgba(0,0,0,0.5)']}
    style={styles.gradient}>
      <SafeAreaView >
        <Text style={customStyles.artist}>{song.artist}</Text>
      </SafeAreaView>
      <View style={customStyles.songIndetail}>
        <View style={customStyles.circleOne}></View>
        <Image style={customStyles.songImage} source={{uri: song.imageUri}}/>
        <View style={customStyles.circleTwo}></View>
        <Text style={customStyles.songName}>{song.title}</Text>
      </View>
      <View style ={customStyles.songProgressContainer}>
        <View style={[customStyles.songProgress, {width: `${getProgress()}%`}]}/>
      </View>
      <View style={customStyles.songTimeDisplay}>
        <Text style={customStyles.time}> {`${(position /1000).toFixed(0)}`}</Text>
        <Text style={customStyles.time}>{`${ Math.floor(duration /60000)} : ${((duration % 60000)/1000).toFixed(0)}`}</Text>
      </View>
      <View style={customStyles.songButtonController}>
        <MaterialIcons name="skip-previous" size={30} color="#9c9898"/>
        <TouchableOpacity onPress={onPressPlayPause}>
          <AntDesign name={ isPlaying? "pausecircleo" : "playcircleo"} size={40} color="#9c9898"/>
        </TouchableOpacity>
        <MaterialIcons name="skip-next" size={30} color="#9c9898" />
      </View>
    </LinearGradient>
  );
}


const customStyles = StyleSheet.create({
  artist: {
    color: '#9c9898',
    fontSize: 18,
    textAlign: 'center',
    paddingVertical: 20,
  },
  circleOne: {
    height: 280,
    width: 300,
    backgroundColor: '#111',
    position: 'absolute',
    borderRadius: 220,
    opacity:0.9,
    left:-10,
    top: 30,
  },
  circleTwo: {
    height: 320,
    width: 300,
    backgroundColor: '#111',
    opacity:0.2,
    position: 'absolute',
    borderRadius: 220,
    right: -10,
    top: 30,
    zIndex: -1,
  },
  songProgress: {
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 2.5,
    zIndex: 2,
  },
  songProgressContainer: {
    height: 6,
    marginTop: 100,
    width: '100%',
    borderWidth: 1,
    borderColor: '#9c9898',
    borderRadius: 2.5,
  },
  songDetailContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  songIndetail: {
    width: '100%',
    height: 360,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 1,
    shadowColor: '#fff',
    shadowOpacity: 0.1,

  },
  songImage: {
    width: '90%',
    height: '90%',
    resizeMode: 'cover',
    borderRadius: 200,
    marginLeft: '5%'
  },
  songName: {
    fontSize: 24,
    color: '#9c9898',
    paddingLeft: 20,
    paddingVertical: 20,
    textAlign: 'center',
    marginTop: 40,
  },
  songButtonController: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 20,
    marginTop:50,
    alignItems: 'center'
  },
  songTimeDisplay:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  time: {
    color: 'white'
  }
})
export default SongDetailScreen;
