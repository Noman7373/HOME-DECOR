import React from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

import { RxCross1 } from "react-icons/rx";
import { useSelector } from "react-redux";

const Productcart = () => {
  const cartItems = useSelector((state) => state.cart.data);
  console.log(cartItems);

  return (
    <>
      <div className="fixed bg-slate-800 overflow-y-auto h-full w-[470px] z-50 right-0 flex flex-col">
        <div className="flex justify-end relative ">
          <button className="absolute top-8 right-6 bg-white rounded-full p-2 hover:bg-red-600 hover:text-white">
            <RxCross1 size={30} />{" "}
          </button>
        </div>
        <div>
          <div className="flex px-6 pt-[100px] justify-around gap-6">
            <div className="rounded h-full max-w-[150px]">
              <img src="" alt="" className="w-full h-full" />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-slate-50 uppercase">Name</h3>
              <p className="flex flex-row gap-6 items-center text-[15px] md:text-[20px] text-slate-50">
                $250<span className="text-slate-500 line-through">$342</span>
              </p>
              <div className="flex flex-row gap-2 justify-center items-center">
                {/* <span className="bg-white rounded-full "> */}
                <CiCircleMinus
                  size={25}
                  className="text-white rounded-full hover:bg-yellow-500 hover:text-black cursor-pointer"
                />
                {/* </span> */}
                <p className="flex flex-row gap-2 items-center justify-center text-[15px] md:text-[20px] text-slate-50">
                  X2<span className="text-white">$500.00</span>
                </p>

                <CiCirclePlus
                  size={25}
                  className="text-white rounded-full hover:bg-green-500 hover:text-black cursor-pointer"
                />
              </div>
              <button className="max-w-24 border border-slate-500 bg-transparent text-slate-500 px-2 py-1">
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Productcart;
