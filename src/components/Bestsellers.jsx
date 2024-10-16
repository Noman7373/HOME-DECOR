import img1 from "../assets/cushion7.jpg";
import img2 from "../assets/Best Seller/chair-realistic-illustration_1284-9507.avif";
import img3 from "../assets/Best Seller/cushion1.avif";
import img4 from "../assets/Best Seller/sittingR6.avif";
import img5 from "../assets/Best Seller/cushion6.webp";
import img6 from "../assets/Best Seller/officeF8.avif";
import img7 from "../assets/Best Seller/officeF9.avif";
import img8 from "../assets/Best Seller/sittingR4.avif";

import { HiHeart } from "react-icons/hi2";
import { BiCartAdd } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartslice";

const Bestsellers = () => {
  const dispatch = useDispatch();
  const bestSellersProduct = [
    {
      id: 0,
      name: "QUALTIY RED",
      img: img1,
      description:
        "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
      price: "$250",
      actualPrice: "$240",
      icon1: <HiHeart />,
      icon2: <BiCartAdd />,
    },
    {
      id: 1,
      name: "QUALITY RED",
      img: img2,
      description:
        "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
      price: "$270",
      actualPrice: "$250",
      icon1: <HiHeart />,
      icon2: <BiCartAdd />,
    },
    {
      id: 2,
      name: "QUALITY INTEROR",
      img: img3,
      description:
        "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
      price: "$300",
      actualPrice: "$250",
      icon1: <HiHeart />,
      icon2: <BiCartAdd />,
    },
    {
      id: 3,
      name: "EXPENSIVE SOFA",
      img: img4,
      description:
        "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
      price: "$320",
      actualPrice: "$290",
      icon1: <HiHeart />,
      icon2: <BiCartAdd />,
    },
    {
      id: 4,
      name: "FULL INTEROR",
      img: img5,
      description:
        "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
      price: "$150",
      actualPrice: "$135",
      icon1: <HiHeart />,
      icon2: <BiCartAdd />,
    },
    {
      id: 5,
      name: "HOME TABLE",
      img: img6,
      description:
        "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
      price: "$210",
      actualPrice: "$190",
      icon1: <HiHeart />,
      icon2: <BiCartAdd />,
    },
    {
      id: 6,
      name: "READING SETUP",
      img: img7,
      description:
        "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
      price: "$270",
      actualPrice: "$250",
      icon1: <HiHeart />,
      icon2: <BiCartAdd />,
    },
    {
      id: 7,
      name: "SMOOTH SOFA",
      img: img8,
      description:
        "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
      price: "$350",
      actualPrice: "$320",
      icon1: <HiHeart />,
      icon2: <BiCartAdd />,
    },
  ];

  function handleAddToCart(id, name, img, price) {
    let products = { id, name, img, price };
    dispatch(addToCart(products));
  }
  return (
    <>
      <div className="py-[40px]">
        <div>
          <h1 className="uppercase my-[20px] p-1 text-center border-b-[4px] border-slate-500 shadow-lg w-fit text-[25px] md:text-[40px]">
            BEST SELLER
          </h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {bestSellersProduct.map(
            ({ id, name, img, price, actualPrice, icon1, icon2 }) => {
              return (
                <div
                  key={id}
                  className="rounded-2xl relative flex flex-col justify-center items-center w-[270px] shadow-2xl my-[10px] max-[500px]:w-[190px]"
                >
                  <p className="absolute top-4 left-2 bg-slate-500 text-white p-1 italic rounded text-[15px] z-10">
                    New
                  </p>
                  <Link className="max-w-[150px] h-[130px] p-2">
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
                        <p className="text-white font-bold ">{price}</p>
                      </div>
                    </div>
                    <div className="text-white flex gap-2 justify-center items-center">
                      <button className="hover:text-slate-400 text-[30px]">
                        {icon1}
                      </button>
                      <button
                        className="hover:text-slate-400 text-[30px]"
                        onClick={() => handleAddToCart(id, name, price, img)}
                      >
                        {icon2}
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

export default Bestsellers;
