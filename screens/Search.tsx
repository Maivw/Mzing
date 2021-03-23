import React, {useState} from 'react';
import { Text, View, FlatList, StyleSheet, Pressable} from 'react-native';
import { TextInput } from "react-native";
import {styles} from "./styles";
import AlbumGenre, { MAX_HEIGHT }  from "../components/AlbumGenre/index";
import { AntDesign} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { albumCategories } from '../data/data';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";


export default function SearchScreen() {
  const [text, onChangeText] = useState("");
  const [number, onChangeNumber] = useState(null);
  const y = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset: { y: value } }) => {
      y.value = value;
    },
  });
  return (
  <Animated.ScrollView
  onScroll={onScroll}
  scrollEventThrottle={16}
  snapToInterval={MAX_HEIGHT}
  contentContainerStyle={{height:(albumCategories.length + 1) * MAX_HEIGHT}}
  decelerationRate="fast">
     <Animated.View style={customStyles.container}>
     <Pressable style={styles.inputWrapper}>
      <TextInput
          style={styles.input}
          placeholder="Search songs or artist"
          blurOnSubmit={true}
          clearTextOnFocus={true}
          placeholderTextColor={'black'}
        />
      <AntDesign name="search1" size={24} style={styles.iconSearch} />
     </Pressable>
     <LinearGradient
        colors={['rgba(0,0,0,0.5)', '#4f4e4e', 'rgba(0,0,0,0.5)']}
        style={styles.genre}
      >
        <Text style={styles.browserall}>Browser all</Text>
        <FlatList data={albumCategories}
        renderItem={({item}) => <AlbumGenre y={y}  index ={item.id} genre = {item}/>}
        keyExtractor={item => item.id}
        />
      </LinearGradient>
     </Animated.View>
  </Animated.ScrollView> 
  );
}
const customStyles = StyleSheet.create({
  container: {
    height: (albumCategories.length + 1) * MAX_HEIGHT,
    backgroundColor: "black",
  },
});
