import Document, { Html, Head, Main, NextScript } from 'next/document';
import styled, { ServerStyleSheet } from 'styled-components';
import { NextPage } from "next";

const StyledBody = styled.body`
  background: black;
  color: white;
`

class AppDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: NextPage) => (props: any) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="theme-color" content="#000"/>
          <meta charSet="utf-8" />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <title>Shoptet Demo</title>
        </Head>
        <body className="text-white bg-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;