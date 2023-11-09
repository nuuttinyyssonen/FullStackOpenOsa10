import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Main from './Main';
import { NativeRouter } from 'react-router-native';

export default function App() {

  return (
    <>
    <NativeRouter>
      <View style={styles.container}>
        <Main />
      </View>
    </NativeRouter>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
