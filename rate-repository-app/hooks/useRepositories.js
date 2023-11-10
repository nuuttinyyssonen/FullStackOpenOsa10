import { useState, useEffect } from "react";
import { GET_REPOSITORIES } from '../GraphQL/queries';
import { useQuery } from '@apollo/client';

const useRepositories = () => {

    const [repositories, setRepositories] = useState();
    const [loadingData, setLoadingData] = useState(false);
    const { data, error, loading } = useQuery(GET_REPOSITORIES, {
        fetchPolicy: 'cache-and-network',
    });

    const fetchRepositories = async() => {
        setLoadingData(true);
        if(error) {
            console.log("error", error.graphQLErrors)
        }
        if(data) {
            setRepositories(data.repositories);
            setLoadingData(false);
        }
        
    }

    useEffect(() => {
        fetchRepositories();
    }, [data, loading, error])

    return { repositories, loading }

}

export default useRepositories