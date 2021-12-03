import prisma from "@/lib/prisma";
import { Link as LinkType } from "@prisma/client";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";

export default function Home({ links }: { links: LinkType[] }) {
  return (
    <div>
      <Head>
        <title>Link Shortener</title>
        <meta
          name="description"
          content="A link shortener for Leland's Computer Science Club."
        />
      </Head>
      <main className={"flex flex-col items-center py-16"}>
        <p className="text-2xl mb-4">
          Link shortener for{" "}
          <a
            className="text-blue-600 font-semibold underline"
            href="https:lelandcs.vercel.app"
          >
            Leland CS Club
          </a>
        </p>
        <div className="px-8">
          <div className="max-w-2xl w-full flex flex-col divide-y-2">
            <div className="py-2 flex items-center text-center text-sm uppercase bg-gray-100 rounded-md">
              <div className="w-1/3">Route</div>
              <div className="w-2/3">URL</div>
            </div>
            {links.map((link) => (
              <div key={link.slug} className="py-2 flex items-center">
                <div className="w-1/3">
                  <Link href={link.slug}>
                    <a className="font-medium text-blue-500">{link.slug}</a>
                  </Link>
                </div>
                <div className="w-2/3 break-all">
                  <a
                    className="text-blue-500"
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.url}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const links = await prisma.link.findMany({
    where: {
      public: true,
    },
  });
  return {
    props: {
      links,
    },
  };
};
