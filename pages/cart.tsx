import React, { useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Cart = () => {
  const [open, setOpen] = useState<boolean>(false);
  const initialOptions = {
    "client-id": "test",
    currency: "USD",
    intent: "capture",
    "data-client-token": "abc123xyz==",
  };
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.cart);
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
            {cart.products.map((product: any) => (
              <tr
                className="flex flex-col items-center justify-center md:flex-row"
                key={product._id}
              >
                <td className="pr-[10px]">
                  <div className="imgContainer w-[100px] h-[100px] relative">
                    <Image
                      src={product.img}
                      objectFit="cover"
                      alt=""
                      layout="fill"
                    />
                  </div>
                </td>
                <td className="pr-[10px]">
                  <span className="name font-medium text-red-600">
                    {product.title}
                  </span>
                </td>
                <td className="pr-[11px]">
                  {product.extras.map((extra: any) => (
                    <span className="extras" key={extra._id}>
                      {extra.text}
                    </span>
                  ))}
                </td>
                <td className="pr-[11px]">
                  <span className="price">${product.price}</span>
                </td>
                <td className="pr-[11px]">
                  <span className="quantity">{product.quantity}</span>
                </td>
                <td className="pr-[11px]">
                  <span className="total font-medium text-lg">
                    ${product.price * product.quantity}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="right flex-[1]">
        <div className="wrapper w-[100%] md:w-[90%] text-white max-h-[300px] p-14 pt-3 flex flex-col justify-between bg-[#333] ">
          <h2 className="title">Cart Total</h2>
          <div className="totalText">
            <b className="totalTextTitle mr-3">Subtotal:</b>${cart.total}
          </div>
          <div className="totalText">
            <b className="totalTextTitle mr-3">Discount:</b>$0.00
          </div>
          <div className="totalText">
            <b className="totalTextTitle mr-3">Total:</b>${cart.total}
          </div>

          {open ? (
            <div className="payment mt-3 flex flex-col">
              <button className="cashOnDelivery px-2 py-2 cursor-pointer mb-2 bg-white text-teal-700 font-bold">Cash on Delivery</button>
            <PayPalScriptProvider options={{ "client-id": "test" }}>
              <PayPalButtons style={{ layout: "horizontal" }} />
            </PayPalScriptProvider>
            </div>
          ) : (
            <button
              onClick={() => setOpen(true)}
              className="button text-red-500 h-8 mt-5  bg-white font-bold cursor-pointer"
            >
              Checkout Now!
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
