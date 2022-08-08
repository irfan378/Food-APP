import React from "react";
import Image from "next/image";
import { GetServerSideProps } from "next";
import axios from "axios";
import product from "../api/product";
const index = ({ products, orders }: any) => {
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
            {products.map((product:any)=>(
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
              <td>{product._id}</td>
              <td>{product.title}</td>
              <td>{product.prices[0]}</td>
              <td>
                <button className="button text-white px-1 py-1 cursor-pointer bg-teal-900 mr-3">
                  Edit
                </button>
                <button className="button text-white px-1 py-1 cursor-pointer bg-[crimson]">
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
          <tbody>
            <tr className="trTitle">
              <td>{"4354343454".slice(0, 5)}...</td>
              <td>John Doe</td>
              <td>$50</td>
              <td>Paid</td>
              <td>Prepearing</td>
              <td>
                <button className="button border bg-slate-300 px-1 py-1">
                  Next Stage
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async () => {
    const productRes = await axios.get("http://localhost:3000/api/product");
    // const orderRes = await axios.get("http://localhost:3000/api/orders");
  return {
    props: {  products: productRes.data },
  };
};
export default index;
