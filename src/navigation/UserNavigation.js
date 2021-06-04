import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import UserScreen from '../screens/UserScreen';
import AudioPlayerScreen from '../screens/AudioPlayerScreen';
import LibraryScreen from '../screens/LibraryScreen';
import {
  LibraryActiveIcon,
  LibraryUnactiveIcon,
  ProfileActiveIcon,
  ProfileUnactiveIcon,
} from '../components/Unknown/Icons';
import {colors} from '../common/theme';

const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator();

const UserNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      tabBarOptions={{
        activeTintColor: colors.pink,
        inactiveTintColor: colors.gray,
        showIcon: true,
        labelStyle: {
          fontSize: 10,
          fontWeight: '700',
        },
        style: {
          height: '12%',
          borderTopWidth: 1,
        },
        tabStyle: {
          margin: 15,
        },
      }}>
      <Tab.Screen
        name="Library"
        component={LibraryScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <LibraryActiveIcon /> : <LibraryUnactiveIcon />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={UserScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <ProfileActiveIcon /> : <ProfileUnactiveIcon />,
        }}
      />
    </Tab.Navigator>
  );
};

const RootStackScreen = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="Main"
          component={UserNavigation}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="AudioPlayer"
          component={AudioPlayerScreen}
          options={{headerShown: false}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
export default RootStackScreen;
