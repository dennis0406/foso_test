import { SafeAreaView, StyleSheet, Text } from 'react-native'

import Scan from './assets/icons/scan.svg';
import Icon from './components/Icon';

const App = () => {
  return (
    <SafeAreaView style={{ backgroundColor: '#ff0000', flex: 1 }}>
      <Text>App</Text>
      <Icon
        SVGComponent={Scan}
        size={32}
        color="#FFD700"
      />
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})