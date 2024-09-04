import CustomSvg from '@components/CustomSvg';
import {verticalScale} from '@helpers/uiHelper';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CartScreen from '@screens/CartScreen';
import CategoriesScreen from '@screens/CategoriesScreen';
import HomeScreen from '@screens/HomeScreen';
import ProfileScreen from '@screens/ProfileScreen';
import WishlistScreen from '@screens/WishlistScreen';
import {
  icon_cart,
  icon_cart_active,
  icon_categories,
  icon_categories_active,
  icon_heart,
  icon_heart_active,
  icon_home,
  icon_home_active,
  icon_profile,
  icon_profile_active,
} from '@themes/iconSvg';
import React from 'react';

const HomeIcon = ({focused}: {focused: boolean}) => (
  <CustomSvg
    xml={focused ? icon_home_active : icon_home}
    width={focused ? 26 : 24}
    height={focused ? 26 : 24}
  />
);

const WishlistIcon = ({focused}: {focused: boolean}) => (
  <CustomSvg
    xml={focused ? icon_heart_active : icon_heart}
    width={focused ? 26 : 24}
    height={focused ? 26 : 24}
  />
);

const CategoriesIcon = ({focused}: {focused: boolean}) => (
  <CustomSvg
    xml={focused ? icon_categories_active : icon_categories}
    width={focused ? 26 : 24}
    height={focused ? 26 : 24}
  />
);

const CartIcon = ({focused}: {focused: boolean}) => (
  <CustomSvg
    xml={focused ? icon_cart_active : icon_cart}
    width={focused ? 26 : 24}
    height={focused ? 26 : 24}
  />
);

const ProfileIcon = ({focused}: {focused: boolean}) => (
  <CustomSvg
    xml={focused ? icon_profile_active : icon_profile}
    width={focused ? 26 : 24}
    height={focused ? 26 : 24}
  />
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
        tabBarStyle: {height: verticalScale(84)},
        headerShown: false,
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: HomeIcon,
        }}
      />
      <BottomTab.Screen
        name="Wishlist"
        component={WishlistScreen}
        options={{
          tabBarIcon: WishlistIcon,
        }}
      />

      <BottomTab.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          tabBarIcon: CategoriesIcon,
        }}
      />

      <BottomTab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: CartIcon,
        }}
      />

      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ProfileIcon,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
