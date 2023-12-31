import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { Constants } from 'expo-constants';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: "http://10.214.1.15:4000",
});

const createApolloClient = (authStorage) => {
  const authLink = setContext(async (_, { headers }) => {
    try {
      const accessToken = await authStorage.getAccessTokens();
      return {
        headers: {
          ...headers,
          authorization: accessToken ? `Bearer ${accessToken}` : '',
        },
      };
    } catch (e) {
      console.log(e);
      return {
        headers,
      };
    }
  });
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;