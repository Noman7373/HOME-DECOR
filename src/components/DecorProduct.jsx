import { BiCartAdd } from "react-icons/bi";
import { HiHeart } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductWishList, addToCart } from "../store/cartslice";
const DecorProduct = () => {
  const [input, setinputValue] = useState("Lights");
  const dispatch = useDispatch();
  // Get Data from Cartslice store
  const livingRoomItems = useSelector((state) => state.cart.allProducts);

  function handleAddToCart(id, name, img, description, price, actualPrice) {
    let products = {
      id,
      name,
      img,
      description,
      price,
      actualPrice,
      quantity: 1,
    };
    dispatch(addToCart(products));
  }

  // Handle Wishlist Products
  function handleWishList(id, name, img, price, actualPrice) {
    let favProducts = { id, name, img, price, actualPrice };
    dispatch(addProductWishList(favProducts));
  }
  const handleFilter = (e) => {
    let inputValue = e.target.value;
    if (inputValue == "") {
      inputValue = "BEDS";
    }
    setinputValue(inputValue);
  };
  // Mataching items category the data to the input
  const allBedroomsProducts = livingRoomItems.filter(
    (items) => items.category.toUpperCase() == input.toUpperCase()
  );
  return (
    <>
      <div className="py-[40px] pt-[130px] px-6">
        <div className="flex md:px-[20px] justify-between items-center">
          <h1 className="uppercase my-[20px] p-1 text-center border-b-[4px] border-slate-500 shadow-lg w-fit text-[25px] md:text-[40px]">
            {input}
          </h1>
          <div className="w-[150px] flex flex-col gap-1 max-[410px]:w-[120px]">
            <p className="text-black font-semibold text-[20px] md:text-[22px]">
              Filter Items
            </p>
            <form action="#">
              <select
                onChange={(e) => handleFilter(e)}
                name="select"
                id="select"
                value={input}
                className="w-full bg-black text-white px-2 py-2 rounded cursor-pointer md:text-[18px]"
              >
                <option value="Lights">Lights</option>
                <option value="Pillows">Pillows</option>
                <option value="Throw">Throw</option>
              </select>
            </form>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {allBedroomsProducts.map(
            ({ id, name, img, description, price, actualPrice }) => {
              return (
                <div
                  key={id}
                  className="rounded-2xl relative flex flex-col justify-center items-center w-[270px] shadow-2xl my-[10px] max-[500px]:w-[190px]"
                >
                  <p className="absolute top-4 left-2 bg-slate-500 text-white p-1 italic rounded text-[15px] z-10">
                    New
                  </p>
                  <Link
                    to={`/products-detail/${id}`}
                    className="max-w-[150px] h-[130px] p-2"
                  >
                    <img
                      src={img}
                      alt={name}
                      className="mt-2 w-full transition ease-out delay-150 hover:-translate-y-1 hover:scale-105 h-full"
                    />
                  </Link>
                  <div className="mt-6 flex w-full rounded-b-md bottom-0 left-0 right-0 p-2 bg-slate-700 flex-row justify-between">
                    <div className="">
                      <p className="md-text-[17px] text-[15px] text-white uppercase font-bold">
                        {name}
                      </p>
                      <div className="flex gap-2">
                        <span className="text-slate-400 line-through">
                          {actualPrice}
                        </span>
                        <p className="text-white font-bold ">${price}</p>
                      </div>
                    </div>
                    <div className="text-white flex gap-2 justify-center items-center">
                      <button
                        className="hover:text-slate-400 text-[30px]"
                        onClick={() =>
                          handleWishList(id, name, img, price, actualPrice)
                        }
                      >
                        <HiHeart />
                      </button>
                      <button
                        className="hover:text-slate-400 text-[30px]"
                        onClick={() =>
                          handleAddToCart(
                            id,
                            name,
                            img,
                            description,
                            price,
                            actualPrice
                          )
                        }
                      >
                        <BiCartAdd />
                      </button>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </>
  );
};

export default DecorProduct;