import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Productcart from "./Productcart";
import Whishlist from "./Whishlist";

const Navbar = () => {
  const [cartShow, setCartShow] = useState(false);
  const [WishlistShow, setWishlistShow] = useState(false);
  const addToCartProductQuantity = useSelector((state) => state.cart.data);

  function handleCartSlide() {
    setCartShow((prev) => !prev);
  }
  function handleWishlistSlide() {
    setWishlistShow((prev) => !prev);
  }
  return (
    <>
      <nav className=" h-24 w-full bg-black flex justify-around text-center items-center text-white shadow-2xl fixed z-20">
        <div>
          <h1 className="uppercase text-[20px] md:text-[27px] text-slate-100 font-bold">
            HomeStyle Mart
          </h1>
        </div>

        <ul className="hidden gap-6 text-[16px] md:flex">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "border-b" : "text-white")}
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to="/bedroom"
            className={({ isActive }) => (isActive ? "border-b" : "text-white")}
          >
            <li>Bedroom</li>
          </NavLink>
          <NavLink
            to="/livingroom"
            className={({ isActive }) => (isActive ? "border-b" : "text-white")}
          >
            <li>Living Room</li>
          </NavLink>
          <NavLink
            to="/dinningroom"
            className={({ isActive }) => (isActive ? "border-b" : "text-white")}
          >
            <li>Dinning Room</li>
          </NavLink>
          <NavLink
            to="/office"
            className={({ isActive }) => (isActive ? "border-b" : "text-white")}
          >
            <li>Office</li>
          </NavLink>
          <NavLink
            to="/Decor"
            className={({ isActive }) => (isActive ? "border-b" : "text-white")}
          >
            <li>Decor</li>
          </NavLink>
          <NavLink
            to="/kitchen"
            className={({ isActive }) => (isActive ? "border-b" : "text-white")}
          >
            <li>Kitchen</li>
          </NavLink>
        </ul>
{/* 
        {addToCartProductQuantity.length > 0 ? (
          <span className="fixed top-4 right-7 text-white">
            {addToCartProductQuantity.length}
          </span>
        ) : (
          <span className="fixed top-4 right-10 text-white">0</span>
        )} */}
        <div className="flex gap-2">
          <button className="border border-white p-1 align-middle rounded">
            Login
          </button>
          <button className="border border-white p-1 align-middle rounded bg-white text-black font-bold">
            Signin
          </button>
          <button className="hover:text-slate-400 text-[30px]">
            <BiSearch />
          </button>
          <button
            className="hover:text-slate-400 text-[30px]"
            onClick={handleWishlistSlide}
          >
            <FaHeart />
          </button>

          <button
            className="hover:text-slate-400 text-[30px]"
            onClick={handleCartSlide}
          >
            <PiShoppingCartSimpleFill />
          </button>
        </div>
      </nav>
      {/* imporing add to cart side bar components */}
      <Productcart showCart={cartShow} handleFunction={handleCartSlide} />
      <Whishlist
        showWishList={WishlistShow}
        handleWishListFunction={handleWishlistSlide}
      />

      {/* Menu for small devices */}
    </>
  );
};

export default Navbar;
