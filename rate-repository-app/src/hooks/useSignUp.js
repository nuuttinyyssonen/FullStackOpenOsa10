import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../GraphQL/mutations";

const useSignUp = () => {

    const [mutate, result] = useMutation(CREATE_USER, {
        onError: (error) => {
            console.log(error.message)
            if (error.graphQLErrors) {
                error.graphQLErrors.forEach((graphQLError) => {
                  console.error('GraphQL Error:', graphQLError.message);
                });
            }
            if (error.networkError && error.networkError.result && error.networkError.result.errors) {
                error.networkError.result.errors.forEach((networkError) => {
                  console.error('Network Error:', networkError.message);
                });
            }
        }
    });

    const signUp = async({ username, password }) => {
        console.log("here", username)
        console.log(password)
        const user = {
            username: username,
            password: password
        }
        console.log(user)
        const data = await mutate({ variables: {
            user: {
                username: username,
                password: password
            }
        } })
        return data
    }

    return [signUp, result]
}

export default useSignUp