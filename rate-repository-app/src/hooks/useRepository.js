import { useEffect, useState } from "react";
import { GET_REPOSITORY } from "../GraphQL/queries";
import { useQuery } from "@apollo/client";

const useRepository = (id) => {
    const [repository, setRepository] = useState();
    const { data, loading, error } = useQuery(GET_REPOSITORY, {
        variables: { id: id },
        fetchPolicy: 'cache-and-network'
    });

    const fetchRepo = async() => {
        if(error) {
            console.log("error", error)
        }

        if(data) {
            setRepository(data.repository)
        }
    }

    useEffect(() => {
        fetchRepo();
    }, [data, loading, error])

    return { repository, loading }
}

export default useRepository