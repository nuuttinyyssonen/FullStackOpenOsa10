import { View, StyleSheet } from "react-native"
import Text from "./Text"
import theme from "./themes"

const ReviewItem = (props) => {

    const styles = StyleSheet.create({
        container: {
            paddingTop: 10,
            paddingBottom: 10,
            backgroundColor: "white",
            padding: 30
        },
        circle: {
            borderWidth: 1,
            borderColor: theme.colors.languageTag,
            width: 60,
            height: 60,
            borderRadius: 60 / 2,
            justifyContent: "center",
            alignItems: "center",
        },
        username: {
            fontSize: 20 
        },
        rating: {
            fontSize: 30,
            color: theme.colors.languageTag,
        },
        innerContainer: {
            display: "flex",
            flexDirection: "row",
            gap: 5
        },
        userDate: {
            flexDirection: "column"
        },
    })

    const timestamp = props.review.createdAt;
    const date = new Date(timestamp);

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const formattedDate = `${day}.${month}.${year}`;

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.circle}>
                    <Text style={styles.rating}>{props.review.rating}</Text> 
                </View>
                <View style={styles.userDate}>
                    <Text style={styles.username}>{props.review.user.username}</Text>
                    <Text style={styles.date}>{formattedDate}</Text>
                </View>
            </View>
            <Text style={styles.text}>{props.review.text}</Text>
        </View>
    )
}

export default ReviewItem;