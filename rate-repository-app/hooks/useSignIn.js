import { CREATE_USER } from "../GraphQL/mutations";
import { useMutation } from "@apollo/client";
import AuthStorageContext from "../AuthStorageContext";
import { useContext } from "react";
import { useApolloClient } from "@apollo/client";

const useSignIn = () => {
    const authStorage = useContext(AuthStorageContext);
    const apolloClient = useApolloClient();

    const [mutate, result] = useMutation(CREATE_USER);

    const signIn = async ({ username, password }) => {
        const credentials = {
            username: username,
            password: password
        }
        const resultQuery = await mutate({ variables: { credentials } })
        await authStorage.setAccessToken(resultQuery.data.authenticate.accessToken)
        apolloClient.resetStore();
        return resultQuery
    }

    return [signIn, result];
}
export default useSignIn;