import Image from "next/image";
import Currency from "react-currency-formatter";
import { urlFor } from "@/sanity";
import { useDispatch } from "react-redux";
import { removeFromBasket } from "@/redux/basketSlice";
import { addToBasket } from "@/redux/basketSlice";
import toast from "react-hot-toast";
import { TbChevronDown, TbMinus, TbPlus } from "react-icons/tb";
import Link from "next/link";

interface Props {
  items: Product[];
  product: Product;
  id: string;
  key: string;
}

const CheckoutProductInBasket = ({ id, items, product }: Props) => {
  const dispatch = useDispatch();

  const removeProductFromBasket = () => {
    dispatch(removeFromBasket({ id }));

    toast.error(`${items[0].title} removed from basket`, {
      position: "bottom-right",
    });
  };

  const handleIncrement = () => {
    dispatch(addToBasket(items[0]));
  };

  const handleDecrement = () => {
    dispatch(removeFromBasket({ id: id }));
  };

  return (
    <div className="flex flex-col gap-x-4 border-b border-gray-200 pb-6 pt-6 lg:flex-row lg:items-center">
      <div className="relative h-48 w-48">
        <Image
          src={urlFor(items[0].image[0]).url()}
          layout="fill"
          objectFit="contain"
          alt="img"
        />
      </div>

      <div className="flex flex-1 items-end lg:items-center">
        <div className="flex-1 space-y-3">
          <div className="flex flex-col gap-x-9 text-xl lg:flex-row lg:text-xl">
            <h1 className="font-semibold lg:w-[25rem]">{items[0].title}</h1>
            <div className="flex items-center gap-x-2 font-semibold">
              <TbMinus
                className="h-[25px] w-[25px] cursor-pointer rounded-full bg-gray-200 p-[2px]"
                onClick={handleDecrement}
              />
              {items.length}
              <TbPlus
                className="h-[25px] w-[25px] cursor-pointer rounded-full bg-gray-200 p-[2px]"
                onClick={handleIncrement}
              />
            </div>
          </div>
          <p className="flex cursor-pointer items-end text-blue-500 hover:underline">
            Показать детали продукта
            {/*<TbChevronDown className="h-6 w-6"/>*/}
          </p>
        </div>
        <div className="flex flex-col items-end space-y-3">
          <h3 className="text-xl font-semibold lg:text-xl">
            <Currency
              quantity={items.reduce((total, item) => total + item.price, 0)}
              currency="USD"
            />
          </h3>
          <button
            onClick={removeProductFromBasket}
            className="text-blue-500 hover:underline"
          >
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutProductInBasket;
