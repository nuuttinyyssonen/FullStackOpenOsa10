import { GET_REPOSITORIES_BY_RATING } from "../GraphQL/queries";
import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";

const useRepositoriesByRating = (orderDirection) => {
    const { data, error, loading } = useQuery(GET_REPOSITORIES_BY_RATING, {
        variables: { orderBy: "RATING_AVERAGE", orderDirection: orderDirection }
    })
    const [ repositoriesByRating, setRepositoriesByRating ] = useState();

    const fetchReposByRating = () => {
        if(error) {
            console.log(error);
        }
        if(data) {
            setRepositoriesByRating(data.repositories);
        }
    }

    useEffect(() => {
        fetchReposByRating();
    }, [data, error, loading])

    return {repositoriesByRating};
}

export default useRepositoriesByRating;