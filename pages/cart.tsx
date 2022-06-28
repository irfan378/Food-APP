import { NextPage } from "next";
import React from "react";
import Image from "next/image";

const Cart: NextPage = () => {
  return (
    <div className="container3 flex p-[50px]">
      <div className="left flex-[2]">
        <table className="tables w-[70%] border-spacing-10">
          <tr className="tr">
            <th>Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          <tr>
            <td>
              <div className="imgContainer w-[100px] h-[100px] relative">
                <Image
                  src="/img/pizza.png"
                  objectFit="cover"
                  alt=""
                  layout="fill"
                />
              </div>
            </td>
            <td>
              <span className="name font-medium text-red-600">CORALZO</span>
            </td>
            <td>
              <span className="extras">Double Ingredients,spicy sauce</span>
            </td>
            <td>
              <span className="price">$19.90</span>
            </td>
            <td>
              <span className="quantity">2</span>
            </td>
            <td>
              <span className="total font-medium text-lg">$39.90</span>
            </td>
          </tr>
        </table>
      </div>
      <div className="right flex-[1]">
        <div className="wrapper w-[90%] text-white max-h-[300px] p-14 pt-3 flex flex-col justify-between bg-[#333] ">
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
