
import React from "react";
import Image from "next/image";
import { ProductLists } from "../typings";

const ProductCard= ({pizza}:{
  pizza:ProductLists
}) => {
  return (
    <div className="w-full md:w-[22%] flex flex-col items-center justify-center px-5 py-10 cursor-pointer">
      <Image src={pizza.img} alt="" width="500" height="500" />
      <h1 className="text-2xl text-red-600 font-bold">{pizza.title}</h1>
      <span className="text-2xl text-black font-bold">{pizza.prices[0]}</span>
      <p className="text-center text-black">{pizza.desc}</p>
    </div>
  );
};

export default ProductCard;
