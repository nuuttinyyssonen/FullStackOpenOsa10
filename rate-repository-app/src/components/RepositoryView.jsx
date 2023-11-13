import { useParams } from "react-router-native"
import Text from "./Text"
import { Button, View, StyleSheet, Pressable, FlatList } from "react-native"
import * as Linking from 'expo-linking';
import RepositoryItem from "./RepositoryItem"
import theme from "./themes"
import useReviews from "../hooks/useReviews";
import { useEffect } from "react";
import ReviewItem from "./ReviewItem";
import useRepository from "../hooks/useRepository";

const RepositoryView = () => {

    const id = useParams().id;
    const reviews = useReviews(id);
    const {repository, loading} = useRepository(id);

    const styles = StyleSheet.create({
        BtnContainer: {
            backgroundColor: "white",
            display: "flex",
        },
        button: {
            color: "white",
            backgroundColor: theme.colors.languageTag,
            maxWidth: 1000,
            textAlign: "center",
            margin: 10,
            padding: 20,
        }
    })

    const linkToGitHub = async() => {
        await Linking.openURL(repository.url);
    }

    const ReviewNodes = reviews.reviews ? reviews.reviews.reviews.edges.map(edge => edge.node) : [];
    
    return (
        <View>
            {repository && <RepositoryItem 
                fullName={repository.fullName}
                description={repository.description}
                language={repository.language}
                stars={repository.stargazersCount}
                forks={repository.forksCount}
                reviews={repository.reviewCount}
                rating={repository.ratingAverage}
                image={repository.ownerAvatarUrl}
                id={repository.id}
            />}
            <View style={styles.BtnContainer}>
                <Pressable onPress={linkToGitHub}>
                    <Text style={styles.button}>Open in GitHub</Text>
                </Pressable>
            </View>
            <FlatList 
                data={ReviewNodes}
                renderItem={({ item }) => <ReviewItem review={item} />}
                keyExtractor={({ id }) => id}
            />
        </View>
    )

}

export default RepositoryView;