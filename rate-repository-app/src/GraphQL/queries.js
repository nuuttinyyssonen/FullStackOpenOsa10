import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
    query {
        repositories {
            edges {
                node {
                    fullName
                    description
                    stargazersCount
                    forksCount
                    reviewCount
                    ratingAverage
                    ownerAvatarUrl
                    language
                    id
                    url
                }
            }
        }
    }
`

export const GET_REPOSITORY = gql`
    query repository($id: ID!) {
        repository(id: $id) {
            fullName
            description
            stargazersCount
            forksCount
            reviewCount
            ratingAverage
            ownerAvatarUrl
            language
            id
            url
        }
    }
`

export const ME = gql`
    query {
        me {
            username
        }
    }
`

export const GET_REVIEWS = gql`
    query Reviews($id: ID!) {
        repository(id: $id) {
            id
            fullName
            reviews {
                edges {
                  node {
                    id
                    text
                    rating
                    createdAt
                    user {
                      id
                      username
                    }
                  }
                }
            }
        }
    }
`