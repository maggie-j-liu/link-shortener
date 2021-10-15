import prisma from "@/lib/prisma";
import { GetServerSideProps } from "next";
export default function Url() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  let params = context.params?.url;
  console.log(params);
  if (!params) {
    return {
      notFound: true,
    };
  }
  if (typeof params === "string") {
    params = [params];
  }
  const key = params.shift();
  const data = await prisma.link.findUnique({
    where: {
      slug: key,
    },
  });
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    redirect: {
      destination: data.url + (params.length ? "/" + params.join("/") : ""),
      permanent: false,
    },
  };
};
