import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  console.log(id);
  const product = useSelector((state) => state.cart.allProducts);
  const { category, name, img } = product[0];

  return (
    <>
      <div className="px-[30px] py-[70-px] mt-[130px] bg-slate-100">
        <div className="bg-slate-100  flex md:flex-row flex-col justify-around rounded-lg overflow-y-auto">
          <div className="max-w-[350px]">
            <img src={img} alt="" className="w-full" />
          </div>

          <div className="flex flex-col justify-between">
            <h3 className="uppercase text-[16px] text-slate-800 font-semibold">
              Name
            </h3>
            <h1 className="uppercase text-black font-bold text-[22px]"></h1>
            <p className="text-[16px] uppercase text-slate-800 font-semibold">
              Price
            </p>
            <p className="flex text-[16px]">
              fsd{" "}
              <span className="line-through text-[16px] text-slate-600"></span>
            </p>
            <h3 className="text-[16px] uppercase text-slate-800">
              Description
            </h3>
            <p className="text-[15px] text-slate-600 max-w-[500px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa sed
              ut ab vero ea unde odio explicabo minus nobis obcaecati?
              Excepturi, quas quia. Impedit animi reprehenderit praesentium
              soluta? Totam, sunt!
            </p>
            <div className="flex flex-row justify-start items-start gap-4 my-5">
              <button
                className="bg-slate-800 px-[22px] py-[10px] transition ease-in delay-150 hover:-translate-y-1 hover:scale-100 rounded text-[14px] md:text-[17px]
              text-slate-50 border"
              >
                Add To Cart
              </button>
              <button
                className="px-[22px] py-[10px] transition ease-in delay-150 hover:-translate-y-1 hover:scale-100 rounded text-[14px] md:text-[17px]
              text-slate-800 border border-slate-800"
              >
                Add To Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default ProductDetail;
