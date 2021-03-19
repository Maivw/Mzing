import * as React from 'react';
import {styles} from "./styles";
import { Text, View , FlatList} from 'react-native';
import AlbumCategory from "../components/AlbumCategory/index";
import {albumCategories} from "../data/data";
import { LinearGradient } from 'expo-linear-gradient';

export default function TabOneScreen() {
  return (
    <LinearGradient colors={['rgba(0,0,0,0.5)', '#4f4e4e', 'rgba(0,0,0,0.5)']}
    style={styles.gradient}>
      <View>
        <FlatList data={albumCategories}
        renderItem={({item}) => <AlbumCategory title={item.title} albums = {item.albums}/>}
        keyExtractor={item => item.id}
        />
          
      </View>
    </LinearGradient>
  );
}
