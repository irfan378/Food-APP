import { NextPage } from "next";
import React from "react";
import Image from "next/image";

const Footer: NextPage = () => {
  return (
    <div className="container2 h-[calc(100vh-100px)] bg-black flex ">
      <div className="flex-[1] relative flex item">
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className="flex-[2] p-14 justify-between relative flex item">
        <div className="flex-[1] card px-2 py-5 ">
          <h2 className="motto text-[#b09999]  py-5 font-medium  text-5xl">
           Let us feel you different here.
          </h2>
        </div>
        <div className="card flex-[1] px-0 py-5">
          <h1 className="title text-3xl text-[#b7903c]">Our Restaurants</h1>
          <p className="text text-[lightgrey] text-2xl py-5 font-thin">
            Srinagar <br /> Jammu and Kashmir <br />
            0123456789
          </p>
          <p className="text text-[lightgrey] text-2xl py-5 font-thin">
            Srinagar <br /> Jammu and Kashmir <br />
            0123456789
          </p>
          <p className="text text-[lightgrey] text-2xl py-5 font-thin">
            Srinagar <br /> Jammu and Kashmir <br />
            0123456789
          </p>
          <p className="text text-[lightgrey] text-2xl py-5 font-thin">
            Srinagar <br /> Jammu and Kashmir <br />
            0123456789
          </p>
        </div>
        <div className="card  flex-[1] px-0 py-5">
          <h1 className="title text-3xl text-[#b7903c]">Working Hours</h1>
          <p className="text text-[lightgrey] text-2xl py-5 font-thin">
            Monday - Friday <br /> 9:00 - 22:00
          </p>
          <p className="text text-[lightgrey] text-2xl py-5 font-thin">
            Saturday - Sunday <br />
            12:00 - 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
