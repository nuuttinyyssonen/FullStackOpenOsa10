import { ME } from '../GraphQL/queries';
import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';

const useMyReviews = () => {

    const [myReviews, setMyReviews] = useState();
    const { data, error, loading } = useQuery(ME, {
        variables: { includeReviews: true }
    });

    const fetchMyReviews = () => {
        if(error) {
            console.log(error)
        }
        if(data) {
            setMyReviews(data.me.reviews)
        }
    }

    useEffect(() => {
        fetchMyReviews();
    }, [data, error, loading])

    return {myReviews}
}

export default useMyReviews;