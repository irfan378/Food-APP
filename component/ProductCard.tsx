
import React from "react";
import Image from "next/image";
import { ProductLists } from "../typings";
import Link from "next/link";

const ProductCard= ({pizza}:{
  pizza:ProductLists
}) => {
  return (
    <div className="w-full md:w-[22%] flex flex-col items-center justify-center px-5 py-10 cursor-pointer">
      <Link href={`product/${pizza._id}`} passHref>
      <Image src={pizza.img} alt="" width="500" height="500" />
      </Link>
      
      <h1 className="text-2xl text-red-600 font-bold">{pizza.title}</h1>
      <span className="text-2xl text-black font-bold">${pizza.prices[0]}</span>
      <p className="text-center text-black">{pizza.desc}</p>
    </div>
  );
};

export default ProductCard;
