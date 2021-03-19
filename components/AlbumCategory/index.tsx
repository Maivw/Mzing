import  React, {useState} from 'react';
import {styles} from "./styles";
import {View,SafeAreaView, Text, FlatList} from "react-native";
import Album from "../Album/index";
import {AlbumCategoryType, AlbumType} from "../../types";
import { albums } from '../../data/data';
export type AlbumCategoryProps = {
  id: string,
  albums:[AlbumType],
  title: string,
}



export default function AlbumCategory(props:  AlbumCategoryProps ) {
  const [selectedId, setSelectedId] = useState(null);
  const {albums, title} = props;
  const onPressHanlder = (item)=> {
    setSelectedId(item.id)
  }
 
  return (
   <SafeAreaView style={styles.container}>
     <View style={styles.titleWrapper}>
      <Text style={styles.title}>
        {title}
      </Text>
     </View>
    <FlatList data={albums}
      keyExtractor={item => item.id}
      renderItem={({item}) => <Album album={item} handlePress ={() => onPressHanlder(item)}/>}
      extraData={selectedId}
      horizontal={true}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}

    />
   </SafeAreaView>
  );
}
