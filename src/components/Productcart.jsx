import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { removeItemCart } from "../store/cartslice";

const Productcart = ({ showCart, handleFunction }) => {
  const cartItems = useSelector((state) => state.cart.data);
  console.log(cartItems.id);
  const dispatch = useDispatch();
  
  const handleRemoveItems = (id) => {
    dispatch(removeItemCart(id));
    alert("Item removed from cart");
  };

  return (
    <>
      <div
        className={`${
          showCart
            ? "fixed bg-slate-800 overflow-y-auto h-full w-[470px] z-50 right-0 flex flex-col px-2"
            : "right-[-100px]"
        }`}
      >
        <div className="flex justify-end relative">
          <button
            className="absolute top-8 right-6 bg-white rounded-full p-2 hover:bg-red-600 hover:text-white"
            onClick={handleFunction}
          >
            <RxCross1 size={30} />
          </button>
        </div>

        {Array.isArray(cartItems) && cartItems.length > 0 ? (
          cartItems.map(({ id, name, img, price, actualPrice, quantity }) => (
            <div
              key={id}
              className="flex mt-[120px] justify-around items-center gap-2 p-2 border-b-[2px] border-b-slate-700"
            >
              <div className="max-w-[150px]">
                <img
                  src={img}
                  alt={name}
                  className="rounded-2xl w-full h-[150px]"
                />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-slate-50 uppercase">{name}</h3>
                <p className="flex flex-row gap-6 items-center text-[15px] md:text-[20px] text-slate-50">
                  {price}
                  <span className="text-slate-500 line-through">
                    {actualPrice}
                  </span>
                </p>
                <div className="flex flex-row gap-2 justify-center items-center">
                  <CiCircleMinus
                    size={25}
                    className="text-white rounded-full hover:bg-yellow-500 hover:text-black cursor-pointer"
                  />
                  <p className="flex flex-row gap-1 items-center justify-center text-[15px] md:text-[20px] text-slate-50">
                    {quantity}
                    <span className="text-white">
                      ${(price * quantity).toFixed(2)}
                    </span>
                  </p>
                  <CiCirclePlus
                    size={25}
                    className="text-white rounded-full hover:bg-green-500 hover:text-black cursor-pointer"
                  />
                </div>
                <button
                  className="max-w-24 rounded border-[3px] border-slate-500 bg-transparent text-slate-400 px-2 py-1"
                  onClick={() => handleRemoveItems(id)} // Fixed here
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white text-center mt-6">Your cart is empty</p>
        )}

        <div
          className={`${
            showCart
              ? "flex flex-col gap-4 justify-center items-center bottom-0 left-[35%] mb-6"
              : "hidden"
          }`}
        >
          <p className="flex justify-center items-center gap-2 text-white uppercase">
            SUBTOTAL <span>Total Price</span>
          </p>
          <button className="text-white bg-green-500 rounded px-6 py-2 hover:bg-black">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Productcart;
