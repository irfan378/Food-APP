import { NextPage } from "next";
import React, { useState } from "react";
import Image from "next/image";

const Featured: NextPage = () => {
  const [index, setIndex] = useState<number>(0);
  const handleArrow = (direction: string) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 1);
    }
    if (direction === "r") {
      setIndex(index !== 1 ? index + 1 : 0);
    }
  };
  
  let images: string[];
  images = ["/img/featured2.png", "/img/featured3.png"];
  return (
    <div className="containerr h-[calc(100vh-100px)] bg-red-500 flex justify-end">
      <div className="absolute w-[10%] h-[20%] top-0 bottom-0 m-auto left-0 cursor-pointer z-[2]">
        <Image
          src="/img/arrowl.png"
          layout="fill"
          alt=""
          onClick={() => handleArrow("l")}
          objectFit="contain"
        />
      </div>
      <div
        className="wrapper w-[300vw] h-full flex"
        style={{ transform: `translateX(${100 * index}vw)` }}
      >
        {images.map((img, i) => (
          <div className="imgContainer w-[100vw] relative h-full" key={i}>
            <Image src={img} layout="fill" alt="" objectFit="contain" />
          </div>
        ))}
      </div>
      <div
        className="absolute w-[10%] h-[20%] z-[2] top-0 bottom-0 m-auto right-0 cursor-pointer"
        onClick={() => handleArrow("r")}
      >
        <Image src="/img/arrowr.png" layout="fill" alt="" objectFit="contain" />
      </div>
    </div>
  );
};

export default Featured;
