import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/logo_transparent.png" sizes="any" />
      </Head>

      <body className="2xl:max-w-7xl mx-auto">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
