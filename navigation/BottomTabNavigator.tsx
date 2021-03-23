import { AntDesign, Entypo, FontAwesome  } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from "../screens/Search";
import Account from "../screens/Account";
import YourLibray from '../screens/YourLibary';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';
import { createStackNavigator } from '@react-navigation/stack';
import SongDetailScreen from "../screens/SongDetailScreen";
import AlbumDetail from "../screens/AlbumDetail";

const Stack = createStackNavigator();
function SearchNavigator() {
  return (
    <Stack.Navigator  screenOptions={{headerShown: true}} initialRouteName={"SongDetail"}>
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  );
}
function HomeNavigator() {
  return (
    <Stack.Navigator  screenOptions={{headerShown: true}} initialRouteName={"Home"}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AlbumDetail" component={AlbumDetail} />
      <Stack.Screen name="SongDetail" component={SongDetailScreen} />
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <Entypo name="home" size={24} color="white" />,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="search1" size={24} color="white" />,
        }}
      />
      <BottomTab.Screen
        name="Your Library"
        component={YourLibray}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome name="music" size={24} color="white" />
        }}
      />
       <BottomTab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="user" size={24} color="white" />
        }}
      />
       
    </BottomTab.Navigator>
  );
}
