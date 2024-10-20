import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { Link } from "react-router-dom";
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
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/bedroom">
            <li>Bedroom</li>
          </Link>
          <Link to="/livingroom">
            <li>Living Room</li>
          </Link>
          <Link to="/dinningroom">
            <li>Dinning Room</li>
          </Link>
          <Link to="/office">
            <li>Office</li>
          </Link>
          <Link to="/Decor">
            <li>Decor</li>
          </Link>
          <Link to="/kitchen">
            <li>Kitchen</li>
          </Link>
        </ul>

        <div className="flex gap-4">
          <button className="border border-white p-1 align-middle rounded">
            Login
          </button>
          <button className="border border-white p-1 align-middle rounded bg-white text-black font-bold">
            Signin
          </button>
        </div>
        {addToCartProductQuantity.length > 0 ? (
          <span className="fixed top-4 right-7 text-white">
            {addToCartProductQuantity.length}
          </span>
        ) : (
          <span className="fixed top-4 right-10 text-white">0</span>
        )}
        <div className="flex gap-2">
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
    </>
  );
};

export default Navbar;
