import React from "react";

const AddButton = ({ setClose }:any) => {
  return (
    <div onClick={() => setClose(false)} className="main py-3 my-5 mx-2 bg-[rgb(207,8,8)] w-40 rounded-xl text-white font-medium text-center cursor-pointer">
      Add New Pizza
    </div>
  );
};

export default AddButton;
