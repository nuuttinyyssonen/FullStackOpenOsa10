import { TextInput as NativeTextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({});

const TextInput = ({ style, error, ...props }) => {
    const TextInputStyle = [style];

    return <NativeTextInput style={TextInputStyle} {...props}/>;
}

export default TextInput;