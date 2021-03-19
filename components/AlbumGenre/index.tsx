import  React, {useState} from 'react';
import { StyleSheet, Dimensions, Alert, View, Text} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import Animated, {
  useAnimatedStyle,
  interpolate,
  Extrapolate
} from "react-native-reanimated";


const { width, height } = Dimensions.get("window");
const MIN_HEIGHT = 160;
export const MAX_HEIGHT = height / 2;

interface AlbumGenre {
  title: string;
  id: string;
  imageUri: string;
  top: number;
}
interface GenreProps {
  index: number;
  y: Animated.SharedValue<number>;
  genre: AlbumGenre;
}

export default function AlbumGenre({y,  index, genre :{title, id, imageUri, top}}: GenreProps ) {
  const inputRange = [ (index -1) * MAX_HEIGHT, index * MAX_HEIGHT];
  const navigation = useNavigation();

  const container = useAnimatedStyle(() => ({
    height: interpolate(y.value, inputRange, [MIN_HEIGHT, MAX_HEIGHT], Extrapolate.CLAMP),
  }))

  const titleStyle = useAnimatedStyle(()=>({
     opacity: interpolate(y.value, inputRange, [0, 1], Extrapolate.CLAMP),
  }))
  return (
  <TouchableWithoutFeedback onPress={() => Alert.alert("Pressed!")}>
      <Animated.View style={[customStyles.container, container]}>
        <Animated.Image
          source={{uri:imageUri}}
          style={[customStyles .picture]}
        />
        <View style={customStyles .titleContainer}>
          <View style={customStyles .mainTitle}>
            <Animated.View style={titleStyle} >
              <Text style={customStyles .title}>{title.toUpperCase()}</Text>
            </Animated.View>
          </View>
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}
const customStyles = StyleSheet.create({
  container: {
    width,
    height: MIN_HEIGHT,
    justifyContent: "flex-end",
    paddingVertical: 10,
    borderRadius: 10,
    position: 'relative',
  },
  picture: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    borderRadius: 10,
  },
  title: {
    color: "#f7f7f7",
    textAlign: "center",
    fontSize: 20,
    fontWeight: 'bold'
  },
  titleContainer: {
    maxHeight: MAX_HEIGHT * 0.61,
    justifyContent: "center",
    flex: 1,
  },
  mainTitle: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    padding: 32,
    transform: [{ translateY: 30 }],
    fontWeight: 'bold'
  },
});
