import React from "react";
import { BiSearch } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="h-24 w-full bg-black flex justify-around text-center items-center text-white shadow-2xl">
        <div>
          <h1 className="text-[30px] text-slate-100 font-bold">HOME DECOR</h1>
        </div>

        <ul className="hidden gap-6 text-[16px] md:flex">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link>
            <li>Bedroom</li>
          </Link>
          <Link>
            <li>Living Room</li>
          </Link>
          <Link>
            <li>Dinning Room</li>
          </Link>
          <Link>
            <li>Office</li>
          </Link>
          <Link>
            <li>Outdoor</li>
          </Link>
          <Link>
            <li>Decor</li>
          </Link>
          <Link>
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

        <div className="flex gap-2">
          <button className="hover:text-slate-400 text-[30px]">
            <BiSearch />
          </button>
          <button className="hover:text-slate-400 text-[30px]">
            <FaHeart />
          </button>
          <button className="hover:text-slate-400 text-[30px]">
            <PiShoppingCartSimpleFill />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;