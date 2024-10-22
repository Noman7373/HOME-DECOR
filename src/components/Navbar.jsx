import React, { useState } from "react";
import { BiMenu, BiSearch } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { Link, NavLink } from "react-router-dom";
// import { useSelector } from "react-redux";
import Productcart from "./Productcart";
import Whishlist from "./Whishlist";
import { TbArrowsCross } from "react-icons/tb";
import SearchProduct from "./SearchProduct";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [cartShow, setCartShow] = useState(false);
  const [WishlistShow, setWishlistShow] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  // const addToCartProductQuantity = useSelector((state) => state.cart.data);

  //Handle Side Menu for small Screen
  function handleShowMenu() {
    setShowMenu((prev) => !prev);
  }

  function handleCartSlide() {
    setCartShow((prev) => !prev);
  }
  function handleWishlistSlide() {
    setWishlistShow((prev) => !prev);
  }

  function handleSearch() {
    setShowSearch((prev) => !prev);
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

        <div className="flex justify-center items-center gap-2">
          <Link to="/login">
            <button className="border border-white p-1 align-middle rounded xs:hidden md:block">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="border border-white p-1 align-middle rounded bg-white text-black font-bold xs:hidden md:block">
              Signup
            </button>
          </Link>
          <button
            className="hover:text-slate-400 text-[30px]"
            onClick={handleSearch}
          >
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
            {/* {addToCartProductQuantity.length > 0 ? (
          <span className="raletive px-2 text-[2px] font-semibold rounded-full  text-slate-50">
            {addToCartProductQuantity.length}
          </span>
        ) : (
          <span className="absolute top-4 right-10 text-white">0</span>
        )} */}
            <PiShoppingCartSimpleFill />
          </button>

          {/* Menu button for small devices */}
          <button
            className="hover:text-slate-400 text-[30px] md:hidden xs:flex"
            onClick={handleShowMenu}
          >
            {showMenu ? <TbArrowsCross /> : <BiMenu />}
          </button>
        </div>
      </nav>
      {/* imporing add to cart side bar components */}
      <Productcart showCart={cartShow} handleFunction={handleCartSlide} />
      <Whishlist
        showWishList={WishlistShow}
        handleWishListFunction={handleWishlistSlide}
      />

      {/* search components */}
      <SearchProduct showSearch={showSearch} handleSearch={handleSearch} />

      {/* Menu for small devices */}

      <aside
        className={`${
          showMenu
            ? "h-full fixed transition duration-500 left-0 w-[220px] bg-black z-50 md:hidden"
            : "left-[-300px] transition duration-500 h-full fixed w-[220px] bg-black z-50 md:hidden "
        }`}
      >
        <ul className="text-slate-100 flex flex-col gap-3 my-[100px] justify-center items-center">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "border-b" : "text-white")}
            onClick={handleShowMenu}
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to="/bedroom"
            className={({ isActive }) => (isActive ? "border-b" : "text-white")}
            onClick={handleShowMenu}
          >
            <li>Bedroom</li>
          </NavLink>
          <NavLink
            to="/livingroom"
            className={({ isActive }) => (isActive ? "border-b" : "text-white")}
            onClick={handleShowMenu}
          >
            <li>Living Room</li>
          </NavLink>
          <NavLink
            to="/dinningroom"
            className={({ isActive }) => (isActive ? "border-b" : "text-white")}
            onClick={handleShowMenu}
          >
            <li>Dinning Room</li>
          </NavLink>
          <NavLink
            to="/office"
            className={({ isActive }) => (isActive ? "border-b" : "text-white")}
            onClick={handleShowMenu}
          >
            <li>Office</li>
          </NavLink>
          <NavLink
            to="/Decor"
            className={({ isActive }) => (isActive ? "border-b" : "text-white")}
            onClick={handleShowMenu}
          >
            <li>Decor</li>
          </NavLink>
          <NavLink
            to="/kitchen"
            className={({ isActive }) => (isActive ? "border-b" : "text-white")}
            onClick={handleShowMenu}
          >
            <li>Kitchen</li>
          </NavLink>
          <button className="border border-white p-1 align-middle rounded">
            Login
          </button>
          <button className="border border-white p-1 align-middle rounded bg-white text-black font-bold ">
            Signin
          </button>
        </ul>
      </aside>
    </>
  );
};

export default Navbar;
