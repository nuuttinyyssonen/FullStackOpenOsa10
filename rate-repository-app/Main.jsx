import { StyleSheet, View } from "react-native";
import RepositoryList from "./components/RepositoryList";
import AppBar from "./components/AppBar";
import theme from "./components/themes";
import SignIn from "./components/SignIn";
import { Route, Routes } from "react-router-native";

const Main = () => {

    const styles = StyleSheet.create({
        container: {
            backgroundColor: theme.backgroundColors.main
        }
    })

    return (
        <View style={styles.container}>
            <AppBar />
            <Routes>
                <Route path="/" element={<RepositoryList />} />
                <Route path="/signin" element={<SignIn/>}/>
            </Routes>
        </View>
    )
}

export default Main;