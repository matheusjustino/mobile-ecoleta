import React from 'react';
import { AppLoading } from 'expo';
import { StatusBar } from 'react-native';
import { Roboto_400Regular, Roboto_500Medium, useFonts } from '@expo-google-fonts/roboto';
import { Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';

import Routes from './src/routes/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold
  });

  if(!fontsLoaded) {
    return <AppLoading></AppLoading>;
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent></StatusBar>
      <Routes></Routes>
    </>
  );
}