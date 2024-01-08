import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {  useFonts, Inter_900Black, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback } from 'react';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_700Bold,
    Inter_400Regular,
  });


  // LOADSCREEN
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      // await new Promise(resolve => setTimeout(resolve, 5000));
      await SplashScreen.hideAsync();
      
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  // ------------------

  return (
    fontsLoaded ?

    <View style={styles.container} onLayout={onLayoutRootView}>
      <Text style={{fontFamily:'Inter_700Bold' }}>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
    : null
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
