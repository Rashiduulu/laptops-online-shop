import { useRouter } from "next/router";
import Header from "@/components/Header";
import {
  TbHome2,
  TbChevronRight,
  TbBrandYoutube,
  TbBrandFacebook,
  TbBrandInstagram,
} from "react-icons/tb";
import Link from "next/link";

const ItemPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Header />

      <div className="container m-auto max-w-[1350px] px-4">
        <div className="mt-4 flex items-center">
          <Link href="/">
            <TbHome2 />
          </Link>
          <TbChevronRight />
          <Link href="/article">
            <p className="text-sm">blog</p>
          </Link>
          <TbChevronRight />
          <p className="mr-2 text-sm">Доставка в страны СНГ</p>
        </div>

        <h1 className="lg:[48px] relative mt-8 mb-12 text-center text-[32px] md:text-[38px]">
          Доставка в страны СН
          {/* <img
            className="absolute right-[2%] top-0 -z-10 m-auto h-auto w-[100px] animate-pulse"
            src="https://img.freepik.com/free-vector/open-laptop-icon-cartoon-illustration_107791-4113.jpg?w=740&t=st=1686467095~exp=1686467695~hmac=551a69ef06b0666e300aa52eeb7065aaf5019bfe52c31016da91e130c17c11a8"
            alt="img"
          /> */}
        </h1>
        <div className="mb-[90px]">
          <img
            src="https://assets-global.website-files.com/625816a3416990dd61391b9b/646a6f24fb9d4d54ccadc20a_Surface-Laptop-Studio-Mockups-004.jpeg"
            alt="img"
            className="m-auto h-[400px] w-[90%] rounded-lg object-contain md:h-[500px]"
          />

          <ul className="mt-10 mb-6 flex flex-col space-y-6 text-[19px]">
            <li>
              Мы рады сообщить нашим клиентам из стран СНГ, что теперь
              осуществляем доставку продукции в такие страны как: Россия,
              Казахстан, Таджикистан, Узбекистан, Армения, Азербайджан,
              Белоруссия, Грузия, Молдавия, Украина.
            </li>
            <li>
              Для вашего удобства мы сотрудничаем с лидерами рынка доставки
              заказов, но всегда готовы рассмотреть наиболее удобный для вас
              вариант. Если вам не подходит ни один из вариантов доставки,
              предложенный нами, пишите свои пожелания в чат с консультантом.
            </li>
            <li>
              Во время оформления заказа на сайте вы увидите виды доставки и
              способы оплаты. После оформления заявки с вами свяжется
              консультант для индивидуального подсчёта и более детальной
              информации о сроках получения доставки.
            </li>

            <li className="text-[#86868b]">
              Важно! Данный раздел предназначен только для схематичного,
              обобщенного описания алгоритма действий на сайте при создании
              заказа. Актуальные условия доставки и оплаты можно уточнить в чате
              с консультантом или по номеру телефона +996 555 802 000
            </li>
          </ul>

          <div>
            <span className="text-[20px] font-semibold">Share</span>
            <div className="mt-1 mb-3 flex items-center">
              <TbBrandInstagram className="cursor-pointer text-3xl text-[#272727]" />
              <TbBrandFacebook className="cursor-pointer text-3xl text-[#272727]" />
              <TbBrandYoutube className="cursor-pointer text-3xl text-[#272727]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
