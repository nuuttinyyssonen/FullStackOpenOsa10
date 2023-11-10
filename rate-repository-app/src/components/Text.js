import { Text as NativeText, StyleSheet } from 'react-native';

import theme from './themes';

const styles = StyleSheet.create({
    text: {
        fontFamily: theme.fonts.fontFamily,
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
        fontWeight: theme.fontWeights.normal,
    },
    colorTextSecondary: {
        color: theme.colors.textSecondary,
    },
    colorPrimary: {
        color: theme.colors.primary,
    },
    fontSizeSubheading: {
        fontSize: theme.fontSizes.subheading,
    },
    fontWeightBold: {
        fontWeight: theme.fontWeights.bold,
    },
    NameText: {
        fontSize: theme.fontSizes.name
    },
    LanguageText: {
        color: theme.colors.languageTag
    }
});

const Text = ({ color, fontSize, fontWeight, style, ...props }) => {

    const textStyle = [
        styles.text,
        color === 'textSecondary' && styles.colorTextSecondary,
        color === 'primary' && styles.colorPrimary,
        color === 'language' && styles.LanguageText,
        fontSize === 'name' && styles.NameText,
        fontSize === 'subheading' && styles.fontSizeSubheading,
        fontWeight === 'bold' && styles.fontWeightBold,
        style
    ];

    return <NativeText style={textStyle} {...props}/>
}

export default Text;