import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../GraphQL/mutations";

const useCreateReview = () => {
    const [mutate, result] = useMutation(CREATE_REVIEW);
    const createReview = async({ username, name, rating, text }) => {
        const ratingInt = parseInt(rating)
        const review = {
            ownerName: username,
            rating: ratingInt,
            repositoryName: name,
            text: text
        }
        console.log(review)
        const data = await mutate({ variables: { review } })
        return data
    }

    return [createReview, result]
}

export default useCreateReview;