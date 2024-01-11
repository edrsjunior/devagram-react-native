import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {  useFonts, Inter_600SemiBold, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback, useState } from 'react';
import Button from './src/_components/Button';
import Input from './src/_components/Input';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_400Regular,
  });

  const [email,setEmail] = useState<string>('');


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
      <Input 
        onChangeText={(e:string) => {setEmail(e)}} 
        placeholder='example.mail@mydomain.com' 
        value={email}></Input>
      <Button onPress={() => {}} placeholder='Clique aqui' loading={false} disable={false}></Button>
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
