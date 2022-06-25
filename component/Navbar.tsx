import { NextPage } from "next";
import React from "react";
import Image from "next/image";

const Navbar: NextPage = () => {
  return (
    <div className="containers z-[999] h-24 p-0 pr-12 pl-12 bg-red-500 flex justify-between items-center sticky top-0">
      <div className="item flex-none w-52 h-14 flex items-center">
        <div className="callButton text-white bg-white rounded-[50%] w-[50px] h-[50px] p-2">
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className="texts ml-5 text-white">
          <div className="text text-xl font-bold">ORDER NOW!</div>
          <div className="text text-xl font-bold">0123456789</div>
        </div>
      </div>
      <div className="item grow h-14">
        <ul className="list p-0 flex items-center justify-center text-white">
          <li className="listItem m-5 font-medium text-xl">Home</li>
          <li className="listItem m-5 font-medium text-xl">Products</li>
          <li className="listItem m-5 font-medium text-xl">Menu</li>
          <li className="listItem m-5 font-medium text-xl">Events</li>
          <li className="listItem m-5 font-medium text-xl">Contact</li>
        </ul>
      </div>
      <div className="item flex-none w-52  justify-end text-white flex">
        <div className="cart absolute">
          <Image src="/img/cart.png" alt="" width="32" height="32" />
        </div>
        <div className="counter relative -top-4 -right-2">2</div>
      </div>
    </div>
  );
};

export default Navbar;
