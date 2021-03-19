import React, {useState} from 'react';
import { Text, View, FlatList} from 'react-native';
import { TextInput } from "react-native";
import {styles} from "./styles";
import AlbumGenre from "../components/AlbumGenre/index";
import { AntDesign} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { albumCategories } from '../data/data';

export default function SearchScreen() {
  const [text, onChangeText] = useState("");
  const [number, onChangeNumber] = useState(null);
  return (
   <View>
     <View style={styles.inputWrapper}>
      <TextInput
        style={styles.input}
        placeholder="Search songs or artist"
        blurOnSubmit={true}
        clearTextOnFocus={true}
        placeholderTextColor={'black'}
      />
      <AntDesign name="search1" size={24} style={styles.iconSearch} />
     </View>
     <LinearGradient
        colors={['rgba(0,0,0,0.8)', 'transparent']}
        style={styles.genre}
      >
        <Text style={styles.browserall}>Browser all</Text>
        <FlatList data={albumCategories}
        renderItem={({item}) => <AlbumGenre  genre = {item}/>}
        keyExtractor={item => item.id}
        />
      </LinearGradient>
   </View>
  );
}
