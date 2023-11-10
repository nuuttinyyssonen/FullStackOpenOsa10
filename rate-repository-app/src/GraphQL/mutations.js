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

export const CREATE_REVIEW = gql`
    mutation Mutation($review: CreateReviewInput) {
        createReview(review: $review) {
            repositoryId
        }
    }
`;