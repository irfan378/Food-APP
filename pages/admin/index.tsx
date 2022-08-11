import React, { useState } from "react";
import Image from "next/image";
import { GetServerSideProps } from "next";
import axios from "axios";
const index = ({ products, orders }: any) => {
  const [pizzaList, setPizzaList] = useState(products);
  const [orderList, setOrderList] = useState(orders);
  const status = ["prepearing", "on the way", "delivered"];
  const hanleDelete = async (id: any) => {
    try {
      const res = await axios.delete("http://localhost:3000/api/product/" + id);
      setPizzaList(pizzaList.filter((pizza: any) => pizza._id !== id));
    } catch (err) {
      console.log(err);
    }
  };
  const handleStatus = async (id: any) => {
    const item = orderList.filter((order: any) => order._id === id)[0];
    const currentStatus = item.status;
    try {
      const res = await axios.put("http://localhost:3000/api/orders/" + id, {
        status: currentStatus + 1,
      });
      setOrderList([
        res.data,
        ...orderList.filter((order: any) => order._id !== id),
      ]);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="containers px-12 py-12 flex">
      <div className="item flex-[1]">
        <h1>Products</h1>
        <table className="tables w-full border-spacing-[20px] text-left">
          <tbody>
            <tr className="trTitle">
              <th>Image</th>
              <th>Id</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </tbody>
          {pizzaList.map((product: any) => (
            <tbody key={product._id}>
              <tr className="trTitle">
                <td>
                  <Image
                    src={product.img}
                    width={50}
                    height={50}
                    objectFit="cover"
                    alt=""
                  />
                </td>
                <td>{product._id.slice(0, 5)}...</td>
                <td>{product.title}</td>
                <td>{product.prices[0]}</td>
                <td>
                  <button className="button text-white px-1 py-1 cursor-pointer bg-teal-900 mr-3">
                    Edit
                  </button>
                  <button
                    onClick={() => hanleDelete(product._id)}
                    className="button text-white px-1 py-1 cursor-pointer bg-[crimson]"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <div className="item flex-[1]">
        <h1>Orders</h1>
        <table className="tables w-full border-spacing-[20px] text-left">
          <tbody>
            <tr className="trTitle">
              <th>Id</th>
              <th>Customer</th>
              <th>Total Price</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </tbody>
          {orderList.map((order: any) => (
            <tbody key={order._id}>
              <tr className="trTitle">
                <td>{order._id.slice(0, 5)}...</td>
                <td>{order.customer}</td>
                <td>{order.total}</td>
                <td>
                  {order.method === 0 ? <span>Cash</span> : <span>Paid</span>}
                </td>
                <td>{status[order.status]}</td>
                <td>
                  <button
                    onClick={() => handleStatus(order._id)}
                    className="button border bg-slate-300 px-1 py-1"
                  >
                    Next Stage
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async () => {
  const productRes = await axios.get("http://localhost:3000/api/product");
  const orderRes = await axios.get("http://localhost:3000/api/orders");
  return {
    props: { products: productRes.data, orders: orderRes.data },
  };
};
export default index;
