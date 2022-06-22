import { NextPage } from "next";
import React from "react";
import CallIcon from "material-ui-icons/Call";
import Restaurant from "material-ui-icons/Restaurant";
import { ShoppingCart } from "material-ui-icons";

const Navbar: NextPage = () => {
  return (
    <div className="containers h-24 p-0 pr-12 pl-12 bg-red-500 flex justify-between items-center sticky top-0">
      <div className="item flex-none w-52 h-14 flex items-center">
        <div className="callButton text-white rounded-full ">
          <CallIcon/>
        </div>
        <div className="texts ml-5 text-white">
          <div className="text text-xs font-medium">ORDER NOW!</div>
          <div className="text text-xl font-bold">0123456789</div>
        </div>
      </div>
      <div className="item grow h-14">
        <ul className="list p-0 flex items-center justify-center text-white">
          <li className="listItem m-5 font-medium text-xl">Home</li>
          <li className="listItem m-5 font-medium text-xl">Products</li>
          <li className="listItem m-5 font-medium text-xl">Menu</li>
          <Restaurant className="m-5 font-medium text-xl" />
          <li className="listItem m-5 font-medium text-xl">Events</li>
          <li className="listItem m-5 font-medium text-xl">Contact</li>
        </ul>
      </div>
      <div className="item flex-none w-52  justify-end text-white flex">
        <div className="cart absolute">
          <ShoppingCart />
        </div>
        <div className="counter relative -top-4 -right-2">2</div>
      </div>
    </div>
  );
};

export default Navbar;
