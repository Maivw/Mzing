import  React, {useState} from 'react';
import {styles} from "./styles";
import { StyleSheet, Dimensions, Alert, View, Text, Image, Pressable} from "react-native";
import {  AlbumType} from '../../types';
import { useNavigation } from '@react-navigation/native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
  Easing 
} from "react-native-reanimated";


const { width, height } = Dimensions.get("window");
const MIN_HEIGHT = 128;
export const MAX_HEIGHT = height / 2;

export default function AlbumGenre({genre}) {
  const navigation = useNavigation();
  return (
   <Pressable style={styles.container} onPress ={() => console.warn(` you click to ${genre.id}`)}>
     <View style={styles.titleWrapper}> 
      <Text style={styles.title}>{genre.title}</Text>
     </View>
     <Image source={{uri: genre.imageUri}} style={styles.image}/>
   </Pressable>
  );
}
