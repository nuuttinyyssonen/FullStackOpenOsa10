import * as yup from 'yup';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import { View, StyleSheet, Pressable } from 'react-native';
import theme from './themes';
import useSignUp from '../hooks/useSignUp';

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .min(5, 'Username length must be greater than 4')
        .max(30, 'Username length must be less than 30')
        .required('Username is required'),
    password: yup
        .string()
        .min(5, 'Password length must be greater than 4')
        .max(30, 'Password length must be less than 30')
        .required('Password is required'),
    passwordConfirm: yup
        .string()
        .oneOf([yup.ref('password'), null])
        .required('Password confirm is required')
});

const SignUpForm = () => {

    const [signUp, result] = useSignUp();

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

    const initialValues = {
        username: "",
        password: "",
        passwordConfirm: ""
    }

    const onSubmit = async(values) => {
        try {
            const { username, password } = values;
            await signUp({username, password});
        } catch(e) {
            console.log(e.message)
        }
    }

    return (
        <Formik style={styles.container} initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {({ handleSubmit }) => (
                <View>
                    <FormikTextInput style={styles.input} name='username' placeholder='Username' />
                    <FormikTextInput secureTextEntry={true} style={styles.input} name='password' placeholder='Password' />
                    <FormikTextInput secureTextEntry={true} style={styles.input} name='passwordConfirm' placeholder='Password Confirm' />
                    <Pressable style={styles.signin} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>Sign in</Text>
                    </Pressable>
                </View>
            )} 
        </Formik>
    )
}

export default SignUpForm;