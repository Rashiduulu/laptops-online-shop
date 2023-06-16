import React from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity";
import { GetServerSideProps } from "next";
import { fetchCatalog } from "@/utils/fetchCatalog";
import { TbChevronRight, TbHome2, TbShoppingCart } from "react-icons/tb";
import { motion as m } from "framer-motion";
import Header from "@/components/Header";

interface Props {
  catalogs: Catalog[];
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const catalogs = await fetchCatalog();

  return {
    props: {
      catalogs,
    },
  };
};

function CatalogPage({ catalogs }: Props) {
  return (
    <div>
      <Header />
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="container m-auto min-h-screen max-w-[1350px] px-4"
      >
        <div className="mt-8 flex items-center">
          <Link href="/">
            <TbHome2 />
          </Link>
          <TbChevronRight />
          <p className="mr-2 text-sm">Каталог</p>
        </div>
        <h1 className="mb-12 mt-8 space-y-8 text-center text-3xl font-semibold tracking-wide lg:text-4xl xl:text-5xl">
        Каталог
        </h1>

        <div className="mb-[80px] grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {catalogs.map((catalog) => (
            <div key={catalog._id}>
              <Link href={`/catalogList/${catalog.slug.current}`}>
                <div className="flex h-[348px] cursor-pointer flex-col justify-between rounded-lg bg-gray-100 pr-[30px] pl-[30px] pt-[15px] pb-[25px] shadow-green-800 transition hover:bg-gray-200">
                  <div className="md:h-42 relative h-52 w-full">
                    <Image
                      src={urlFor(catalog.image).url()}
                      layout="fill"
                      objectFit="contain"
                      alt="img"
                      className="object-contain"
                    />
                  </div>
                  <div className="flex items-center justify-between ">
                    <h4 className="text-[18px] font-semibold lg:text-[22px]">
                      {catalog.title}
                    </h4>

                    <div className="flex cursor-pointer items-center text-blue-900 hover:underline">
                      <p className="text-[16px] lg:text-[18px]">follow</p>
                      <TbChevronRight />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </m.div>
    </div>
  );
}

export default CatalogPage;
