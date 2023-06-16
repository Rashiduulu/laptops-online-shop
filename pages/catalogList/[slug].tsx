import React from "react";
import {GetStaticPaths, GetStaticProps} from "next";
import {useRouter} from "next/router";
import Image from "next/image";
import {sanityClient, urlFor} from "../../sanity";
import Product from "../../components/Product";
import {fetchProduct} from "../../utils/fetchProduct";
import Link from "next/link"
import Header from "@/components/Header";
import {motion as m} from "framer-motion";
import {addToBasket} from "@/redux/basketSlice";
import toast from "react-hot-toast";
import {TbChevronRight, TbHome2, TbShoppingCart} from "react-icons/tb";
import {useDispatch} from "react-redux";

interface Props {
    products: Product[];
}


const CatalogListPage = ({products}: Props) => {
    const router = useRouter();
    const {slug} = router.query;

    const dispatch = useDispatch();

    const handleAddToBasket = (product: Product) => {
        dispatch(addToBasket(product));
        toast.success(`${product.title} добавлен в корзину`, {
            position: "bottom-center",
        });
    };


    return (
        <>
            <Header/>
            <m.div initial={{opacity: 0}}
                   animate={{opacity: 1}}
                   transition={{duration: 0.5, ease: "easeOut"}}
                   className="container m-auto max-w-[1350px] px-4 min-h-screen">

                <div className="flex items-center mt-8">
                    <Link href="/">
                        <TbHome2/>
                    </Link>
                    <TbChevronRight/>
                    <Link href="/product" className="hover:underline">
                        <p className="text-sm">Products</p>
                    </Link>
                    <TbChevronRight/>
                    <p className="text-sm capitalize">{slug}</p>
                </div>

                <h1 className="text-[26px] mt-10 mb-8 capitalize">{slug}</h1>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 sm:grid-cols-2">
                    {products.map((product) => (
                        <div
                            className="shadow-green-800 bg-gray-100 hover:bg-gray-200 pr-[30px] pl-[30px] pt-[15px] pb-[25px] h-[328px] flex justify-between flex-col rounded-lg transition"
                            key={product._id}
                        >
                            <div className="relative h-52 w-full md:h-42">
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
                            <div className="flex justify-between items-center ">
                                <Link href={`/product/${product.slug.current}`}>
                                    <h4 className="text-[16px] lg:text-[18px] font-medium">
                                        {product.title}
                                    </h4>
                                    <p className="text-sm font-medium md:text-[14px]">
                                        ${product.price}
                                    </p>
                                </Link>
                                <div
                                    className="cursor-pointer rounded-full bg-gradient-to-r from-blue-400 to-green-400 p-3 shopping-cart-btn active:scale-[.85]"
                                    onClick={() => handleAddToBasket(product)}
                                >
                                    <TbShoppingCart className="cursor-pointer text-xl text-white "/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </m.div>
        </>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const query = `*[_type == "catalog"] {
    slug
  }`;
    const catalogs = await sanityClient.fetch(query);

    const paths = catalogs.map((catalog: any) => ({
        params: {slug: catalog.slug.current},
    }));

    return {
        paths,
        fallback: false,
    };
};


export const getStaticProps: GetStaticProps<Props> = async ({params}) => {
    const slug = params?.slug as string;

    // Fetch the catalog based on the slug
    const catalogQuery = `*[_type == "catalog" && slug.current == $slug] {
    _id,
    slug,
    current,
  }`;
    const [catalog] = await sanityClient.fetch(catalogQuery, {slug});

    // Fetch the products belonging to the catalog
    const productsQuery = `*[_type == "product" && catalog._ref == $catalogId] {
    _id,
    title,
    image,
    price,
    slug,
    current,
  }`;
    const products = await sanityClient.fetch(productsQuery, {catalogId: catalog._id});

    return {
        props: {
            products,
        },
    };
};

export default CatalogListPage;