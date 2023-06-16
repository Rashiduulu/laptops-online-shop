import React from "react";
import Image from "next/image";
import Button from "./Button";
import { motion as m } from "framer-motion";
import Link from "next/link";

const Banner = () => {
  return (
    <m.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 mx-auto flex h-screen max-w-[1350px] items-center px-4"
    >
      <div className="space-y-1">
        <h1 className="mb-10 text-5xl font-semibold tracking-wide lg:text-6xl xl:text-7xl">
          <span className="block bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
            Магазин.
          </span>
          <span className="block">
            {" "}
            Лучший способ <br />
            купить понравившиеся <br />
            товары.
          </span>
          {/* <span className="block">управляемая ценностями</span> */}
        </h1>

        <div className="space-x-8">
          <Link href="/productPage">
            <Button title="Купить сейчас" />
          </Link>
          <Link href="/aboutUs" className="learn-more-link">
            Узнать больше
          </Link>
        </div>
      </div>

      <div className="relative hidden h-[400px] w-[500px] transition-all duration-500 md:inline lg:h-[500px] lg:w-[650px]">
        <Image
          src="/banner.png"
          alt="img"
          layout="fill"
          objectFit="contain"
          className="banner-img"
        />
      </div>
    </m.section>
  );
};

export default Banner;
