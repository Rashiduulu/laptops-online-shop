import React, {useState} from "react";
import {sanityClient} from "@/sanity";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";
import {TbSearch, TbShoppingBag, TbUserCircle, TbMenu, TbX} from "react-icons/tb";
import {useSelector} from "react-redux";
import {selectBasketItems} from "@/redux/basketSlice";
import {signOut, signIn, useSession} from "next-auth/react";
import SearchBar from "./SearchBar";

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [showModal, setShowModal] = useState(false);
    const [searchModal, setSearchModel] = useState(false)
    const handleLogout = () => {
        setShowModal(!showModal);
    };
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const toggleSearch = () => {
        setSearchModel(!searchModal)
    }


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
    const {data: session} = useSession()
    const items = useSelector(selectBasketItems)

    return (
        <header className="sticky top-0 z-50 bg-white">
            {/*<header className="sticky top-0 z-50 bg-slate-100 bg-white/30 backdrop-blur-lg">*/}
            <div className="container m-auto max-w-[1350px] flex items-center justify-between p-4">
                <div className="flex items-center">
                    <TbMenu onClick={toggleMenu} className="header-icon md:hidden mr-2"/>
                    <Link href="/">
                        <h1 className="text-3xl font-bold text-black opacity-90 bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">Lshop</h1>
                    </Link>
                </div>


                <div
                    className={`${
                        isOpen ? "px-4 pt-10 flex flex-col items-center absolute top-0 left-0 bg-white space-y-6 text-2xl min-h-screen w-full z-50 md:hidden" : "hidden justify-center space-x-8 md:flex text-gray-900 diplay-block"
                    } `}
                >
                    <div>
                        <TbX className="mt-6 w-6 h-6 cursor-pointer md:hidden absolute left-4 top-0 z-40"
                             onClick={toggleMenu}/>
                    </div>
                    {navLink.map(({name, link}) => (
                        <Link
                            key={name}
                            href={link}
                            className={`${
                                router.pathname == link ? "nav-item-active" : ""
                            } nav-item`}
                        >
                            {name}
                        </Link>
                    ))}
                </div>


                <div className="flex items-center justify-between gap-x-4 text-black ">
                    <TbSearch onClick={toggleSearch} className="header-icon text-gray-800 cursor-pointer"/>

                    {searchModal && (
                        <div>
                       <div className="w-full h-full fixed left-0 top-[10%] bg-gray-300 opacity-40" onClick={toggleSearch}></div>

                        <div className={`absolute left-0 top-[100%] w-full h-[50vh] bg-white z-50 transition-transform duration-300 ease-in-out ${searchModal ? 'translate-y-[0px]' : 'translate-y-[100px]'}`}>
                            <div className="container m-auto max-w-[1350px] px-4 pt-10">
                            <SearchBar/>
                            </div>
                        </div>
                        </div>
                    )}

                    <Link href="/checkout">
                        <div className=" active:scale-90">
                            <div className="relative">
                <span
                    className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-green-500 text-xs text-white">
                  {items.length}
                </span>
                            </div>
                            <TbShoppingBag className="header-icon text-gray-800"/>
                        </div>
                    </Link>

                    {session ? (
                        <div className="relative">
                            <Image
                                src={
                                    session.user?.image ||
                                    "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
                                }
                                alt="img"
                                className="header-icon cursor-pointer rounded-full"
                                width={34}
                                height={34}
                                onClick={() => handleLogout()}
                            />

                            {showModal && (
                                <div>
                                    <div className="w-full h-full fixed left-0 top-0 bg-gray-100 opacity-20"
                                         onClick={() => handleLogout()}></div>
                                    <div
                                        className="modal absolute right-0 top-[40px] w-[240px] bg-[#DFEAF4] rounded-lg p-1">
                                        <div className="modal-content flex justify-center items-center p-2">
                                            <div className="modal-buttons flex flex-col">
                                                <div className="flex flex-col items-center mb-4">
                                                    <Image
                                                        src={
                                                            session.user?.image ||
                                                            "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
                                                        }
                                                        alt="img"
                                                        className="header-icon cursor-pointer rounded-full"
                                                        width={64}
                                                        height={64}
                                                    />
                                                    <h4 className="text-center text-[18px] font-medium">{session.user?.name}</h4>
                                                    <h4 className="text-center text-[14px]">{session.user?.email}</h4>
                                                </div>
                                                <button
                                                    className="text-md font-semibold text-[#fff] hover:underline bg-red-300 rounded-lg cursor-pointer"
                                                    onClick={() => signOut()}
                                                >
                                                    Log Out
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <TbUserCircle
                            className="header-icon cursor-pointer text-gray-800"
                            onClick={() => signIn()}
                        />
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
