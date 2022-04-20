/* eslint-disable @next/next/no-sync-scripts */
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";


class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head/>
          {/* <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></Script>
        </Head> */}
        <body className="hero text-white w-full min-h-screen  ">
          <Main />
          <NextScript />
          
        </body>
      </Html>
    );
  }
}

export default MyDocument;
