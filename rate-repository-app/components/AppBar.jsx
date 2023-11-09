import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from './themes';
import Text from './Text';
import { Link } from 'react-router-native';

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
  return (
    <View style={styles.container}>
        <ScrollView horizontal>
          <Pressable>
            <Link to='/'><Text style={styles.headLine}>Repositories</Text></Link>
          </Pressable>
          <Pressable>
            <Link to='/signin'><Text style={styles.headLine}>Sign In</Text></Link>
          </Pressable>
        </ScrollView>
    </View>
  )
};

export default AppBar;