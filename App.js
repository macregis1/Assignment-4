import 'react-native-gesture-handler';
import React, {useEffect} from 'react'
import { StyleSheet, Alert } from 'react-native'
import NetInfo from "@react-native-community/netinfo"

import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer, DefaultTheme as NavigationDefaultTheme,DarkTheme as NavigationDarkTheme } from '@react-navigation/native';
import {ActivityIndicator, TouchableOpacity} from 'react-native';
import { Provider as PaperProvider, DefaultTheme as PaperDefaultTheme, DarkTheme as PaperDarkTheme } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Screens
import BottomTab from './navigation/BottomTab';
import SupportScreen from './navigation/screens/SupportScreen';
import { DrawerContent } from './navigation/DrawerContent';
import RootStackScreen from './navigation/screens/RootStackScreen';
import { View } from 'react-native-animatable';
import { AuthContext } from './components/context';
import OfflineAler from './components/OfflineAlert';

const Drawer = createDrawerNavigator();
const App = () => {

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };
  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        }; 
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() =>({
    signIn: async(foundUser) => {
      const userToken = String(foundUser[0].userToken);
      const userName = foundUser[0].email;
      try {
        await AsyncStorage.setItem('userToken', userToken);
      } catch (e) {
        console.log(e);
      }          
      console.log('user token',userToken);
      dispatch({ type: 'LOGIN', id: userName, token: userToken });
    },
    signOut: async() => { 
      try {
        await AsyncStorage.removeItem('userToken');
      }catch(e){
        console.log(e);
      } 
      dispatch({ type: 'LOGOUT'});
    },
    signUp: () => {
      // setUserToken('fgh');
      // setIsLoading(false);
    },
  }),[]);

  useEffect(() =>{
    setTimeout(async() => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      }catch(e){
        console.log(e);
      }
      dispatch({ type: 'REGISTER', token: userToken});
    }, 1000);
  },[]);

  if (loginState.isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large"/>
      </View>
    );
  };
  return (   
    <PaperProvider > 
    <AuthContext.Provider value={authContext}>
      <NavigationContainer 
      screenOptions={{headerShown: false}} 
      >
        {loginState.userToken !== null ? (
          <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name=" " component={BottomTab} />
            <Drawer.Screen name="Support" component={SupportScreen} />
          </Drawer.Navigator>
        ) : 
        <RootStackScreen/>
        }
        <OfflineAler />
    </NavigationContainer>
    </AuthContext.Provider>
    </PaperProvider>
);
};

export default App