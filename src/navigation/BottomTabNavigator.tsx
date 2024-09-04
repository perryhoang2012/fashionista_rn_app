import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/HomeScreen';
import {icon_home, icon_home_active} from '@themes/iconSvg';
import React from 'react';
import {SvgXml} from 'react-native-svg';

const HomeIcon = ({focused}: {focused: boolean}) => (
  <SvgXml xml={focused ? icon_home_active : icon_home} />
);
const BottomTabNavigator = () => {
  const BottomTab = createBottomTabNavigator();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarLabel: () => {
          return null;
        },
        headerShown: false,
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: HomeIcon,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
