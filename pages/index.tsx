import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Link Shortener</title>
        <meta
          name="description"
          content="A link shortener for Leland's Computer Science Club."
        />
      </Head>
      <main className={"flex items-center justify-center w-screen h-screen"}>
        <p className="text-2xl">
          Link shortener for{" "}
          <a
            className="text-blue-600 font-semibold underline"
            href="https:lelandcs.vercel.app"
          >
            Leland CS Club
          </a>
        </p>
      </main>
    </div>
  );
}
