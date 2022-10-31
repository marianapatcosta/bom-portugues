import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Merriweather&display=swap'
            rel='stylesheet'
          ></link>
          <link rel='manifest' href='/manifest.json' />
          <link rel='apple-touch-icon' href='/icon.png'></link>
          <meta name='theme-color' content='#231c69' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
