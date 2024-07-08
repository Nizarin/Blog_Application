import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/HomeScreen';
import Splash from './src/Splash';
import Search from './src/Search';
import NewsViewer from './src/NewsViewer';
import Welcome from './src/Screen/Welcome';
import Login from './src/Screen/Login';
import Signup from './src/Screen/Signup';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name='Welcome' component={Welcome}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Signup' component={Signup}/>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="NewsViewer" component={NewsViewer} />
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={{flex: 1, justifyContent: 'center'}}>
    //   <NavigationContainer>
    //     <HomeScreen />
    //     {/* <Stack.Screen
    //       name="Information"
    //       component={Information}
    //       options={{headerShown: false}}
    //     /> */}
    //   </NavigationContainer>
    // </View>
  );
};

export default App;

const styles = StyleSheet.create({});
