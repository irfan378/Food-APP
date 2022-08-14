import axios from "axios";
import React, { useState } from "react";

const Add = ({ setClose }: any) => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [prices, setPrices] = useState<number[]>([]);
  const [extraOptions, setExtraOptions] = useState([]);
  const [extra, setExtra] = useState<any>(null);

  const changePrice = (e: any, index: number) => {
    const currentPrices: number[] = prices;
    currentPrices[index] = e.target.value;
    setPrices(currentPrices);
  };
  const handleExtraInput = (e: any) => {
    setExtra({ ...extra, [e.target.name]: e.target.value });
  };
  const handleExtra = (e: any) => {
    setExtraOptions((prev): any => [...prev, extra]);
  };
  const handleCreate = async () => {
    const data: any = new FormData();
    data.append("file", file);
    data.append("upload_preset", "uploads");
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dh8t2zkjl/image/upload",
        data
      );
      const { url } = uploadRes.data;
      const newProduct = { title, desc, prices, extraOptions, img: url };
      await axios.post("https://food-app-nine-pearl.vercel.app/api/products", newProduct);
      setClose(true);
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div className="containers w-[100vw] h-[100vh] bg-[rgba(245,240,240,0.52)] fixed top-0  z-[999] flex items-center justify-center ">
      <div className="wrapper w-[500px] bg-white px-12 py-3 flex rounded-3xl justify-between flex-col relative">
        <span
          onClick={() => setClose(true)}
          className="close w-8 h-8 bg-[black] text-white rounded-[50%] flex items-center justify-center cursor-pointer absolute top-[-10px] right-[-10px] "
        >
          X
        </span>
        <h1 className="text-2xl">Add a new Pizza</h1>
        <div className="item flex flex-col mb-3">
          <label className="label mb-1 text-sm font-medium">
            Choose an image
          </label>
          <input
            type="file"
            onChange={(e: any) => setFile(e.target.files[0])}
            className="border-2"
          />
        </div>
        <div className="item flex flex-col mb-3">
          <label className="label mb-1 text-sm font-medium">Title</label>
          <input
            type="text"
            className="border-2"
            onChange={(e: any) => setTitle(e.target.value)}
          />
        </div>
        <div className="item flex flex-col mb-3">
          <label className="label mb-1 text-sm font-medium">Desc</label>
          <textarea
            rows={4}
            className="border-2"
            onChange={(e: any) => setDesc(e.target.value)}
          />
        </div>
        <div className="item flex flex-col mb-3">
          <label className="label mb-1 text-sm font-medium">Prices</label>
          <div className="priceContainer flex justify-between">
            <input
              type="number"
              placeholder="Small"
              className="input border-0 w-[25%] border-b-2 border-solid border-[gray] outline-none"
              onChange={(e: any) => changePrice(e, 0)}
            />
            <input
              type="number"
              placeholder="Medium"
              className="input w-[25%] border-0 border-b-2 border-solid border-[gray] outline-none"
              onChange={(e: any) => changePrice(e, 1)}
            />
            <input
              type="number"
              placeholder="Large"
              className="input w-[25%] border-0 border-b-2 border-solid border-[gray] outline-none"
              onChange={(e: any) => changePrice(e, 2)}
            />
          </div>
        </div>
        <div className="item flex flex-col mb-3">
          <label className="label mb-1 text-sm font-medium">Extra</label>
          <div className="extra flex justify-between">
            <input
              type="text"
              placeholder="Item"
              name="text"
              className="border-2 w-[25%]"
              onChange={handleExtraInput}
            />
            <input
              type="number"
              placeholder="Price"
              name="price"
              className="border-2 w-[25%]"
              onChange={handleExtraInput}
            />
            <button
              className="extraButton border-2 w-[25%]"
              onClick={handleExtra}
            >
              Add
            </button>
          </div>
          <div className="extraItems mx-0 my-3  flex flex-wrap">
            {extraOptions.map((option: any) => (
              <span
                className="extraItem px-1 py-1 text-sm border-2 border-solid border-[tomato] bg-white text-[tomato] mr-3 rounded-xl cursor-pointer"
                key={option.text}
              >
                {option.text}
                {option.price}
              </span>
            ))}
          </div>
          <button
            className="addButton w-[25%] border-0 bg-[teal] text-white font-medium cursor-pointer py-1 px-0 self-end"
            onClick={handleCreate}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default Add;
