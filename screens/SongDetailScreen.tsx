import * as React from 'react';
import {styles} from "./styles";
import { Text, View, SafeAreaView, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
const song = {
  id: '1',
  title: 'Hoa hải đường',
  imageUri: 'https://res.cloudinary.com/maivw/image/upload/v1616095330/hoahaiduong_xf1xiu.jpg',
  artistHeadline :'J97',
  uri: require("../assets/mp3/yt1s.com - Jack  Hoa Hải Đường  Official Music Video.mp3")

}

function SongDetailScreen() {
  return (
    <LinearGradient colors={['rgba(0,0,0,0.5)', '#4f4e4e', 'rgba(0,0,0,0.5)']}
    style={styles.gradient}>
      <SafeAreaView >
        <Text style={styles.artistHeadline}>{song.artistHeadline}</Text>
      </SafeAreaView>
      <View style={styles.songIndetail}>
        <Image style={styles.songImage} source={{uri: song.imageUri}}/>
        <Text style={styles.songName}>{song.title}</Text>
      </View>
      <View style={styles.songProgressContainer}></View>
      <View style={styles.songButtonController}>
        
      </View>
    </LinearGradient>
  )
}

export default SongDetailScreen;
