import React from 'react';
import { Tabs } from 'expo-router';
import Colors from '@/constants/Colors';
import { AntDesign, Entypo, Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { View } from 'react-native';
import { defaultStyles } from '@/constants/Styles';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: Colors.primary,
      tabBarInactiveTintColor: Colors.grey,
      tabBarLabelStyle: {
        fontFamily: 'open-sans-medium',
        fontSize: 10,
        fontWeight: 'bold'
      }
    }}>
      <Tabs.Screen 
      name='home' 
      options={{
        tabBarLabel: 'Note',
        tabBarIcon: ({color, size}) => <Feather name="home" size={size} color={color} />
      }}/>
      <Tabs.Screen 
      name='calendar' 
      options={{
        tabBarLabel: 'Calendar', 
        tabBarIcon: ({ color, size }) => <Feather name="calendar" size={size} color={color} />
      }}/>
      <Tabs.Screen 
      name='guide' 
      options={{
        tabBarLabel: 'Guide',  
        tabBarIcon: ({ color, size }) => <AntDesign name="find" size={size} color={color} />
      }}/>
      <Tabs.Screen 
      name='more' 
      options={{
        tabBarLabel: 'Favourite',  
        tabBarIcon: ({ color, size }) => <Entypo name="dots-three-horizontal" size={size} color={color} />
      }}/>
    </Tabs>
  );
}
