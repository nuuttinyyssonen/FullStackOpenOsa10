import { Formik } from "formik";
import FormikTextInput from "./FormikTextInput";
import * as yup from 'yup';
import { useNavigate } from "react-router-native";
import { View, Pressable, StyleSheet } from "react-native";
import Text from "./Text";
import theme from "./themes";
import useCreateReview from "../hooks/useCreateReview";

const validationSchemaForReview = yup.object().shape({
    username: yup
        .string()
        .required('Username is required'),
    name: yup
        .string()
        .min(0, 'must be greater than 0')
        .max(100, 'must be lower than 100')
        .required('name is required'),
    rating: yup 
        .number()
        .required('rating is required')
}); 

const ReviewForm = () => {

    const navigate = useNavigate();
    const [createReview] = useCreateReview();

    const initialValues = {
        username: "",
        name: "",
        rating: 0,
        review: ""
    };

    const onSubmit = async(values) => {
        const { username, name, rating, text } = values;
        console.log(values)
        try {
            const data = await createReview({ username, name, rating, text })
            console.log(data.data.createReview.repositoryId)
            const id = data.data.createReview.repositoryId
            navigate(`/repository/${id}`)
        } catch(error) {
            console.error(error)
        }
        // navigate("/")
    };

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

    return (
        <Formik style={styles.container} initialValues={initialValues} validationSchema={validationSchemaForReview} onSubmit={onSubmit}>
            {({ handleSubmit }) => (
                <View>
                    <FormikTextInput name='username' placeholder='Repository owner name' />
                    <FormikTextInput name='name' placeholder='Repository name' />
                    <FormikTextInput name='rating' placeholder='rating between 0 and 100' />
                    <FormikTextInput multiline={true} name='text' placeholder='Review' />
                    <Pressable style={styles.signin} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>Create Review</Text>
                    </Pressable>
                </View>
            )}
        </Formik>
    );
};

export default ReviewForm;