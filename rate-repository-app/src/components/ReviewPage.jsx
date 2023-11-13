import Text from "./Text";
import theme from "./themes";
import { FlatList, View } from "react-native";
import useMyReviews from "../hooks/useMyReviews";
import ReviewItem from "./ReviewItem";

const ReviewPage = () => {
    const myReviews = useMyReviews();
    const myReviewNodes = myReviews.myReviews ? myReviews.myReviews.edges.map(edge => edge.node) : [];

    return(
        <View>
            <FlatList 
                data={myReviewNodes}
                renderItem={({ item }) => <ReviewItem isMyReviewPage={true} review={item} />}
                keyExtractor={({ id }) => id}
            />
        </View>
    )
}

export default ReviewPage;