import { View, StyleSheet, Button, Pressable, Alert } from "react-native"
import Text from "./Text"
import theme from "./themes"
import useDeleteReview from "../hooks/useDeleteReview"
import { useNavigate } from 'react-router-native';

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
        delete: {
            width: 150,
            textAlign: "center",
            borderWidth: 1,
            borderColor: theme.colors.error,
            backgroundColor: theme.colors.error,
            color: "white",
            padding: 10
        },
        view: {
            width: 150,
            textAlign: "center",
            borderWidth: 1,
            borderColor: theme.colors.languageTag,
            backgroundColor:theme.colors.languageTag,
            color: "white",
            padding: 10
        },
        buttons: {
            display: "flex",
            flexDirection: "row",
            gap: 20
        }
    })
    const [deleteReview] = useDeleteReview(); 
    const navigate = useNavigate();

    const timestamp = props.review.createdAt;
    const date = new Date(timestamp);

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const formattedDate = `${day}.${month}.${year}`;

    const handleDeleteReview = async () => {
        const userConfirmed = await new Promise((resolve) => {
          Alert.alert(
            'Delete Review',
            'Do you want to delete this review?',
            [
              {
                text: 'Cancel',
                onPress: () => resolve(false),
                style: 'cancel',
              },
              {
                text: 'OK',
                onPress: () => resolve(true),
              },
            ],
            { cancelable: false }
          );
        });
      
        if (userConfirmed) {
          try {
            await deleteReview(props.review.id);
          } catch (error) {
            console.log(error);
          }
        }
    };

    const navigateToRepo = (id) => {
        navigate(`/repository/${id}`)
    }

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.circle}>
                    <Text style={styles.rating}>{props.review.rating}</Text> 
                </View>
                <View style={styles.userDate}>
                    {props.review.user ? <Text style={styles.username}>{props.review.user.username}</Text> : <Text style={styles.username}>{props.review.repository.fullName}</Text>}
                    <Text style={styles.date}>{formattedDate}</Text>
                </View>
            </View>
            <Text style={styles.text}>{props.review.text}</Text>
            {props.isMyReviewPage && <View style={styles.buttons}>
                <Pressable onPress={() => navigateToRepo(props.review.repository.id)}>
                    <Text style={styles.view}>View Repository</Text>
                </Pressable>
                <Pressable onPress={handleDeleteReview}>
                    <Text style={styles.delete}>Delete Review</Text>
                </Pressable>
            </View>}
        </View>
    )
}

export default ReviewItem;