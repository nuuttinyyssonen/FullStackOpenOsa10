import { View, StyleSheet, Text, Pressable } from 'react-native';
import Constants from 'expo-constants';
import theme from '../themes';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.backgroundColors.navBar,
    height: 100,
    display: "flex",
    justifyContent: "center"
  },
  headLine: {
    color: "white"
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
        <Pressable>
            <Text style={styles.headLine}>Repositories</Text>
        </Pressable>
    </View>
  )
};

export default AppBar;