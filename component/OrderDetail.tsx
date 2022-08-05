import React, { useState } from "react";

const OrderDetail = ({ total, createOrder }: any) => {
  const [customer, setCustomer] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const handleClick = () => {
    createOrder({ customer, address, total, method: 0 });
  };
  return (
    <div className="containers w-full h-[100vh] z-[999] absolute top-0 left-0 flex items-center justify-center bg-[rgb(197,197,197,0.5)]">
      <div className="wrappersds w-[500px] bg-white rounded-2xl p-[50px] flex flex-col items-center justify-center">
        <h1 className="title font-light">You will pay $12 after delivery</h1>
        <div className="item flex flex-col w-full mb-4">
          <label className="label mb-3">Name Surname</label>
          <input
            placeholder="John Doe"
            className="input h-10"
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className="item flex flex-col w-full mb-4">
          <label className="label mb-3">Phone Number</label>
          <input
            placeholder="+91123456869"
            className="input h-10"
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className="item flex flex-col w-full mb-4">
          <label className="label mb-3">Address</label>
          <input
            placeholder="Lane No,Tehsil"
            className="input h-20"
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <button
          className="button bg-teal-900 text-white px-5 py-3 font-medium text-xs rounded-xl cursor-pointer"
          onClick={handleClick}
        >
          Order
        </button>
      </div>
    </div>
  );
};

export default OrderDetail;
