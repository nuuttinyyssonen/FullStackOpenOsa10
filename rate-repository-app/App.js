import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Main from './Main';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client';
import AuthStorage from "./utils/authStorage";
import createApolloClient from "./utils/apolloClient";
import AuthStorageContext from './AuthStorageContext';

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

export default function App() {
  return (
    <>
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <AuthStorageContext.Provider value={authStorage}>
            <View style={styles.container}>
                <Main />
            </View>
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
