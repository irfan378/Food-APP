import { NextPage } from "next";
import React from "react";

const Order: NextPage = () => {
  return (
    <div className="container2 p-12 flex">
      <div className="left flex-[2]"></div>
      <div className="right flex-[1]">
        <div className="wrapper w-[90%] text-white max-h-[300px] p-14 pt-3 flex flex-col justify-between bg-[#333] ">
          <h2 className="titlen text-base">Cart Total</h2>
          <div className="totalText">
            <b className="totalTextTitle mr-3">Subtotal:</b>$79.90
          </div>
          <div className="totalText">
            <b className="totalTextTitle mr-3">Discount:</b>$0.00
          </div>
          <div className="totalText">
            <b className="totalTextTitle mr-3 cur">Total:</b>$79.90
          </div>
          <button disabled className="button text-[teal] h-8 mt-5  bg-white font-bold cursor-not-allowed">
            Paid
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
