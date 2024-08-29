import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {navigationRef} from './NavigationService';
import {RootStackParamList} from '@models/navigation';
import StartScreen from '@screens/StartScreen';
import LoginScreen from '@screens/LoginScreen';

const RootNavigation = () => {
  const RootStack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator
        initialRouteName="StartScreen"
        screenOptions={{headerShown: false}}>
        {/* <RootStack.Screen name="BottomTab" component={BottomTabNavigator} /> */}
        <RootStack.Screen name="StartScreen" component={StartScreen} />
        <RootStack.Screen name="LoginScreen" component={LoginScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
