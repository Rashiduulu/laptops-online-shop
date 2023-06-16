import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity";
import Link from "next/link";
import { TbShoppingCart } from "react-icons/tb";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { addToBasket } from "@/redux/basketSlice";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

interface Props {
  product: Product;
}

function Product({ product }: Props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const addItemToBasket = () => {
    if (!session) {
      router.push(
        "/api/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2F"
      );
      return;
    }

    dispatch(addToBasket(product));

    toast.success(`${product.title} added to basket`, {
      position: "bottom-center",
    });
  };
  return (
    <div className="flex h-fit w-[310px] select-none flex-col rounded-2xl bg-gradient-to-r from-[#d8e2ea] to-[#d8e2ea] p-6 md:h-[370px] md:w-[370px]">
      <div className="relative h-64 w-full md:h-52">
        <Link href={`/product/${product.slug.current}`}>
          <Image
            src={urlFor(product.image[0]).url()}
            layout="fill"
            objectFit="contain"
            alt="img"
            className="object-contain"
          />
        </Link>
      </div>

      <div className="flex flex-1 items-center justify-between space-x-4">
        <div className="font-size space-y-4 text-[#272727]">
          <p className="text-lg md:text-[20px]">{product.title}</p>
          <div>
            <s className=" text-[14px]">${product.oldPrice}</s>
            <div className="flex items-center space-x-1">
              <p className="text-sm font-medium opacity-80 md:text-[16px]">
                ${product.price}
              </p>
              <p className="rounded-full bg-red-700 p-[5px] text-[11px] text-white">
                {product.discount}%
              </p>
            </div>
          </div>
        </div>
        <div
          onClick={addItemToBasket}
          className="shopping-cart-btn cursor-pointer rounded-full bg-gradient-to-r from-blue-400 to-green-400 p-3 active:scale-[.85]"
        >
          <TbShoppingCart className="cursor-pointer text-2xl text-white " />
        </div>
      </div>
    </div>
  );
}

export default Product;
