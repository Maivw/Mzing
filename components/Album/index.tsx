import * as React from 'react';
import {styles} from "./styles";
import {View, Text, Image, TouchableOpacity} from "react-native";
import {AlbumType } from "../../types";



export type AlbumProps = {
  album: AlbumType,
  handlePress:  () => void
}
export default function Album(props:  AlbumProps) {
  const {album, handlePress} = props;
  
  return (
    <TouchableOpacity  style={styles.container} onPress={() => handlePress(album)}>
      <Image source={{uri: album.imageUri}} style={styles.image}/>
      <View style={styles.albumDetails}>
        <Text style={styles.title}>{album.title}</Text>
      </View>
    </TouchableOpacity>
  );
}
