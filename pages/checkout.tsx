import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from "@/redux/basketSlice";
import Button from "@/components/Button";
import CheckoutProductInBasket from "@/components/checkoutProductInBasket";
import Link from "next/link";
import Currency from "react-currency-formatter";
import { motion as m } from "framer-motion";
import Stripe from "stripe";
import getStripe from "@/utils/get-stripe";
import { fetchPostJSON } from "@/utils/api-helpers";
import Image from "next/image";
import Header from "@/components/Header";

const Checkout = () => {
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const [toGroupItems, setToGroupItems] = useState(
    {} as { [key: string]: Product[] }
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const groupsItems = items.reduce((results, item) => {
      (results[item._id] = results[item._id] || []).push(item);
      return results;
    }, {} as { [key: string]: Product[] });

    setToGroupItems(groupsItems);
  }, [items]);

  const checkOutCreateSession = async () => {
    setLoading(true);

    const checkOutSession: Stripe.Checkout.Session = await fetchPostJSON(
      "/api/checkout_session",
      {
        items: items,
      }
    );

    /// serrver error
    if ((checkOutSession as any).statusCode === 500) {
      console.error((checkOutSession as any).message);
      return;
    }

    /// rediirect to Checkout
    const stripe = await getStripe();
    const { error } = await stripe!.redirectToCheckout({
      sessionId: checkOutSession.id,
    });
    console.warn(error.message);
    setLoading(false);
  };

  return (
    <div>
      <Header />
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto min-h-screen max-w-5xl p-4 pb-16 pt-12"
      >
        <div>
          <div className="flex flex-col gap-y-1 pb-5">
            <h1 className="text-xl font-semibold text-gray-900 lg:text-3xl">
              {items.length > 0 ? "Ваша корзинка" : "Корзинка пустая"}
            </h1>
            <p className="text-gray-900">Бесплатные возвраты</p>
          </div>

          {items.length === 0 && (
            <Link href="/">
              <Button title="Продолжать покупку" />
            </Link>
          )}
          {items.length === 0 && (
            <Image
              src="/empty-cart.jpeg"
              alt="img"
              layout="fill"
              objectFit="contain"
              className="empty-cart-img"
            />
          )}
        </div>
        {items.length > 0 && (
          <div>
            {Object.entries(toGroupItems).map(([key, items]) => (
                <CheckoutProductInBasket key={key} items={items} id={key} product={items[0]} />
            ))}


            <div className="divide-y divide-gray-200">
              <div className="pt-5 pb-5">
                <div className="flex justify-between">
                  <p>Итого</p>
                  <p>
                    <Currency quantity={basketTotal} currency="USD" />
                  </p>
                </div>
                <div className="flex justify-between">
                  <p>Доставка</p>
                  <p>Бесплатная</p>
                </div>
              </div>
              <div className="flex justify-between pt-5 pb-5 text-xl font-semibold">
                <h3>К оплате</h3>
                <h3>
                  <Currency quantity={basketTotal} currency="USD" />
                </h3>
              </div>
              <div className="pt-5 pb-5">
                <h3 className="pb-5 text-xl font-semibold">
                  Как бы вы хотели оплатить ?
                </h3>

                <div className="flex flex-col gap-3 md:flex-row">
                  <div className="flex flex-1 flex-col items-center rounded-2xl bg-gray-200 p-7 py-10 text-center ">
                    <h3 className="flex flex-col pt-4 pb-3">
                      <span>Платить ежемесячно</span>
                      <span>with Card</span>
                      <span>
                        $229 в месяц под 0% годовых
                        <sup className="-top-1">◊</sup>
                      </span>
                    </h3>
                    <Button title="Рассчитывайтесь ежемесячными платежами по Card" />
                    <p className="mt-3 max-w-[238px] text-[14px]">
                      Сумма, подлежащая оплате сегодня, составляет 0,00 долларов
                      США, включая соответствующие товары по полной цене,
                      первоначальный взнос, доставку.
                    </p>
                  </div>

                  <div className="flex flex-1 flex-col items-center rounded-2xl bg-gray-200 p-7 py-10 text-center md:order-2">
                    <h3 className="mb-5 flex flex-col pt-4 text-xl font-semibold">
                      Оплатить в полном объеме
                      <span>
                        <Currency quantity={basketTotal} currency="USD" />
                      </span>
                    </h3>
                    <Button
                      noIcon
                      title="Оплатить"
                      width="w-full"
                      onClick={checkOutCreateSession}
                      loading={loading}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </m.div>
    </div>
  );
};

export default Checkout;
