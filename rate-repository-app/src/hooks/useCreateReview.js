import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../GraphQL/mutations";
import { ME } from "../GraphQL/queries";

const useCreateReview = () => {
    const [mutate, result] = useMutation(CREATE_REVIEW, {
        refetchQueries: [
            {
                query: ME,
                variables: { includeReviews: true }
            }
        ]
    });
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