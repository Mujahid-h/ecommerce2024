"use client";
import React, { useState } from "react";
import Logo from "../public/logo.png";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Items_List = [
  "All",
  "Today's Deals",
  "Customer Service",
  " Registry",
  "Gift Cards",
  "Sell",
];

const Header = () => {
  const [query, setQuery] = useState<string>("");
  const router = useRouter();

  const searchHandler = () => {
    router.push(`/search/${query}`);
  };

  return (
    <>
      <div className="bg-[#33343C]  text-white ">
        <div className="flex items-center justify-between w-[90%] mx-auto">
          <div className="w-[10%] flex justify-center ">
            <Image
              className="cursor-pointer"
              src={Logo}
              alt={"logo"}
              width={40}
              height={40}
            />
          </div>

          <div className="w-[55%] flex items-center  ">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full px-4 py-2 outline-none  text-black rounded-l-md "
              type="text"
              placeholder="Search"
            />
            <div
              onClick={searchHandler}
              className="bg-[#F3A847] px-3 py-2 rounded-r-md font-bold cursor-pointer"
            >
              <CiSearch size={24} />
            </div>
          </div>

          <div className="flex justify-around items-center w-[25%]">
            <div className="cursor-pointer p-2 border border-transparent hover:border hover:border-white">
              <h1 className="text-xs">Hello, Mujahid</h1>
              <h1 className="text-sm font-medium">Accounts & Lists</h1>
            </div>

            <div className="cursor-pointer p-2 border border-transparent hover:border hover:border-white">
              <p className="text-xs">Returns</p>
              <h1 className="text-sm font-medium">& Orders</h1>
            </div>

            <div className="cursor-pointer p-2 pt-0 border border-transparent hover:border hover:border-white">
              <p className="relative left-3 top-2">0</p>
              <div className="flex">
                <div>
                  <MdOutlineShoppingCart size={30} />
                </div>
                <h1 className="mt-2">cart</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#232F3E] w-full text-white p-1 flex items-center justify-between">
        <div>
          {Items_List.map((link, index) => (
            <Link
              key={index}
              href={`/${link}`}
              className="mx-2 p-1 border border-transparent hover:border hover:border-white text-sm"
            >
              {link}
            </Link>
          ))}
        </div>
        <div className="mx-5">
          <h1 className="text-[#F3A847] font-bold cursor-pointer hover:underline">
            Signout
          </h1>
        </div>
      </div>
    </>
  );
};

export default Header;
