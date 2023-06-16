import React from "react";
import Header from "@/components/Header";
import Link from "next/link";
import { TbHome2, TbChevronRight } from "react-icons/tb";
import { idText } from "typescript";


function article() {
  return (
    <div>
      <Header />

      <div className="container m-auto max-w-[1350px] px-4">
        <div className="mt-4 flex items-center">
          <Link href="/">
            <TbHome2 />
          </Link>
          <TbChevronRight />
          <p className="mr-2 text-sm">Блог</p>
        </div>

        <h1 className="lg:[48px] relative mt-8 text-center text-[32px] md:text-[38px]">
        Блог
          {/* <img
            className="absolute left-[2%] top-0 -z-10 m-auto h-auto w-[100px] animate-pulse"
            src="https://img.freepik.com/free-vector/open-laptop-icon-cartoon-illustration_107791-4113.jpg?w=740&t=st=1686467095~exp=1686467695~hmac=551a69ef06b0666e300aa52eeb7065aaf5019bfe52c31016da91e130c17c11a8"
            alt="img"
          /> */}
        </h1>

        <h4 className="mb-12 text-center text-[20px] text-[#828282]">
          Свежие новости интересные статьи об apple
        </h4>

        <div className="mb-[90px] grid grid-cols-1 gap-3 md:grid-cols-2">
          <div>
            <Link href={`/article/${idText}`}>
              <img
                src="https://assets-global.website-files.com/625816a3416990dd61391b9b/646a6f24fb9d4d54ccadc20a_Surface-Laptop-Studio-Mockups-004.jpeg"
                alt="img"
              />
            </Link>
            <h1 className="mt-2 text-[20px] font-medium">
              Доставка в страны СНГ
            </h1>

            <p className="my-[8px]">
              Мы рады сообщить нашим потенциальным заказчикам из стран СНГ, что
              теперь осуществляем доставку продукции в такие страны...
            </p>

            <Link
              href="/article"
              className="flex items-center space-x-2 text-blue-500"
            >
              <span className="text-[16px] hover:underline ">Узнать больше</span>
              <TbChevronRight className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default article;
