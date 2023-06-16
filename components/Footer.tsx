import React from "react";
import Link from "next/link";
import {
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandYoutube,
  TbLocation,
  TbMail,
  TbMenu,
  TbPhone,
} from "react-icons/tb";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  const navLink = [
    {
      name: "Продукты",
      link: "/productPage",
    },
    {
      name: "О нас",
      link: "/aboutUs",
    },
    {
      name: "Гарантия",
      link: "/guarantee",
    },
    {
      name: "Статьи",
      link: "/article",
    },
    {
      name: "Контакты",
      link: "/contacts",
    },
  ];

  return (
    <div className="bg-gray-200">
      <div className="container m-auto mb-10 flex h-full max-w-[1350px] flex-col justify-between p-4 pt-8 sm:flex-row">
        <div>
          <Link href="/" className="items-cente flex">
            <h1 className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-4xl font-bold text-transparent opacity-90">
              Lshop
            </h1>
          </Link>

          <span className="text-[14px] text-[#272727]">
            Laptop магазин в Бишкеке
          </span>

          <div className="mt-3">
            <p className="text-[16px] font-medium text-[#272727]">
              Режим работы
            </p>
            <p className="text-[14px] text-[#272727] ">Пн - Вс 10:00 - 20:00</p>
          </div>
        </div>

        <div className="flex flex-col gap-6 sm:flex-row sm:space-x-16">
          <div className="mt-1 mb-3 flex items-center sm:flex-col sm:items-center sm:space-y-3">
            <TbBrandFacebook className="h-10 w-10 cursor-pointer rounded-lg bg-blue-800 p-1 text-[#fff]" />
            <TbBrandInstagram className="h-10 w-10 cursor-pointer rounded-lg  bg-gradient-to-r from-yellow-200 to-pink-600 p-1 text-[#fff]" />
            <TbBrandYoutube className="h-10 w-10 cursor-pointer rounded-lg bg-red-500 p-1 text-[#fff]" />
          </div>

          <div className="hidden flex-col space-y-2 text-[#272727] md:flex">
            {navLink.map(({ name, link }) => (
              <Link
                key={name}
                href={link}
                className={`${
                  router.pathname == link ? "nav-item-active" : ""
                } nav-item `}
              >
                {name}
              </Link>
            ))}
          </div>

          <div>
            <h4 className="text-[16px] font-medium text-[#272727]">Контакты</h4>
            <div>
              <div className="flex flex-col space-y-2 text-[#272727]">
                <div className="relative flex items-center">
                  <div className="contact-number mt-2 flex items-center space-x-2">
                    <TbPhone className="text-[14px]" />
                    <p className="cursor-pointer text-[14px] font-medium hover:underline">
                      +996 550 507 626
                    </p>
                  </div>
                  <div className="dropdown-contact-number absolute top-[30px] left-[20px] rounded-lg bg-gray-500 p-2">
                    <p className="mb-1 cursor-pointer text-[14px] hover:underline">
                      +996 773 507 626
                    </p>
                    <p className="cursor-pointer text-[14px] hover:underline">
                      +996 773 507 626
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center space-x-2">
                    <TbLocation />
                    <p className="cursor-pointer text-[14px]">
                      ул. Московская, 72
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <TbMail />
                    <p className="cursor-pointer text-[14px]">
                      nv.nurtilek@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="py-2 text-center text-sm text-[#272727]">
        © Copyrighted & Designed by Nurtilek
      </p>
    </div>
  );
};

export default Footer;
