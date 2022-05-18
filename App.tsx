import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native';
import { CalculadoraScreen } from './src/screen/CalculadoraScreen';
import { styles } from './src/theme/app.theme';

const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar barStyle="light-content" backgroundColor='black' />
      <CalculadoraScreen />
    </SafeAreaView>
  )
}

export default App;