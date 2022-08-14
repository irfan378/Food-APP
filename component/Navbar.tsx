import { NextPage } from "next";
import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar: NextPage = () => {
  const quantity: number = useSelector((state: any) => state.cart.quantity);
  return (
    <div className="containers z-[999] h-24 p-0 pr-12 pl-12 bg-red-500 flex justify-between items-center top-0">
      <div className="item flex-[3] md:flex-none w-52 mh-14 flex items-center">
        <div className="callButton text-white bg-white rounded-[50%] w-[50px] h-[50px] p-2">
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className="texts  ml-5 text-white">
          <div className="text text-xl font-bold">ORDER NOW!</div>
          <div className="text text-xl font-bold">0123456789</div>
        </div>
      </div>
      <div className="item hidden md:block grow h-14">
        <ul className="list p-0 flex items-center justify-center text-white">
          <Link href="/">
          <li className="listItem m-5 font-medium text-xl cursor-pointer">Home</li>
          </Link>
          <li className="listItem m-5 font-medium text-xl cursor-pointer">Products</li>
          <li className="listItem m-5 font-medium text-xl cursor-pointer">Menu</li>
          <li className="listItem m-5 font-medium text-xl cursor-pointer">Events</li>
          <li className="listItem m-5 font-medium text-xl cursor-pointer">Contact</li>
        </ul>
      </div>
      <Link href="/cart">
        <div className="item  flex-none md:w-52  justify-end text-white flex">
          <div className="cart absolute cursor-pointer">
            <Image src="/img/cart.png" alt="" width="32" height="32" />
          </div>
          <div className="counter relative -top-4 -right-2">{quantity}</div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
