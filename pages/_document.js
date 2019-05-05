import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

// Extending Document provides MyDocument with added functionality from Next.js custom Document
export default class MyDocument extends Document {
  // getInitialProps will render on the server first before the app renders in the browser.
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    // Render the app. Iterate through every component along the tree, check if any styles need to be collected
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    // Apply collected styles
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>{this.props.styleTags}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
