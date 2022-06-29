import { NextPage } from "next";
import React from "react";
import Image from "next/image";
import styles from "../../styles/Order.module.css";

const Order: NextPage = () => {
  const status: number = 0;
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
    <div className="container2 p-12 flex">
      <div className="left flex-[2]">
        <div className="row">
          <table className="tables w-[100%] text-left mb-12 border-spacing-10">
            <tr className="tr">
              <th>Order ID</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
            </tr>
            <tr>
              <td>
                <span className="id">124893443984</span>
              </td>
              <td>
                <span className="name font-medium text-red-600">John Doe</span>
              </td>
              <td>
                <span className="address">
                  Srinagar 190001, Jammu and Kashmir
                </span>
              </td>
              <td>
                <span className="total font-medium text-lg">$39.90</span>
              </td>
            </tr>
          </table>
        </div>
        <div className="row flex justify-between w-[80%]">
          <div className={statusClass(0)}>
            <Image src="/img/paid.png" alt="" width={30} height={30} />
            <span>Payment</span>
            <div className="checkedIcon">
              <Image className={styles.checkedIcon} src="/img/checked.png" alt="" width={20} height={20} />
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image src="/img/bake.png" alt="" width={30} height={30} />
            <span>Prepearing</span>
            <div className="checkedIcon">
              <Image className={styles.checkedIcon} src="/img/checked.png" alt="" width={20} height={20} />
            </div>
          </div>
          <div className={statusClass(2)}>
            <Image src="/img/bike.png" alt="" width={30} height={30} />
            <span>On the way</span>
            <div className="checkedIcon">
              <Image className={styles.checkedIcon} src="/img/checked.png" alt="" width={20} height={20} />
            </div>
          </div>
          <div className={statusClass(3)}>
            <Image src="/img/delivered.png" alt="" width={30} height={30} />
            <span>Delivered</span>
            <div className="checkedIcon">
              <Image className={styles.checkedIcon} src="/img/checked.png" alt="" width={20} height={20} />
            </div>
          </div>
        </div>
      </div>
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

export default Order;
