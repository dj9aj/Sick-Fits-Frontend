// Higher-order component will expose ApolloClient via a prop. This package is needed for SSR to work correctly.
import withApollo from 'next-with-apollo';
// apollo-boost bundles all the extra Apollo functionality into a single package 
import ApolloClient from 'apollo-boost';
import { endpoint } from '../config';
import { LOCAL_STATE_QUERY } from '../components/Cart';

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
    // local data
    clientState: {
      resolvers: {
        Mutation: {
          // The underscore will be garbage collected. The third argument is the cache destructured from the client.
          toggleCart(_, variables, { cache }) {
            // read the cartOpen value from the cache
            const { cartOpen } = cache.readQuery({
              query: LOCAL_STATE_QUERY,
            });
            // Write the cart State to the opposite
            const data = {
              data: { cartOpen: !cartOpen },
            };
            cache.writeData(data);
            return data;
          },
        },
      },
      defaults: {
        cartOpen: false,
      },
    },
  });
}
// Export withApollo and pass it a function, which will return the Apollo client. Client is then created in _app.js
export default withApollo(createClient);
