import { NextPage } from "next";
import React from "react";
import ProductCard from "./ProductCard";

const ProductList: NextPage = () => {
  return (
    <div className="p-[20px,10px] flex flex-col items-center">
     <h1 className="text-3xl font-bold">THE BEST PIZZA IN TOWN</h1>
      <p className="text-2xl text-black w-2/3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        possimus laudantium expedita iste minus culpa optio, nobis quod id est
        velit fugit accusamus, molestiae odit repellendus totam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum exercitationem tenetur, qui corrupti ab impedit rerum adipisci itsaque doloremque ipsum!{" "}
      </p>
      <div className="flex items-center justify-center w-full flex-wrap">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
    </div>
  );
};

export default ProductList;
