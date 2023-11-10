import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_REVIEWS } from "../GraphQL/queries";

const useReviews = (id) => {

    const [reviews, setReviews] = useState();
    const { data, error, loading } = useQuery(GET_REVIEWS, {
        variables: { id: id },
        fetchPolicy: 'cache-and-network'
    });

    const getReviews = async() => {
        if(error) {
            console.log("error", error)
        }

        if(data) {
            setReviews(data.repository)
        }
    }

    useEffect(() => {
        getReviews();
    }, [data, error, loading])

    return {reviews}
}

export default useReviews