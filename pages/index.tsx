import { Tab } from "@headlessui/react";
import Link from "next/link";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Product from "@/components/Product";
import { GetServerSideProps } from "next";
import { fetchCategory } from "../utils/fetchCategory";
import { fetchProduct } from "../utils/fetchProduct";
import { motion as m } from "framer-motion";
import { getSession } from "next-auth/react";
import type { Session } from "next-auth";
import { TbChevronRight } from "react-icons/tb";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  categories: Category[];
  products: Product[];
  session: Session | null;
}

// Backend
export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const categories = await fetchCategory();
  const products = await fetchProduct();
  const session = await getSession(context);

  return {
    props: {
      categories,
      products,
      session,
    },
  };
};

export default function Home({ categories, products }: Props) {
  console.log(products);

  const showProducts = (categoryIndex: number) => {
    const selectedCategory = categories[categoryIndex];
    if (!selectedCategory) return [];

    return products
      .filter((product) => product.category?._ref === selectedCategory._id)
      .map((product) => <Product product={product} key={product._id} />);
  };

  return (
    <>
      <Header />
      <Banner />

      {/*<section className="w-full relative bg-blue-gray-900 min-h-screen rounded-t-lg">*/}
      {/*    <div className="mx-auto flex max-w-[1350px] items-center">*/}
      {/*        <div className="h-full w-full ">*/}
      {/*        <h1 className="text-white">*/}
      {/*            Sales*/}
      {/*        </h1>*/}
      {/*        </div>*/}
      {/*    </div>*/}
      {/*</section>*/}

      <section className="home-page relative min-h-screen  bg-gradient-to-r from-blue-50 to-green-50">
        <div>
          <h1 className="mb-10 pt-[6rem] text-center text-4xl font-medium tracking-wide text-[#272727] md:text-6xl">
            Новые акции
          </h1>
          <Tab.Group>
            <Tab.List className="flex justify-center">
              {categories.map((category) => {
                const selectedCategory = category.title;
                return (
                  <Tab
                    key={category._id}
                    id={category._id}
                    className={({ selected }) =>
                      `whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-light outline-none md:py-2 md:px-6 md:text-base ${
                        selected
                          ? "borderGradient text-zinc-100 bg-gradient-to-r from-blue-400 to-green-400 text-white"
                          : "border-b-2 border-[#417f11] text-[#272727]"
                      }`
                    }
                  >
                    {selectedCategory}
                  </Tab>
                );
              })}
            </Tab.List>

            <Tab.Panels className="mx-auto max-w-fit pt-10 pb-24 sm:px-4">
              {categories.map((category, index) => (
                <Tab.Panel key={category._id}>
                  <m.div
                    className="tabPanel flex flex-wrap justify-center gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    {showProducts(index)}
                  </m.div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>

      <section className="home-page relative min-h-screen bg-white">
        <h1 className="mb-2 pt-[6rem] text-center text-4xl font-medium tracking-wide text-[#272727] md:text-6xl">
          Статьи и новости
        </h1>
        <p className="mb-2 text-center text-[16px] text-[#828282] md:text-[22px]">
          Оставайтесь всегда в курсе событий
        </p>

        <Link
          href="/article"
          className="flex w-full items-center justify-center space-x-2 text-[#272727]"
        >
          <span className="text-[16px] hover:underline md:text-[20px]">
            Learn more
          </span>
          <TbChevronRight className="h-6 w-6" />
        </Link>

        <div className="container m-auto mt-[80px] max-w-[1350px] px-4">
          <div className="grid grid-cols-1 gap-3 pb-[90px] md:grid-cols-3">
            <div className="rounded-lg p-6">
              <Link href="/article">
                <img
                  src="https://assets-global.website-files.com/625816a3416990dd61391b9b/646a6f24fb9d4d54ccadc20a_Surface-Laptop-Studio-Mockups-004.jpeg"
                  alt="img"
                  className="rounded-lg"
                />
              </Link>
              <h1 className="mt-2 text-[20px] font-semibold text-[#272727]">
                Доставка в страны СНГ
              </h1>

              <p className="my-[8px] text-[#272727]">
                Мы рады сообщить нашим потенциальным заказчикам из стран СНГ,
                что теперь осуществляем доставку продукции в такие страны...
              </p>

              <Link
                href="/article"
                className="flex items-center space-x-2 text-[#272727]"
              >
                <span className="text-[16px] hover:underline ">Learn more</span>
                <TbChevronRight className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
