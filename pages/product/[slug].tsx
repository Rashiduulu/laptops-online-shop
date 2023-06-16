import React, { useEffect, useState } from "react";
import { motion as m } from "framer-motion";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import { urlFor } from "@/sanity";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import {
  addToBasket,
  selectBasketItems,
  selectBasketTotal,
} from "@/redux/basketSlice";
import { sanityClient } from "../../sanity";
import Header from "@/components/Header";
import Link from "next/link";
import { TbChevronRight, TbHome2 } from "react-icons/tb";
import Button from "@/components/Button";
import Slider from "react-slick";

interface Props {
  product: Product;
  reviews: Review[];
  images: Image[];
  price: number;
}

interface Review {
  _id: string;
  name: string;
  comment: string;
}

const SlugPage = ({ product, reviews }: Props) => {
  const settings = {
    // Customize the settings as per your requirements
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    adaptiveHeight: true,
  };

  const dispatch = useDispatch();
  const addItemToBasket = () => {
    dispatch(addToBasket(product));
    toast.success(`${product.title} добавлен в корзину`, {
      position: "bottom-center",
    });
  };

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
          <Link href="/productPage" className="hover:underline">
            <p className="text-sm">Product</p>
          </Link>
          <TbChevronRight />
          <p className="text-sm capitalize">{product.title}</p>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="mt-8">
            <Slider {...settings}>
              {product.image.map((image) => (
                <div key={image._key} className="outline-none">
                  <Image
                    src={urlFor(image.asset._ref).url()}
                    alt="img"
                    objectFit="contain"
                    width={400}
                    height={400}
                    className="product-slug-img"
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="mt-10 flex space-x-10">
            <div className="">
              <h1 className="text-[26px] font-medium">{product.title}</h1>

              <div className="mb-2 mt-4">⭐⭐⭐⭐⭐(4.2) 420 просмотр</div>

              <div className="my-4">
                <h3 className="text-[24px]">Цена: ${product.price}</h3>
              </div>
              <div className="flex items-center space-x-4">
                <Button
                  onClick={addItemToBasket}
                  title="Добавь в корзинку и покупай"
                />
              </div>

              <div className="mt-[30px] divide-y divide-gray-200">
                <h4 className="mb-[14px] text-[20px] font-semibold">
                  Процессор:
                  <span className="font-normal">
                    Intel Core i5 - 10300H 2.5 - 4.5 ГГц
                  </span>
                </h4>
                <h4 className="mb-[14px] text-[20px] font-semibold">
                  Оперативная память
                  <span className="font-normal">8192 Мб DDR4.</span>
                </h4>
                <h4 className="mb-[14px] text-[20px] font-semibold">
                  Жесткий диск SSD : <span className="font-normal">256 Гб</span>
                </h4>
                <h4 className="mb-[14px] text-[20px] font-semibold">
                  Дисплей
                  <span className="font-normal">15.6 Full HD 1920x1080</span>
                </h4>
                <h4 className="mb-[14px] text-[20px] font-semibold">
                  Видеокарта
                  <span className="font-normal">
                    nVidia GeForce GTX 1650 4096 Мб
                  </span>
                </h4>
                <h4 className="mb-[14px] text-[20px] font-semibold">
                  ОС
                  <span className="font-normal">
                    Microsoft Windows 10 Home.
                  </span>
                </h4>
                <h4 className="mb-[14px] text-[20px] font-semibold">
                  Цвет : <span className="font-normal">Черно-синий</span>
                </h4>
                <h4 className="mb-[14px] text-[20px] font-semibold">
                  Вес : <span className="font-normal">2.2 кг</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </m.div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug
  }`;
  const products = await sanityClient.fetch(query);

  const paths = products.map((product: any) => ({
    params: { slug: product.slug.current },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug;
  const productQuery = `*[_type == "product" && slug.current == $slug][0] {
    _id,
    title,
    image,
    price
  }`;
  const product = await sanityClient.fetch(productQuery, { slug });

  const reviewsQuery = `*[_type == "review" && product._ref == $productId] {
    _id,
    name,
    comment
  }`;
  const reviews = await sanityClient.fetch(reviewsQuery, {
    productId: product._id,
  });

  return {
    props: {
      product,
      reviews,
    },
  };
};

export default SlugPage;
