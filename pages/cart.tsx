import { NextPage } from "next";
import React from "react";
import Image from "next/image";

const Cart: NextPage = () => {
  return (
    <div className="container3 flex flex-col p-5 md:flex-row ">
      <div className="left flex-[2]">
        <table className="tables flex flex-col items-center justify-center w-[100%]  md:w-[70%] border-spacing-10">
          <thead className="trTitle">
            <tr className=" hidden md:block">
            <th className="p-[30px]">Product</th>
            <th className="p-[30px]">Name</th>
            <th className="p-[30px]">Extras</th>
            <th className="p-[30px]">Price</th>
            <th className="p-[30px]">Quantity</th>
            <th className="p-[30px]">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="flex flex-col items-center justify-center md:flex-row">
            <td className="pr-[10px]">
              <div className="imgContainer w-[100px] h-[100px] relative">
                <Image
                  src="/img/pizza.png"
                  objectFit="cover"
                  alt=""
                  layout="fill"
                />
              </div>
            </td>
            <td className="pr-[10px]">
              <span className="name font-medium text-red-600">CORALZO</span>
            </td>
            <td className="pr-[11px]">
              <span className="extras">Double Ingredients,spicy sauce</span>
            </td>
            <td className="pr-[11px]">
              <span className="price">$19.90</span>
            </td>
            <td className="pr-[11px]">
              <span className="quantity">2</span>
            </td>
            <td className="pr-[11px]">
              <span className="total font-medium text-lg">$39.90</span>
            </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="right flex-[1]">
        <div className="wrapper w-[100%] md:w-[90%] text-white max-h-[300px] p-14 pt-3 flex flex-col justify-between bg-[#333] ">
          <h2 className="title">Cart Total</h2>
          <div className="totalText">
            <b className="totalTextTitle mr-3">Subtotal:</b>$79.90
          </div>
          <div className="totalText">
            <b className="totalTextTitle mr-3">Discount:</b>$0.00
          </div>
          <div className="totalText">
            <b className="totalTextTitle mr-3">Total:</b>$79.90
          </div>
          <button className="button text-red-500 h-8 mt-5  bg-white font-bold cursor-pointer">Checkout Now!</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
