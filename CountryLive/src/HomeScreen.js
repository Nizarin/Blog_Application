import React from 'react';
import 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './Screen/Home';
import ViewBlog from './Screen/ViewBlog';
import AddBlog from './Screen/AddBlog';

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator barStyle={{backgroundColor: '#bdc3c7',padding:0}}>
      <Tab.Screen
        name="Home"
        component={StackNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="ViewBlog"
        component={ViewBlog}
        options={{
          tabBarLabel: 'ViewBlog',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="book" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="AddBlog"
        component={AddBlog}
        options={{
          tabBarLabel: 'CreateBlog',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="magnify" color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default function HomeScreen() {
  return <TabNavigator />;
}
