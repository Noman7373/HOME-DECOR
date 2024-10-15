import React from "react";
import mainImage from "../assets/furniture1.avif";

const Main = () => {
  return (
    <>
      <div className="px-[20px] overflow-x-hidden pt-[20px] pb-[30px]">
        <div className="flex flex-col my-[50px] gap-[30px] justify-around md:flex-row items-center">
          <div className="flex flex-col gap-4 max-w-[500px]">
            <h1 className="text-[30px] md:text-[50px] font-bold">
              Home of quality furniture
            </h1>
            <p className="text-slate-700">
              Welcome to HomeDecor , your one-stop shop for stylish furniture
              and home decor
            </p>
          </div>
          <div>
            <img src={mainImage} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
