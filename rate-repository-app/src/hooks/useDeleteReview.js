import { DELETE_REVIEW } from "../GraphQL/mutations";
import { ME } from '../GraphQL/queries'
import { useMutation, useQuery } from "@apollo/client";

const useDeleteReview = () => {
    const [mutate, result] = useMutation(DELETE_REVIEW, {
        refetchQueries: [
            {
                query: ME,
                variables: { includeReviews: true }
            }
        ]
    })

    const deleteReview = async(id) => {
        await mutate({ variables: { "deleteReviewId": id } })
    }   

    return [deleteReview];
}
export default useDeleteReview;