import { useEffect, useState } from "react";
import { ME } from "../GraphQL/queries";
import { useQuery } from "@apollo/client";

const useSignOut = () => {
    const {data, error, loading} = useQuery(ME);
    const [user, setUser] = useState();

    const fetchMe = async() => {
        if(error) {
            console.log("error", error.graphQLErrors);
        }

        if(data) {
            console.log(data)
        }
    }

    useEffect(() => {
        fetchMe();
    },[data, error, loading])

    return { data, loading }

}

export default useSignOut;