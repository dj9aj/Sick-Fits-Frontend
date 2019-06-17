import App, { Container } from 'next/app'; // import the App and Container component from next.js
import Page from '../components/Page';
import { ApolloProvider } from 'react-apollo';
import withData from '../lib/withData';
const next = require('next');

// Extending App provides MyApp with next.js functionality
class MyApp extends App {
  // getInitialProps is a next.js lifecycle method that runs before the first render
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    // If component has props
    if (Component.getInitialProps) {
      // getInitialProps will crawl the page for any queries or mutations that need to be fetched.
      // They need to be fired off and resolved before the page can be rendered.
      pageProps = await Component.getInitialProps(ctx);
    }
    // this exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }
  render() {
    const { Component, apollo, pageProps } = this.props;

    return (
      <Container>
        {/* This will expose the Apollo Client to the application */}
        <ApolloProvider client={apollo}>
          <Page>
            {/* Component will be whichever page is visited eg. Sell.js */}
            <Component {...pageProps} />
          </Page>
        </ApolloProvider>
      </Container>
    );
  }
}
// withData is a higher order component. This will make the apollo client accessible via props.
export default withData(MyApp);
