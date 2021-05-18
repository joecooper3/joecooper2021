import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Joe Cooper</title>
        <meta
          name="description"
          content="Joe Cooper is a creative technologist in the New York City area"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Joe Cooper</h1>
      </main>
    </div>
  );
}
