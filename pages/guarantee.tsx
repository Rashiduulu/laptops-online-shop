import React from "react";
import Header from "@/components/Header";
import Link from "next/link";
import { TbHome2, TbChevronRight } from "react-icons/tb";

function guarantee() {
  return (
    <div>
      <Header />

      <div className="container m-auto max-w-[1350px] px-4">
        <div className="mt-4 flex items-center">
          <Link href="/">
            <TbHome2 />
          </Link>
          <TbChevronRight />
          <p className="mr-2 text-sm">Гарантия</p>
        </div>

        <h1 className="lg:[48px] relative mt-8 mb-12 text-center text-[32px] md:text-[38px]">
          Гарантия
          <img
            className="absolute right-[2%] top-0 -z-10 m-auto h-auto w-[100px] animate-pulse"
            src="https://img.freepik.com/free-vector/open-laptop-icon-cartoon-illustration_107791-4113.jpg?w=740&t=st=1686467095~exp=1686467695~hmac=551a69ef06b0666e300aa52eeb7065aaf5019bfe52c31016da91e130c17c11a8"
            alt="img"
          />
        </h1>

        <div className=" mb-[90px] rounded-lg bg-gray-200 p-6">
          <div className="w-full md:w-11/12">
            <h1 className="text-[22px] font-medium">
              Гарантийные обязательства
            </h1>
            <p className="mb-4 text-[18px] text-[#4f4f4f]">
              Продукция в магазине техники iStore реализуется с гарантийными
              обязательствами. Мы предоставляем клиентам своевременное
              гарантийное и сервисное техобслуживание.
            </p>

            <h1 className="text-[22px] font-medium">
              Сроки и условия гарантии
            </h1>
            <p className="mb-4 text-[18px] text-[#4f4f4f]">
              Гарантийный срок продукции Apple – 12 месяцев. Гарантия
              распространяется на дефекты, произошедшие по вине завода
              изготовителя. При обнаружении заводского брака, наши мастера
              бесплатно устранят неисправности путем надлежащего ремонта, либо
              заменой на аналогичное устройство, в случае невозможности ремонта.
            </p>

            <p className="mb-4 text-[18px] text-[#4f4f4f]">
              Гарантийный срок аксессуаров – 1 месяц.
            </p>

            <ul className="mb-4 list-decimal pl-5 text-[18px] text-[#4f4f4f]">
              <li>
                Гарантийный талон – единственный документ, дающий право на
                гарантийное обслуживание устройств;
              </li>

              <li>
                В случае утери, гарантийный сертификат не восстанавливается и
                гарантийное обслуживание не производится;
              </li>

              <li>
                Магазин техники iStore не несет ответственность за сохранность
                имеющейся информации и установленного программного обеспечения
                на устройствах, предоставленных для гарантийного обслуживания;
              </li>

              <li>
                Гарантия не распространяется на механические повреждения:
                вмятины, разбитый дисплей, погнутый корпус, влага внутри
                устройства.
              </li>
            </ul>

            <h1 className="text-[22px] font-medium">
              Обмен и возврат продукции ненадлежащего качества
            </h1>

            <p className="mb-4 text-[18px] text-[#4f4f4f]">
              Мы гарантируем возврат товара в течение 14 календарных дней с
              момента покупки, если он не был в употреблении, сохранены его
              товарный вид, потребительские свойства, упаковка, пломбы, ярлыки
              Закон Кыргызской Республики О защите прав потребителей. При
              потере товарного вида, включая фабричную упаковку, возврат и обмен
              товара надлежащего качества возможен в течении 7 календарных дней
              со дня покупки, за вычетом 20 процентов от покупной цены.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default guarantee;
