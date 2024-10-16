import React from "react";
import { Link } from "react-router-dom";

const Allnewarrivalitems = ({ items }) => {
  return (
    <>
      <div className="rounded-2xl relative flex flex-col justify-center items-center w-[300px] shadow-2xl my-[10px]">
        <p className="absolute top-4 left-2 bg-slate-500 text-white p-1 italic rounded text-[15px]">
          New
        </p>
        <Link className="max-w-[150px] h-[130px] p-2">
          <img
            src={items.img}
            alt={items.name}
            className="mt-2 w-full transition ease-out delay-150 hover:-translate-y-1 hover:scale-105 h-full"
          />
        </Link>
        <div className="mt-6 flex w-full rounded-b-md bottom-0 left-0 right-0 p-2 bg-slate-700 flex-row justify-between">
          <div className="">
            <p className="md-text-[17px] text-[15px] text-white uppercase font-bold">
              {items.name}
            </p>
            <div className="flex gap-2">
              <span className="text-slate-400 line-through">
                {items.actualPrice}
              </span>
              <p className="text-white font-bold ">{items.price}</p>
            </div>
          </div>
          <div className="text-white flex gap-2 justify-center items-center">
            <button className="hover:text-slate-400 text-[30px]">
              {items.icon1}
            </button>
            <button className="hover:text-slate-400 text-[30px]">
              {items.icon2}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Allnewarrivalitems;
