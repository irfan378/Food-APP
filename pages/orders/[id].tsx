import { GetServerSideProps, NextPage } from "next";
import React from "react";
import Image from "next/image";
import styles from "../../styles/Order.module.css";
import axios from "axios";

const Order: NextPage = ({ order }: any) => {
  const status: number = order.status;
  const statusClass = (index: number) => {
    if (index - status < 1) {
      return styles.done;
    }
    if (index - status === 1) {
      return styles.inProgress;
    }
    if (index - status > 1) {
      return styles.undone;
    }
  };
  return (
    <div className="container2 flex-col p-12 flex md:flex-row">
      <div className="left flex-[2]">
        <div className="row">
          <table className="tables w-[100%] text-left mb-12 border-spacing-10">
            <thead>
              <tr className="tr hidden md:contents">
                <th>Order ID</th>
                <th>Customer</th>
                <th>Address</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="flex flex-col items-center justify-center md:contents">
                <td>
                  <span className="id">{order._id}</span>
                </td>
                <td>
                  <span className="name font-medium text-red-600">
                   {order.customer}
                  </span>
                </td>
                <td>
                  <span className="address">
                    {order.address}
                  </span>
                </td>
                <td>
                  <span className="total font-medium text-lg">${order.total}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="row flex justify-between w-[100%] md:w-[80%]">
          <div className={statusClass(0)}>
            <Image src="/img/paid.png" alt="" width={30} height={30} />
            <span>Payment</span>
            <div className="checkedIcon">
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                alt=""
                width={20}
                height={20}
              />
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image src="/img/bake.png" alt="" width={30} height={30} />
            <span>Prepearing</span>
            <div className="checkedIcon">
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                alt=""
                width={20}
                height={20}
              />
            </div>
          </div>
          <div className={statusClass(2)}>
            <Image src="/img/bike.png" alt="" width={30} height={30} />
            <span>On the way</span>
            <div className="checkedIcon">
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                alt=""
                width={20}
                height={20}
              />
            </div>
          </div>
          <div className={statusClass(3)}>
            <Image src="/img/delivered.png" alt="" width={30} height={30} />
            <span>Delivered</span>
            <div className="checkedIcon">
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                alt=""
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="right flex-[1]">
        <div className="wrapper mt-5 w-[100%] md:w-[90%] text-white max-h-[300px] p-14 pt-3 flex flex-col justify-between bg-[#333] ">
          <h2 className="titlen text-base">Cart Total</h2>
          <div className="totalText">
            <b className="totalTextTitle mr-3">Subtotal:</b>${order.total}
          </div>
          <div className="totalText">
            <b className="totalTextTitle mr-3">Discount:</b>$0.00
          </div>
          <div className="totalText">
            <b className="totalTextTitle mr-3 cur">Total:</b>${order.total}
          </div>
          <button
            disabled
            className="button text-[teal] h-8 mt-5  bg-white font-bold cursor-not-allowed"
          >
            Paid
          </button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  params,
}: any) => {
  const res = await axios.get(`http://localhost:3000/api/orders/${params.id}`);
  return {
    props: { order: res.data },
  };
};
export default Order;
