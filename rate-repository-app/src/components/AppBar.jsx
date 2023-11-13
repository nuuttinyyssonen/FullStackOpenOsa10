import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from './themes';
import Text from './Text';
import { Link } from 'react-router-native';
import useSignOut from '../hooks/useSignOut';
import { useQuery } from '@apollo/client';
import { ME } from '../GraphQL/queries';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import AuthStorageContext from '../AuthStorageContext';
import { useApolloClient } from '@apollo/client';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.backgroundColors.navBar,
    height: 100,
  },
  headLine: {
    color: "white",
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10
  }
});

const AppBar = () => {
  const authStorage = useContext(AuthStorageContext);
  const { data, loading, error } = useQuery(ME);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const apolloClient = useApolloClient();

  useEffect(() => {
    if(error) {
      console.log(error.graphQLErrors)
    }
    if(data && data.me != null) {
      setIsSignedIn(true)
    }
  }, [data, error]) 

  const handleSignOut = async() => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    setIsSignedIn(false)
  }

  return (
    <View style={styles.container}>
        <ScrollView horizontal>
            <Link to='/'><Text style={styles.headLine}>Repositories</Text></Link>
            <Link to='/review'><Text style={styles.headLine}>Create a review</Text></Link>
          {!isSignedIn &&
            <Link to='/signin'><Text style={styles.headLine}>Sign In</Text></Link>}
          {isSignedIn && <Pressable onPress={handleSignOut}>
            <Text style={styles.headLine}>Sign Out</Text>
          </Pressable>}
          <Link to='/signup'><Text style={styles.headLine}>Sign up</Text></Link>
          {isSignedIn && <Link to='/reviewpage'><Text style={styles.headLine}>My Reviews</Text></Link>}
        </ScrollView>
    </View>
  )
};

export default AppBar;