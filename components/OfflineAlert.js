// src/components/OfflineAlert.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NetInfo from '@react-native-community/netinfo';

const OfflineAlert = () => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => unsubscribe();
  }, []);

  return !isConnected ? (
    <View style={styles.container}>
      <Text style={styles.text}>You are offline!</Text>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    padding: 10,
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
});

export default OfflineAlert;
