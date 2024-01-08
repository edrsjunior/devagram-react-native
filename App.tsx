import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback } from 'react';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
    'Montserrat-Black': require('./assets/fonts/Montserrat-Black.ttf'),
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
      <Text>Open up App.tsx to start working on your app!</Text>
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
