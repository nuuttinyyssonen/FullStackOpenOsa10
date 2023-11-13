import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/Main';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client';
import AuthStorage from "./src/utils/authStorage";
import createApolloClient from "./src/utils/apolloClient";
import AuthStorageContext from './src/AuthStorageContext';
import {PaperProvider} from 'react-native-paper';

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

export default function App() {
  return (
    <>
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <AuthStorageContext.Provider value={authStorage}>
        <PaperProvider>
            <View style={styles.container}>
                <Main />
            </View>
            </PaperProvider>
          </AuthStorageContext.Provider>
      </ApolloProvider>
    </NativeRouter>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
