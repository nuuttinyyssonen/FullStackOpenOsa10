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

export const GET_REPOSITORIES_BY_DATE = gql`
    query repositoriesByDate($orderBy: AllRepositoriesOrderBy) {
        repositories(orderBy: $orderBy) {
            edges {
                node {
                    createdAt
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

export const GET_REPOSITORIES_BY_KEY = gql`
    query repositoriesByKey($searchKeyword: String) {
        repositories(searchKeyword: $searchKeyword) {
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

export const GET_REPOSITORIES_BY_RATING = gql`
    query repositoriesByAverage($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection) {
        repositories(orderBy: $orderBy, orderDirection: $orderDirection) {
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

export const ME = gql`
    query getCurrentUser($includeReviews: Boolean = false) {
        me {
            username
            reviews @include(if: $includeReviews){
                edges {
                    node {
                        rating
                        repository {
                            fullName
                            id
                        }
                        
                        id
                        text
                        createdAt
                    }
                }
            }
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