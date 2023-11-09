import { Platform } from "react-native";

const theme = {
    backgroundColors: {
        navBar: "#24292e",
        main: "#e1e4e8"
    },
    colors: {
        languageTag: "#0366d6",
        error: "#d73a4a",
        textPrimary: '#24292e',
        textSecondary: '#586069',
        primary: '#0366d6',
    },
    fontSizes: {
        name: 20,
        body: 14,
        subheading: 16,
    },
    fontWeights: {
        normal: '400',
        bold: '700',
    },
    fonts: {
        fontFamily: Platform.select({
            android: 'Robot',
            ios: 'Arial',
            default: 'System'
        })
    }
}

export default theme;