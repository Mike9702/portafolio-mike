// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Agrega el enlace al favicon */}
          <title>Mike Portfolio</title>
          <link rel="favicon" href="/favicon.ico"/>
          {/* Otros metadatos, estilos, etc. */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;