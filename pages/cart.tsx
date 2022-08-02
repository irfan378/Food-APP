import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import axios from "axios";
import { useRouter } from "next/router";
import { reset } from "../redux/cartSlice";


const Cart = () => {
  const [open, setOpen] = useState<boolean>(false);
  const initialOptions = {
    "client-id":
      "AZjpv7O3HwS0kdo-lhb6DyxHr-IVMbnv65J1rlm3wsZbjt3RXxmHVodtTFDcs3REogrISg5KhyAZk4QU",
    currency: "USD",
    intent: "capture",
    "data-client-token": "abc123xyz==",
  };
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.cart);
  const router = useRouter();
  const createOrder = async (data: unknown) => {
    try {
      const res = await axios.post("http://localhost:3000/api/orders", data);
      res.status === 201 && router.push("/orders/" + res.data._id);
      dispatch(reset())
    } catch (err) {
      console.log(err)
    }
    
  };
  const amount =cart.total;
const currency = "USD";
const style:any = {"layout":"vertical"};

const ButtonWrapper = ({ currency, showSpinner }:any) => {
  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

  useEffect(() => {
      dispatch({
          type: "resetOptions",
          value: {
              ...options,
              currency: currency,
          },
      });
  }, [currency, showSpinner]);
return (<>
  { (showSpinner && isPending) && <div className="spinner" /> }
  <PayPalButtons
      style={style}
      disabled={false}
      forceReRender={[amount, currency, style]}
      fundingSource={undefined}
      createOrder={(data, actions) => {
          return actions.order
              .create({
                  purchase_units: [
                      {
                          amount: {
                              currency_code: currency,
                              value: amount,
                          },
                      },
                  ],
              })
              .then((orderId) => {
                  // Your code here after create the order
                  return orderId;
              });
      }}
      onApprove={function (data, actions:any) {
          return actions.order.capture().then(function (details:any) {
              // Your code here after capture the order
              const shipping = details.purchase_units[0].shipping;
              createOrder({
                customer:shipping.name.full_name,
                address:shipping.address.address_line_1,
                total:cart.total,
                method:1
              })
          });
      }}
  />
</>
);
}
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
              <button className="cashOnDelivery px-2 py-2 cursor-pointer mb-2 bg-white text-teal-700 font-bold">
                Cash on Delivery
              </button>
              <PayPalScriptProvider options={{ "client-id": "AZjpv7O3HwS0kdo-lhb6DyxHr-IVMbnv65J1rlm3wsZbjt3RXxmHVodtTFDcs3REogrISg5KhyAZk4QU",components:"buttons",currency:"USD" }}>
              <ButtonWrapper
                    currency={currency}
                    showSpinner={false}
                />
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
