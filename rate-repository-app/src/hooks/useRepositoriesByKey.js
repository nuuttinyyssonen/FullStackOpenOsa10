import { GET_REPOSITORIES_BY_KEY } from "../GraphQL/queries";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

const useRepositoriesByKey = (keyword) => {
    const [repositories, setRepositories] = useState();
    const { data, error, loading } = useQuery(GET_REPOSITORIES_BY_KEY, {
        variables: { searchKeyword: keyword }
    })

    const fetchReposByKey = async() => {
        if(error) {
            console.log(error)
        }
        if(data) {
            setRepositories(data.repositories)
        }
    }

    useEffect(() => {
        fetchReposByKey();
    }, [data, error, loading])

    return {repositories}
}

export default useRepositoriesByKey;