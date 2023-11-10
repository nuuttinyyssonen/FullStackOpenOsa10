import { gql } from "@apollo/client";

export const CREATE_USER = gql`
    mutation authenticate($credentials: AuthenticateInput) {
        authenticate(
            credentials: $credentials
        ) {
            accessToken
        }
    }
`