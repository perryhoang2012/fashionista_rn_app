import {RootStackParamList} from '@models/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CreateAccountScreen from '@screens/CreateAccountScreen';
import LoginScreen from '@screens/LoginScreen';
import PasswordTypingScreen from '@screens/PasswordTypingScreen';
import StartScreen from '@screens/StartScreen';
import React from 'react';
import BottomTabNavigator from './BottomTabNavigator';
import {navigationRef} from './NavigationService';

const RootNavigation = () => {
  const RootStack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator
        initialRouteName="StartScreen"
        screenOptions={{headerShown: false}}>
        <RootStack.Screen name="StartScreen" component={StartScreen} />
        <RootStack.Screen name="LoginScreen" component={LoginScreen} />
        <RootStack.Screen
          name="CreateAccountScreen"
          component={CreateAccountScreen}
        />
        <RootStack.Screen
          name="PasswordTypingScreen"
          component={PasswordTypingScreen}
        />
        <RootStack.Screen name="BottomTab" component={BottomTabNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
