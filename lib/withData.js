// Higher-order component will expose ApolloClient via a prop. This package is needed for SSR to work correctly.
import withApollo from 'next-with-apollo';
// apollo-boost bundles all the extra Apollo functionality into a single package 
import ApolloClient from 'apollo-boost';
import { endpoint } from '../config';

function createClient({ headers }) {
  return new ApolloClient({
    // Pass the backend URL endpoint
    uri: process.env.NODE_ENV === 'development' ? endpoint : endpoint,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include',
        },
        headers,
      });
    },
  });
}

export default withApollo(createClient);
