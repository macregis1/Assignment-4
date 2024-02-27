import 'react-native-gesture-handler';
import React, {useEffect} from 'react'
import { SafeAreaView, View, StatusBar, StyleSheet, Text, Alert } from 'react-native'
// import DContainer from './navigation/DContainer'
// import AuthStack from './navigation/AuthStack'
// import { NavigationContainer } from '@react-navigation/native';
import NetInfo from "@react-native-community/netinfo"
import { AuthProvider } from './navigation/AutoContext';
import AppNav from './navigation/AppNav';

const App = () => {
  const unsuscribe = NetInfo.addEventListener(state => {
    if (state.isConnected === false){
      Alert.alert("no conection", "please reconnect");
    }else if (state.isConnected === true){
      console.log("connected to internet");
    }
  })
  useEffect(() => {
    unsuscribe();
  })
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
    // <SafeAreaView style={styles.safeArea}>
    //     <StatusBar barStyle="dark-content" />
    //     <NavigationContainer>
    //         <AuthStack />
    //     </NavigationContainer>
    // </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    overflow: 'hidden',
  },
})

export default App