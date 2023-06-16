import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Link from "next/link";
import { GetServerSideProps } from "next";
import Currency from "react-currency-formatter";
import Button from "@/components/Button";
import {
  TbCheck,
  TbShoppingCart,
  TbChevronDown,
  TbChevronUp,
  TbDeviceLaptop,
} from "react-icons/tb";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { fetchLineItems } from "@/utils/fetchLineItems";

interface Props {
  products: StripeProduct[];
}

function Success({ products }: Props) {
  console.log(products);
  const router = useRouter();
  const { session_id } = router.query;
  const [mounted, setMounted] = useState(false);
  const [showOrderSummary, setShowOrderSummary] = useState(false);
  const subtotal = products?.reduce(
    (acc, productPage) => acc + (productPage.price.unit_amount / 100 || 0),
    0
  );
  const { data: session } = useSession();

  useEffect(() => {
    setMounted(true);
  }, []);

  // showOrderSummary always true for desktop but only conditionally true for mobile
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const showOrderSummaryCondition = isTabletOrMobile ? showOrderSummary : true;

  const handleShowOrderSummary = () => {
    setShowOrderSummary(!showOrderSummary);
  };

  return (
    <div>
      <Head>
        <title>Спасибо! - Lshop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid grid-cols-1 lg:grid-cols-9">
        <section className="order-2 mx-auto max-w-xl pb-12 lg:col-span-5 lg:mx-0 lg:max-w-none lg:pr-16 lg:pt-16 xl:pl-16 2xl:pl-44">
          <Link href="/">
            <div className="flex">
              <h1 className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-3xl font-bold text-black text-transparent opacity-90">
                Lshop
              </h1>
            </div>
          </Link>

          <div className="my-8 ml-4 flex space-x-4 lg:ml-14 xl:ml-0">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-black">
              <TbCheck className="h-8 w-8" />
            </div>
            <div>
              <p className="text-sm text-gray-600">
                Заказ #{session_id?.slice(-5)}
              </p>
              <h4 className="text-lg">
                Спасибо {session ? session.user?.name?.split(" ")[0] : "Guest"}
              </h4>
            </div>
          </div>

          <div className="mx-4 divide-y divide-gray-300 rounded-md border border-gray-300 p-4 lg:ml-14">
            <div className="space-y-2 pb-3">
              <p>Ваш заказ подтвержден</p>
              <p className="text-sm text-gray-600">
                Мы приняли ваш заказ и готовим его к отправке. Возвращайтесь на
                эту страницу для получения обновленной информации о статусе
                вашей отправки.
              </p>
            </div>
            <div className="pt-3 text-sm">
              <p className="font-medium text-gray-600">
                Другой номер для отслеживания:
              </p>
              <p>CNB21441622</p>
            </div>
          </div>

          <div className="my-4 mx-4 space-y-2 rounded-md border border-gray-300 p-4 lg:ml-14">
            <p>Обновления заказов</p>
            <p className="text-sm text-gray-600">
              Вы будете получать обновления о доставке по электронной почте и
              текстовым сообщением.
            </p>
          </div>
          <div className="mx-4 flex flex-col items-center justify-between text-sm lg:ml-14 lg:flex-row">
            <p className="hidden lg:inline">Нужна помощь? Связаться с нами</p>
            {mounted && (
              <Button
                title="Продолжать покупку"
                onClick={() => router.push("/")}
                width={isTabletOrMobile ? "w-full" : undefined}
                padding="py-4"
              />
            )}
          </div>
        </section>

        {mounted && (
          <section className="overflow-y-scroll border-y border-l border-gray-300 bg-[#FAFAFA] lg:order-2 lg:col-span-4 lg:h-screen lg:border-y-0">
            <div
              className={`w-full ${
                showOrderSummaryCondition && "border-b"
              } border-gray-300 text-sm lg:hidden`}
            >
              <div className="mx-auto flex max-w-xl items-center justify-between px-4 py-6">
                <button
                  onClick={handleShowOrderSummary}
                  className="flex items-center space-x-2"
                >
                  <TbShoppingCart className="h-6 w-6" />
                  <p>Show order summary</p>
                  {showOrderSummaryCondition ? (
                    <TbChevronUp className="h-4 w-4" />
                  ) : (
                    <TbChevronDown className="h-4 w-4" />
                  )}
                </button>

                <p className="text-xl font-medium text-black">
                  <Currency quantity={subtotal + 20} />
                </p>
              </div>
            </div>

            {showOrderSummaryCondition && (
              <div className="mx-auto max-w-xl divide-y border-gray-300 px-4 py-4 lg:mx-0 lg:max-w-lg lg:px-10 lg:py-16">
                <div className="space-y-4 pb-4">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="flex items-center space-x-4 text-sm font-medium"
                    >
                      <div className="relative flex h-16 w-16 items-center justify-center rounded-md border border-gray-300 bg-[#F1F1F1] text-xs text-white">
                        <div className="relative animate-bounce rounded-md">
                          <TbDeviceLaptop className="h-12 w-12 text-gray-900" />
                        </div>
                        <div className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[gray] text-xs">
                          {product.quantity}
                        </div>
                      </div>
                      <p className="flex-1">{product.description}</p>
                      <p>
                        <Currency
                          quantity={product.price.unit_amount / 100}
                          currency={product.currency}
                        />
                      </p>
                    </div>
                  ))}
                </div>
                <div className="space-y-1 py-4">
                  <div className="flex justify-between text-sm">
                    <p className="text-[gray]">Итого</p>
                    <p className="font-medium">
                      <Currency quantity={subtotal} />
                    </p>
                  </div>
                  <div className="flex justify-between text-sm">
                    <p className="text-[gray]">Акция</p>
                    <p className="text-[gray]"></p>
                  </div>
                  <div className="flex justify-between text-sm">
                    <p className="text-[gray]">Доставка</p>
                    <p className="font-medium">
                      <Currency quantity={20} currency="USD" />
                    </p>
                  </div>
                </div>
                <div className="flex justify-between pt-4">
                  <p>Итого</p>
                  <p className="flex items-center gap-x-2 text-xs text-[gray]">
                    USD
                    <span className="text-xl font-medium text-black">
                      <Currency quantity={subtotal + 20} />
                    </span>
                  </p>
                </div>
              </div>
            )}
          </section>
        )}
      </main>
    </div>
  );
}

export default Success;

export const getServerSideProps: GetServerSideProps<Props> = async ({
  query,
}) => {
  const sessionId = query.session_id as string;
  const products = await fetchLineItems(sessionId);

  return {
    props: {
      products: products || null,
    },
  };
};
