// Higher-order component will expose ApolloClient via a prop. This package is needed for SSR to work correctly.
import withApollo from 'next-with-apollo';
// apollo-boost bundles all the extra Apollo functionality into a single package 
import ApolloClient from 'apollo-boost';
import { endpoint } from '../config';

function createClient({ headers }) {
  return new ApolloClient({
    // Pass the backend URL endpoint
    uri: process.env.NODE_ENV === 'development' ? endpoint : endpoint,
    // On every request, include credentials. Can include cookies for logged in user.
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
// Export withApollo and pass it a function, which will return the Apollo client. Client is then created in _app.js
export default withApollo(createClient);
