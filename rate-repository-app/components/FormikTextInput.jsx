import { StyleSheet, View } from "react-native";
import { useField } from 'formik';
import theme from "./themes";
import TextInput from "./TextInput";
import Text from "./Text";

const styles = StyleSheet.create({
    errorText: {
        color: theme.colors.error,
        paddingLeft: 10
    },
    input: {
        borderWidth: 1,
        margin: 10,
        height: 40,
        padding: 10
    },
    inputError: {
        borderWidth: 1,
        margin: 10,
        height: 40,
        padding: 10,
        borderColor: theme.colors.error
    },
});

const FormikTextInput = ({ name, ...props }) => {
    const [field, meta, helpers] = useField(name);
    const showError = meta.touched && meta.error;

    return (
        <View>
            <TextInput
                onChangeText={value => helpers.setValue(value)}
                onBlur={() => helpers.setTouched(true)}
                value={field.value}
                error={showError}
                {...props}
                style={showError ? styles.inputError : styles.input}
            />
            
            {showError && <Text style={styles.errorText}>{meta.error}</Text>}
        </View>
    )
}

export default FormikTextInput;