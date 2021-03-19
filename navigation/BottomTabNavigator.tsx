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

const Stack = createStackNavigator();
function SearchNavigator() {
  return (
    <Stack.Navigator  screenOptions={{headerShown: false}} initialRouteName={"SongDetail"}>
      <Stack.Screen name="Search" component={SearchScreen} />
      {/* <Stack.Screen name="SongDetail" component={SongDetailScreen} /> */}
    </Stack.Navigator>
  )
}

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
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
