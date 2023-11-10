import { View, Image, StyleSheet, Dimensions, Pressable} from "react-native";
import {useNavigate} from 'react-router-native'
import theme from "./themes";
import Text from "./Text";


const deviceWidth = Dimensions.get("window").width;

const RepositoryItem = ({ fullName, description, language, stars, forks, reviews, rating, image, id, url }) => {

    const navigate = useNavigate();

    const styles = StyleSheet.create({
        container: {
            display: "flex",
            padding: 20,
            width: deviceWidth,
            maxWidth: deviceWidth,
            backgroundColor: "white"
        },
        image: {
            width: 50,
            height: 50,
            margin: 10,
            marginTop: 20,
            borderRadius: 10
        },
        header: {
            flexDirection: "row",
        },
        innerHeader: {
            paddingTop: 10
        },
        languageContainer: {
            flexDirection: "column"
        },
        description: {
            width: deviceWidth / 1.4
        },
        fullName: {
            fontSize: 20
        },
        languageContainer: {
            width: 100,
            height: 40,
        },
        language: {
            color: "white",
            backgroundColor: theme.colors.languageTag,
            padding: 5,
            maxWidth: 80,
        },
        rating: {
            flexDirection: "row",
            justifyContent: "space-between"
        },
        innerRating: {
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }
    })

    const starsDivided = stars/1000;
    const forksDivided = forks/1000;

    const navigateToRepo = (id) => {
        navigate(`/repository/${id}`)
    }

    return (
        <Pressable onPress={() => navigateToRepo(id)}>
        <View style={styles.container} testID="repositoryItem">
            <View style={styles.header}>
                <Image style={styles.image} source={{uri: image}}/>
                <View style={styles.innerHeader}>  
                    <Text style={styles.fullName}>{fullName}</Text>
                    <Text style={styles.description}>{description}</Text>
                    <View style={styles.languageContainer}>
                        <Text style={styles.language}>{language}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.rating}>
                <View style={styles.innerRating}>
                    <Text>{stars > 1000 && starsDivided.toFixed(1)}K</Text>
                    <Text>Stars</Text>
                </View>
                <View style={styles.innerRating}>
                    <Text>{forks > 1000 && forksDivided.toFixed(1)}K</Text>
                    <Text>Forks</Text>
                </View>
                <View style={styles.innerRating}>
                    <Text>{reviews}</Text>
                    <Text>Reviews</Text>
                </View>
                <View style={styles.innerRating}>
                    <Text>{rating}</Text>
                    <Text>Rating</Text>
                </View>
            </View>
        </View>
        </Pressable>
    )
}

export default RepositoryItem;