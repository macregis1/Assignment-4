import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '@react-navigation/native';

import HomeScreen from './screens/HomeScreen';
import CalculatorScreen from './screens/CalculatorScreen';
import ContactScreen from './screens/ContactScreen';
import { Title } from 'react-native-paper';
import ProfileScreen from './screens/profile';
import EditProfile from './screens/EditProfile';

const Tab = createMaterialBottomTabNavigator();
const HomeTask = createStackNavigator();
const ProfileTask = createStackNavigator();
const SupportTask = createStackNavigator();

const HomeStaskScreen = ({navigation}) => (
    <HomeTask.Navigator screenOptions={{
        headerStyle: { backgroundColor: '#009387'},
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
    }}>
        <HomeTask.Screen name="home" component={HomeScreen} options={{ title: 'Home', headerTitleAlign: 'center'}} />
    </HomeTask.Navigator>
);
const ProfileStaskScreen = ({navigation}) => (
    <ProfileTask.Navigator screenOptions={{
        headerStyle: { backgroundColor: '#009387',
        //  elevation: 0
        },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
    }}>
        <ProfileTask.Screen name="profile" component={ProfileScreen} options={{ title: 'Profile', headerTitleAlign: 'center'}} />
        <ProfileTask.Screen name="EditProfile" options={{ title: 'Edit Profile'}}
        component={EditProfile}
        />
    </ProfileTask.Navigator>
);

const BottomTab = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#fff"
    inactiveColor="#b0e0e6"
    barStyle={{ backgroundColor: 'tomato' }}
  >
    <Tab.Screen
      name="Home"
      component={HomeStaskScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Calculator"
      component={CalculatorScreen}
      options={{
        tabBarLabel: 'Calculator',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="calculator" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Contact"
      component={ContactScreen}
      options={{
        tabBarLabel: 'Contact',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="contacts" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStaskScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default BottomTab;
