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
    console.log(extra);
  };
  const handleCreate = async() => {
    
  };
  return (
    <div className="containers w-[100vw] h-[100vh] bg-[rgba(245,240,240,0.52)] fixed top-0  z-[999] flex items-center justify-center ">
      <div className="wrapper w-[500px] bg-white px-12 py-3 flex rounded-3xl justify-between flex-col relative">
        <span onClick={() => setClose(true)} className="close w-8 h-8 bg-[black] text-white rounded-[50%] flex items-center justify-center cursor-pointer absolute top-[-10px] right-[-10px] ">
          X
        </span>
        <h1 className="text-2xl">Add a new Pizza</h1>
        <div className="item flex flex-col mb-3">
          <label className="label mb-1 text-sm font-medium">Choose an image</label>
          <input
            type="file"
            onChange={(e: any) => setFile(e.target.files[0])}
          />
        </div>
        <div className="item flex flex-col mb-3">
          <label className="label mb-1 text-sm font-medium">Title</label>
          <input type="text" onChange={(e: any) => setTitle(e.target.value)} />
        </div>
        <div className="item flex flex-col mb-3">
          <label className="label mb-1 text-sm font-medium">Desc</label>
          <textarea rows={4} onChange={(e: any) => setDesc(e.target.value)} />
        </div>
        <div className="item flex flex-col mb-3">
          <label className="label mb-1 text-sm font-medium">Prices</label>
          <input
            type="number"
            placeholder="Small"
            className="input border-0 border-b-2 border-solid border-[gray] outline-none"
            onChange={(e: any) => changePrice(e, 0)}
          />
          <input
            type="number"
            placeholder="Medium"
            className="input border-0 border-b-2 border-solid border-[gray] outline-none"
            onChange={(e: any) => changePrice(e, 1)}
          />
          <input
            type="number"
            placeholder="Large"
            className="input border-0 border-b-2 border-solid border-[gray] outline-none"
            onChange={(e: any) => changePrice(e, 2)}
          />
        </div>
        <div className="item flex flex-col mb-3">
          <label className="label mb-1 text-sm font-medium">Extra</label>
          <div className="extra">
            <input
              type="text"
              placeholder="Item"
              name="text"
              onChange={handleExtraInput}
            />
            <input
              type="number"
              placeholder="Price"
              name="text"
              onChange={handleExtraInput}
            />
            <button className="extraButton" onClick={handleExtra}>
              Add
            </button>
          </div>
          <div className="extraItems">
            {extraOptions.map((option: any) => (
              <span className="extraItem" key={option.text}>
                {option.text}
              </span>
            ))}
          </div>
          <button className="addButton" onClick={handleCreate}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default Add;
