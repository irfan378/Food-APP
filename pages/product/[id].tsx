import { NextPage } from "next";
import React, { useState } from "react";
import Image from "next/image";
const Product: NextPage = () => {
  const [size, setSize] = useState<number>(0);
  const pizza = {
    id: 1,
    img: "/img/pizza.png",
    name: "Campangola",
    price: [20, 26, 30],
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, accusantium?  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, et!",
  };
  return (
    <div className="containers h-[calc(100vh-100px)] flex">
      <div className="left flex-[1] h-full flex item-center justify-center">
        <div className="imgContainer w-3/4 h-3/4 relative">
          <Image src={pizza.img} objectFit="contain" layout="fill" alt="" />
        </div>
      </div>
      <div className="right flex-[1] p-5">
        <h1 className="title text-4xl font-semibold">{pizza.name}</h1>
        <span className="price text-[#d1411e] text-2xl font-normal border-b border-solid border-[red]">
          ${pizza.price[size]}
        </span>
        <p className="desc text-xl">{pizza.desc}</p>
        <h3 className="choose py-2">Choose the Size</h3>
        <div className="sizes py-2 flex justify-between w-[40%] cursor-pointer">
          <div className="size w-8 h-8 relative" onClick={() => setSize(0)}>
            <Image src="/img/size.png" alt="" layout="fill" />
            <span className="number absolute -top-1 -right-5 bg-[teal] text-[12px] py-0 px-1 rounded-xl">
              Small
            </span>
          </div>
          <div className="size w-10 h-10 relative" onClick={() => setSize(1)}>
            <Image src="/img/size.png" alt="" layout="fill" />
            <span className="number absolute -top-1 -right-5 bg-[teal] text-[12px] py-0 px-1 rounded-xl">
              Medium
            </span>
          </div>
          <div className="size w-12 h-12 relative" onClick={() => setSize(2)}>
            <Image src="/img/size.png" alt="" layout="fill" />
            <span className="number absolute -top-1 -right-5 bg-[teal] text-[12px] py-0 px-1 rounded-xl">
              Large
            </span>
          </div>
        </div>
        <h3 className="choose font-medium text-xl mb-7 ml-3">Choose additional Ingredients</h3>
        <div className="ingredients flex mb-7 ">
          <div className="option flex items-center mb-3 text-base font-medium ml-3">
            <input
              type="checkbox"
              id="double"
              name="double"
              className="checkbox w-5 h-5"
            />
            <label htmlFor="double">Double Ingredients</label>
          </div>
          <div className="option flex items-center mb-3  text-base font-medium ml-3">
            <input
              type="checkbox"
              id="cheese"
              name="cheese"
              className="checkbox w-5 h-5"
            />
            <label htmlFor="spicy">Extra Cheese</label>
          </div>
          <div className="option flex items-center  mb-3 text-base font-medium ml-3">
            <input
              type="checkbox"
              id="spicy"
              name="spicy"
              className="checkbox w-5 h-5"
            />
            <label htmlFor="spicy">Spicy Sauce</label>
          </div>
          <div className="option flex items-center mb-3 text-base font-medium ml-3">
            <input
              type="checkbox"
              id="garlic"
              name="garlic"
              className="checkbox w-5 h-5"
            />
            <label htmlFor="garlic">Garlic Sauce</label>
          </div>
        </div>
        <div className="add">
          <input type="number" defaultValue={1} className="quantity w-12 h-8 border" />
          <button className="h-9 ml-3 px-2 py-2 bg-[#f51010] text-white border-none text-base font-medium cursor-pointer">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
