import { StyleSheet, View } from "react-native";
import RepositoryList from "./components/RepositoryList";
import AppBar from "./components/AppBar";
import theme from "./themes";

const Main = () => {

    const styles = StyleSheet.create({
        container: {
            backgroundColor: theme.backgroundColors.main
        }
    })

    return (
        <View style={styles.container}>
            <AppBar />
            <RepositoryList />
        </View>
    )
}

export default Main;