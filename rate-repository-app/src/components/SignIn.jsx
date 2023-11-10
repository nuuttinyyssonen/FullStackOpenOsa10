import Text from "./Text";
import FormikTextInput from "./FormikTextInput";
import { Formik } from "formik";
import { Pressable, View } from "react-native";
import { StyleSheet } from "react-native";
import theme from "./themes";
import * as yup from 'yup';
import useSignIn from "../hooks/useSignIn";
import AuthStorage from "../utils/authStorage";
import { useNavigate } from "react-router-native";

export const validationSchema = yup.object().shape({
    username: yup
        .string()
        .required('Username is required'),
    password: yup
        .string()
        .required('Password is required')
});

const SignIn = () => {

    const [signIn] = useSignIn();
    const navigate = useNavigate();

    const initialValues = {
        username: "",
        password: ""
    }

    const styles = StyleSheet.create({
        container: {
            display: "flex",
            justifyContent: "center"
        },
        signin: {
            backgroundColor: theme.colors.languageTag,
            margin: 10,
            padding: 20,
            borderRadius: 10
        },
        buttonText: {
            color: "white",
            textAlign: "center"
        }
    })

    const onSubmit = async(values) => {
        const { username, password } = values
        try {
            await signIn({ username, password })
            navigate("/");
        } catch(e) {
            console.log(e)
        }
        console.log("username", username)
        console.log("password", password)
    }


    return (
        <Formik  style={styles.container} initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({ handleSubmit }) => (
            <View>
                <FormikTextInput style={styles.input} name='username' placeholder='Username' />
                <FormikTextInput secureTextEntry={true} style={styles.input} name='password' placeholder='Password' />
                <Pressable style={styles.signin} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Sign in</Text>
                </Pressable>
            </View>
        )}
        </Formik>
    )
};

export default SignIn;