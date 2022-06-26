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
        <h3 className="choose">Choose additional Ingredients</h3>
        <div className="ingredients">
            <div className="options">

            </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
