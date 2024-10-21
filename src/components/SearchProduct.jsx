import React from "react";

const SearchProduct = () => {
  return (
    <>
      <div className="z-[100] bg-[rgba(0, 0, 0, .5)] pl-[20px] pr-[20px] w-full h-full flex flex-row justify-center top-0 right-0 left-0 fixed ">
        <div className="mb-[20px] pb-[20px] mt-[20px] px-[20px] pr-[20px] lg:min-w-[800px] md:min-w-[600px] sm:min-w-[400px] xs:min-w-[300px] bg-slate-50 rounded relative overflow-y-auto">
          {/* <label htmlFor="SearchInput"></label> */}
          <input
            type="text"
            placeholder="Search Product Here"
            className="w-full mt-[30px] outline-0 px-3 text-[20px] border-b-[3px] border-black"
          />
        </div>
      </div>
    </>
  );
};

export default SearchProduct;
