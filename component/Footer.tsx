import { NextPage } from "next";
import React from "react";
import Image from "next/image";

const Footer: NextPage = () => {
  return (
    <div className="h-[calc(100vh-100px)] bg-black flex ">
      <div className="flex-[1] relative flex">
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className="flex-[1] relative flex">
        <div className="flex-[1]">
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, in?
          </h2>
        </div>
        <div>
          <h1>Our Restaurants</h1>
          <p>
            Srinagar <br /> Jammu and Kashmir <br />
            0123456789
          </p>
          <p>
            Srinagar <br /> Jammu and Kashmir <br />
            0123456789
          </p>
          <p>
            Srinagar <br /> Jammu and Kashmir <br />
            0123456789
          </p>
          <p>
            Srinagar <br /> Jammu and Kashmir <br />
            0123456789
          </p>
        </div>
        <div className="flex-[1] relative flex">
          <h1>Working Hours</h1>
          <p>
            Monday - Friday <br /> 9:00 - 22:00
          </p>
          <p>
            Saturday - Sunday <br />
            12:00 - 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
