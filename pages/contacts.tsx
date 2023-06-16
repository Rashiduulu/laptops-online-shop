import React from "react";
import Link from "next/link";
import {
  TbBrandFacebook,
  TbBrandInstagram,
  TbChevronRight,
  TbClock,
  TbHome2,
  TbMail,
  TbPhone,
  TbSocial,
} from "react-icons/tb";
import { Input, Textarea, Button } from "@material-tailwind/react";
import Header from "@/components/Header";
import { TbBrandYoutube } from "react-icons/tb";

const Contacts = () => {
  return (
    <div>
      <Header />
      <div className="container m-auto max-w-[1350px] px-4">
        <div className="mt-4 flex items-center">
          <Link href="/">
            <TbHome2 />
          </Link>
          <TbChevronRight />
          <p className="mr-2 text-sm">Контакты</p>
        </div>

        <div className="mt-[90px] mb-20 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17913.491722069604!2d74.5731515830813!3d42.853677346583154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec86a8bb5b873%3A0x222c5538e7365c36!2z0LPQvtGA0L7QtCDQkdC40YjQutC10Lo!5e0!3m2!1sru!2skg!4v1685783507602!5m2!1sru!2skg"
              width="100%"
              height="450"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="mb-6">
              <h1 className="mb-6 text-[50px]">Контакты</h1>

              <h4 className="mb-4 text-[20px]">Звоните или пишите нам</h4>

              <div className="mb-3">
                <div className="flex items-center space-x-1">
                  <TbPhone className="h-5 w-5 text-[#828282]" />
                  <span className="text-[18px] font-semibold text-[#828282] ">
                    Наши номера
                  </span>
                </div>
                <p className="text-[18px]">+996 (555) 802 000 </p>
                <p className="text-[18px]">+996 (555) 802 000 </p>
              </div>
              <div className="mb-3">
                <div className="flex items-center space-x-1">
                  <TbMail className="h-5 w-5 text-[#828282]" />
                  <span className="text-[18px] font-semibold text-[#828282] ">
                    Наша почта
                  </span>
                </div>
                <p className="text-[18px]">office@lshop.kg</p>
              </div>
              <div className="mb-3">
                <div className="flex items-center space-x-1">
                  <TbClock className="h-5 w-5 text-[#828282]" />
                  <span className="text-[18px] font-semibold text-[#828282] ">
                    График работы
                  </span>
                </div>
                <p className="text-[18px]">Пн - Вс 09:00 - 20:00</p>
              </div>
              <div className="mb-3">
                <div className="flex items-center space-x-1">
                  <TbSocial className="h-5 w-5 text-[#828282]" />
                  <span className="text-[18px] font-semibold text-[#828282] ">
                    Мы в социальных сетях
                  </span>
                </div>
                <div className="mt-1 flex items-center space-x-2">
                  <TbBrandFacebook className="h-10 w-10 cursor-pointer rounded-lg bg-blue-800 p-1 text-[#fff]" />
                  <TbBrandInstagram className="h-10 w-10 cursor-pointer rounded-lg  bg-gradient-to-r from-yellow-200 to-pink-600 p-1 text-[#fff]" />
                  <TbBrandYoutube className="h-10 w-10 cursor-pointer rounded-lg bg-red-500 p-1 text-[#fff]" />
                </div>
              </div>
            </div>

            <div className="mt-2">
              <h3 className="mb-2 text-[21px] text-[#828282]">
                Мы рады ответить на все ваши интересующие вопросы
              </h3>

              <h4 className="mb-4 text-[20px]">Форма обратной связи</h4>

              <div className="flex flex-col gap-4">
                <Input label="Ваше имя" />
                <Input label="Укажите свой номер" />
                <Input label="Тема обращения" />
                <Textarea label="Ваше сообщение" />
                <Button>Отправить</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
