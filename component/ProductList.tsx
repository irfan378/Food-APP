import React from "react";
import { ProductLists } from "../typings";
import ProductCard from "./ProductCard";

const ProductList = ({ pizzaList }: { pizzaList: ProductLists[] }) => {
  return (
    <div className="p-[20px,10px] flex flex-col items-center">
      <h1 className="text-center text-3xl font-bold py-5">
        THE BEST PIZZA IN TOWN
      </h1>
      <p className="w-[90%] text-2xl text-black text-center md:w-2/3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        possimus laudantium expedita iste minus culpa optio, nobis quod id est
        velit fugit accusamus, molestiae odit repellendus totam? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Debitis, quidem. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Illum exercitationem
        tenetur, qui corrupti ab impedit rerum adipisci itsaque doloremque
        ipsum!{" "}
      </p>

      <div className="flex items-center justify-center w-full flex-wrap">
        {pizzaList.map((pizza): any => {
          return <ProductCard key={pizza._id} pizza={pizza} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;
