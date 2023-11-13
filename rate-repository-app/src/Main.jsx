import { StyleSheet, View } from "react-native";
import RepositoryList from "./components/RepositoryList";
import AppBar from "./components/AppBar";
import theme from "./components/themes";
import SignIn from "./components/SignIn";
import { Route, Routes } from "react-router-native";
import RepositoryView from './components/RepositoryView';
import ReviewForm from "./components/ReviewForm";
import SignUpForm from "./components/SignUpForm";
import ReviewPage from "./components/ReviewPage";

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
                <Route path="/signup" element={<SignUpForm/>} />
                <Route path="/review" element={<ReviewForm />} />
                <Route path='/repository/:id' element={<RepositoryView />}/>
                <Route path="/reviewpage" element={<ReviewPage />} />
            </Routes>
        </View>
    )
}

export default Main;