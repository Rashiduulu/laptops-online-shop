import React from "react";
import Link from "next/link";
import { TbChevronRight, TbHome2 } from "react-icons/tb";
import Header from "@/components/Header";
import Image from "next/image";

const AboutUs = () => (
  <div>
    <Header />
    <div className="container m-auto max-w-[1350px] px-4">
      <div className="mt-8 flex items-center">
        <Link href="/">
          <TbHome2 />
        </Link>
        <TbChevronRight />
        <p className="mr-2 text-sm">Catalog</p>
      </div>

      <h1 className="lg:[48px] mt-8 mb-12 text-center  text-[32px] md:text-[38px]">
        Lshop - магазин техники в Бишкеке
      </h1>
      <div>
        <img
          className="h-[660px] w-full"
          src="https://www.istore.kg/media/about_us_page/2020.20.26-00015_r9b2z4I.jpg"
          alt="img"
        />
        {/* <Image
          src="https://www.istore.kg/media/about_us_page/2020.20.26-00015_r9b2z4I.jpg"
          alt="img"
          layout="fill"
          objectFit="contain"
          className="banner-img h-[660px] w-full"
        /> */}
      </div>

      <div className="mt-16 grid grid-cols-1 gap-3 lg:grid-cols-2">
        <div>
          <h2 className="mb-6 text-[30px]">
            У нас можно приобрести продукций по самым привлекательным ценам
          </h2>

          <p className="mb-3 text-[16px]">
            С 2013 года мы знакомим бишкекчан с полной линейкой продукции Apple,
            а также предлагаем большой выбор дополнительных устройств, гаджетов
            и аксессуаров. В магазине вы можете протестировать iMac, MacBook,
            iPad или iPhone, все девайсы в открытом доступе.
          </p>

          <p className="text-[16px]">
            Наши опытные консультанты ответят на все вопросы и помогут
            определиться с выбором, а главное — подберут то, что подойдет именно
            вам. Кроме того, мы предлагаем нашим клиентам полное гарантийное
            обслуживание, неограниченное время сервисного обслуживания по
            программной части, бонусы по накопительной программе, выгодные
            предложения и акции! Реквизиты: ИП Арса К.Р.
          </p>

          <p className="text-[16px]">Всегда рады видеть вас!</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="h-auto rounded-lg border-[1px]  border-gray-300 p-[15px] md:h-[186px]">
            <div className="mb-2 flex items-center gap-3">
              <img
                className="h-10 w-10"
                src="https://www.istore.kg/media/about_us_page/headphones_support_1.png"
                alt="img"
              />
              <p className="text-[15px] font-medium md:text-[18px]">
                Консультация и сервис
              </p>
            </div>
            <p className="text-[14px] md:text-[15px]">
              Профессиональный и приветливый персонал; подбор и предложение
              только оптимальных решений; персональный менеджер
            </p>
          </div>
          <div className="h-auto rounded-lg border-[1px]  border-gray-300 p-[15px] md:h-[186px]">
            <div className="mb-2 flex items-center gap-3">
              <img
                className="h-10 w-10"
                src="https://www.istore.kg/media/about_us_page/Layer_1.png"
                alt="img"
              />
              <p className="text-[15px] font-medium md:text-[18px]">
                Цены и расчеты
              </p>
            </div>
            <p className="text-[14px] md:text-[15px]">
              Профессиональный и приветливый персонал; подбор и предложение
              только оптимальных решений; персональный менеджер
            </p>
          </div>
          <div className="h-auto rounded-lg border-[1px] border-gray-300 p-[15px] md:h-[186px]">
            <div className="mb-2 flex items-center gap-3">
              <img
                className="h-10 w-10"
                src="https://www.istore.kg/media/about_us_page/Wrench_1.png"
                alt="img"
              />
              <p className="text-[15px] font-medium md:text-[18px]">
                Постпродажный сервис
              </p>
            </div>
            <p className="text-[14px] md:text-[15px]">
              Профессиональный и приветливый персонал; подбор и предложение
              только оптимальных решений; персональный менеджер
            </p>
          </div>
          <div className="h-auto rounded-lg border-[1px] border-gray-300 p-[15px] md:h-[186px]">
            <div className="mb-2 flex items-center gap-3">
              <img
                className="h-10 w-10"
                src="https://www.istore.kg/media/about_us_page/Box_4.png"
                alt="img"
              />
              <p className="text-[15px] font-medium md:text-[18px]">
                Всегда в наличии
              </p>
            </div>
            <p className="text-[14px] md:text-[15px]">
              Профессиональный и приветливый персонал; подбор и предложение
              только оптимальных решений; персональный менеджер
            </p>
          </div>
        </div>
      </div>

      <div className="mt-[90px] mb-20">
        <h1 className="mb-5 text-[30px] font-medium">Обратная связь</h1>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9348.885611522352!2d74.58797196528548!3d42.845506178164854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec86a8bb5b873%3A0x222c5538e7365c36!2z0LPQvtGA0L7QtCDQkdC40YjQutC10Lo!5e0!3m2!1sru!2skg!4v1685593837891!5m2!1sru!2skg"
            width="100%"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="grid grid-cols-1 gap-6  rounded-lg bg-gray-300 p-10 text-[#F5F5F5] md:grid-cols-2">
            <div>
              <div className="mb-2 flex items-center space-x-1 ">
                <img
                  className="h-6 w-6"
                  src="https://www.istore.kg/static/img/phone.svg"
                  alt="img"
                />
                <p className="text-[20px] text-[#828282]">Наши номера</p>
              </div>
              <div className="flex flex-col">
                <span className="text-[18px] text-[#1D1D1F]">
                  +996 (550) 507 626
                </span>
                <span className="text-[18px] text-[#1D1D1F]">
                  +996 (550) 507 626
                </span>
                <span className="text-[18px] text-[#1D1D1F]">
                  +996 (550) 507 626
                </span>
              </div>
            </div>
            <div>
              <div className="mb-2 flex items-center space-x-1">
                <img
                  className="h-6 w-6"
                  src="https://www.istore.kg/static/img/pin.svg"
                  alt="img"
                />
                <p className="text-[20px] text-[#828282]">Адрес</p>
              </div>
              <span className="text-[18px] text-[#1D1D1F]">
                пр. Манаса, 40 (пер. ул. Киевская)
              </span>
            </div>

            <div>
              <div className="mb-2 flex items-center space-x-1">
                <img
                  className="h-6 w-6"
                  src="https://www.istore.kg/static/img/mail.svg"
                  alt="img"
                />
                <p className="text-[20px] text-[#828282]">Наша почта</p>
              </div>
              <div className="flex flex-col">
                <span className="text-[18px] text-[#1D1D1F]">
                  office@Lshop.kg
                </span>
                <span className="text-[18px] text-[#1D1D1F]">
                  office@Lshop.kg
                </span>
              </div>
            </div>

            <div>
              <div className="mb-2 flex items-center space-x-1">
                <img
                  className="h-6 w-6"
                  src="https://www.istore.kg/static/img/time-five.svg"
                  alt="img"
                />
                <p className="text-[20px] text-[#828282]">График работы</p>
              </div>
              <span className="text-[18px] text-[#1D1D1F]">
                Пн - Вс 10:00 - 20:00
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutUs;
