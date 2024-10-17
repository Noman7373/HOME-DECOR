import img1 from "../assets/Bedroom/bed/baby-bed.avif";
import img2 from "../assets/Bedroom/bed/bed1.avif";
import img3 from "../assets/Bedroom/bed/bed2.avif";
import img4 from "../assets/Bedroom/bed/doublebed.avif";
import img5 from "../assets/Bedroom/bed/estlle.avif";
import img6 from "../assets/Bedroom/bed/jumiper-bed.avif";
import img7 from "../assets/Bedroom/bed/leather-bed.avif";
import img8 from "../assets/Bedroom/bed/mockup.avif";
import img10 from "../assets/Bedroom/Dresser/abbey-medium-chest.avif";
import img11 from "../assets/Bedroom/Dresser/ackley-dresser.avif";
import img12 from "../assets/Bedroom/Dresser/commode.avif";
import img13 from "../assets/Bedroom/Dresser/blanklargeframe.avif";
import img14 from "../assets/Bedroom/Dresser/black-eliza-dresser.avif";
import img15 from "../assets/Bedroom/Dresser/drawer.avif";
import img16 from "../assets/Bedroom/Dresser/everson-dresser.avif";
import img17 from "../assets/Bedroom/Dresser/longtv stand.avif";
import img18 from "../assets/Bedroom/Dresser/plantdesk (1).avif";
import img20 from "../assets/Bedroom/Dresser/Roque-Dresser-T1-0101.avif";
import img21 from "../assets/Bedroom/Dresser/setchair.avif";
import img22 from "../assets/Bedroom/Nightstand/Abbey-Small.avif";
import img23 from "../assets/Bedroom/Nightstand/Abbey-Small.avif";
// import img24 from "../assets/Bedroom/Nightstand/about.png";
import img25 from "../assets/Bedroom/Nightstand/Ackley.avif";
import img26 from "../assets/Bedroom/Nightstand/Abbey-Small.avif";
import img27 from "../assets/Bedroom/Nightstand/Colette.avif";
import img28 from "../assets/Bedroom/Nightstand/everson.avif";
import img29 from "../assets/Bedroom/Nightstand/Isla.avif";
import img30 from "../assets/Bedroom/Nightstand/soffia.avif";
import img31 from "../assets/Bedroom/Nightstand/tina.avif";

import { BiCartAdd } from "react-icons/bi";
import { HiHeart } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartslice";

const Bedrooms = () => {
  const [input, setinputValue] = useState("beds");
  const dispatch = useDispatch();

  function handleAddToCart(id, name, img, price, actualPrice) {
    let products = { id, name, img, price, actualPrice, quantity: 1 };
    dispatch(addToCart(products));
  }
  const handleFilter = (e) => {
    let inputValue = e.target.value;
    if (inputValue == "") {
      inputValue = "BEDS";
    }
    setinputValue(inputValue);
  };
  const bestSellersProduct = [
    {
      category: "BEDS",
      id: 16,
      name: "BABY BED",
      img: img1,
      description:
        "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
      price: 250,
      actualPrice: "$240",
      icon1: <HiHeart />,
      icon2: <BiCartAdd />,
    },
    {
      category: "BEDS",
      id: 17,
      name: "JUMIPER BED",
      img: img2,
      description:
        "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
      price: 270,
      actualPrice: "$250",
      icon1: <HiHeart />,
      icon2: <BiCartAdd />,
    },
    {
      category: "BEDS",
      id: 18,
      name: "ESTLLE BED",
      img: img3,
      description:
        "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
      price: 300,
      actualPrice: "$250",
      icon1: <HiHeart />,
      icon2: <BiCartAdd />,
    },
    {
      category: "BEDS",
      id: 19,
      name: "DOUBLE BED",
      img: img4,
      description:
        "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
      price: 320,
      actualPrice: "$290",
      icon1: <HiHeart />,
      icon2: <BiCartAdd />,
    },
    {
      category: "BEDS",
      id: 20,
      name: "LEATHER BED",
      img: img5,
      description:
        "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
      price: 150,
      actualPrice: "$135",
      icon1: <HiHeart />,
      icon2: <BiCartAdd />,
    },
    {
      category: "BEDS",
      id: 21,
      name: "AUTHENTIC BED",
      img: img6,
      description:
        "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
      price: 210,
      actualPrice: "$190",
      icon1: <HiHeart />,
      icon2: <BiCartAdd />,
    },
    {
      category: "BEDS",
      id: 22,
      name: "PURE WHITE",
      img: img7,
      description:
        "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
      price: 270,
      actualPrice: "$250",
      icon1: <HiHeart />,
      icon2: <BiCartAdd />,
    },
    {
      category: "BEDS",
      id: 23,
      name: "LEATHER BED",
      img: img8,
      description:
        "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
      price: 350,
      actualPrice: "$320",
      icon1: <HiHeart />,
      icon2: <BiCartAdd />,
    },
    {
      category: "DRESSERS",
      id: 24,
      name: "Roque Dresser",
      img: img10,
      description:
        "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
      price: 100,
      actualPrice: "$120",
      icon1: <HiHeart />,
      icon2: <BiCartAdd />,
    },
    {
      category: "DRESSERS",
      id: 25,
      name: "Large frame",
      img: img11,
      description:
        "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
      price: 150,
      actualPrice: "$190",
      icon1: <HiHeart />,
      icon2: <BiCartAdd />,
    },
    {
      category: "DRESSERS",
      id: 26,
      name: "Commode",
      img: img12,
      description:
        "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
      price: 100,
      actualPrice: "$150",
      icon1: <HiHeart />,
      icon2: <BiCartAdd />,
    },
    {
      category: "DRESSERS",
      id: 27,
      name: "Portable drawer",
      img: img13,
      description:
        "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
      price: 110,
      actualPrice: "$130",
      icon1: <HiHeart />,
      icon2: <BiCartAdd />,
    },
    {
      category: "DRESSERS",
      id: 28,
      name: "QUALITY BED",
      img: img14,
      description:
        "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
      price: 350,
      actualPrice: "$320",
      icon1: <HiHeart />,
      icon2: <BiCartAdd />,
    },
    {
      category: "DRESSERS",
      id: 29,
      name: "QUALITY BED",
      img: img15,
      description:
        "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
      price: 350,
      actualPrice: "$320",
      icon1: <HiHeart />,
      icon2: <BiCartAdd />,
    },
    {
      category: "DRESSERS",
      id: 30,
      name: "QUALITY BED",
      img: img16,
      description:
        "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
      price: 350,
      actualPrice: "$320",
      icon1: <HiHeart />,
      icon2: <BiCartAdd />,
    },
    {
      category: "DRESSERS",
      id: 31,
      name: "QUALITY BED",
      img: img17,
      description:
        "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
      price: 350,
      actualPrice: "$320",
      icon1: <HiHeart />,
      icon2: <BiCartAdd />,
    },
    {
      category: "DRESSERS",
      id: 32,
      name: "QUALITY BED",
      img: img18,
      description:
        "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
      price: 350,
      actualPrice: "$320",
      icon1: <HiHeart />,
      icon2: <BiCartAdd />,
    },
    {
      category: "DRESSERS",
      id: 33,
      name: "QUALITY BED",
      img: img20,
      description:
        "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
      price: 350,
      actualPrice: "$320",
      icon1: <HiHeart />,
      icon2: <BiCartAdd />,
    },
    {
      category: "DRESSERS",
      id: 34,
      name: "QUALITY BED",
      img: img21,
      description:
        "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
      price: 350,
      actualPrice: "$320",
      icon1: <HiHeart />,
      icon2: <BiCartAdd />,
    },
    {
      category: "DRESSERS",
      id: 35,
      name: "QUALITY BED",
      img: img22,
      description:
        "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
      price: 350,
      actualPrice: "$320",
      icon1: <HiHeart />,
      icon2: <BiCartAdd />,
    },
    {
      category: "DRESSERS",
      id: 36,
      name: "QUALITY BED",
      img: img22,
      description:
        "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
      price: 350,
      actualPrice: "$320",
      icon1: <HiHeart />,
      icon2: <BiCartAdd />,
    },
    {
      category: "NIGHTSTANDS",
      id: 37,
      name: "QUALITY BED",
      img: img23,
      description:
        "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
      price: 350,
      actualPrice: "$320",
      icon1: <HiHeart />,
      icon2: <BiCartAdd />,
    },
    // {
    //   category: "NIGHTSTANDS",
    //   id: 38,
    //   name: "QUALITY BED",
    //   img: img24,
    //   description:
    //     "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
    //   price: 350,
    //   actualPrice: "$320",
    //   icon1: <HiHeart />,
    //   icon2: <BiCartAdd />,
    // },
    {
      category: "NIGHTSTANDS",
      id: 39,
      name: "Ackley",
      img: img25,
      description:
        "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
      price: 70,
      actualPrice: "$100",
      icon1: <HiHeart />,
      icon2: <BiCartAdd />,
    },
    {
      category: "NIGHTSTANDS",
      id: 40,
      name: "Isla Stand",
      img: img26,
      description:
        "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
      price: 100,
      actualPrice: "$120",
      icon1: <HiHeart />,
      icon2: <BiCartAdd />,
    },
    {
      category: "NIGHTSTANDS",
      id: 41,
      name: "Colette",
      img: img27,
      description:
        "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
      price: 100,
      actualPrice: "$120",
      icon1: <HiHeart />,
      icon2: <BiCartAdd />,
    },
    {
      category: "NIGHTSTANDS",
      id: 42,
      name: "Rogue stand",
      img: img28,
      description:
        "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
      price: 120,
      actualPrice: "$160",
      icon1: <HiHeart />,
      icon2: <BiCartAdd />,
    },
    {
      category: "NIGHTSTANDS",
      id: 43,
      name: "Everson",
      img: img29,
      description:
        "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
      price: 80,
      actualPrice: "$120",
      icon1: <HiHeart />,
      icon2: <BiCartAdd />,
    },
    {
      category: "NIGHTSTANDS",
      id: 44,
      name: "Soffia",
      img: img30,
      description:
        "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
      price: 100,
      actualPrice: "$160",
      icon1: <HiHeart />,
      icon2: <BiCartAdd />,
    },
    {
      category: "NIGHTSTANDS",
      id: 45,
      name: "Abbey Small",
      img: img31,
      description:
        "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
      price: 50,
      actualPrice: "$100",
      icon1: <HiHeart />,
      icon2: <BiCartAdd />,
    },
  ];

  let allBedroomsProducts = bestSellersProduct.filter((items) =>
    items.category.toUpperCase().includes(input.toUpperCase())
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
                <option value="Beds">Beds</option>
                <option value="Dressers">Dressers</option>
                <option value="Nightstands">Nightstands</option>
              </select>
            </form>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {allBedroomsProducts.map(
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
                        <p className="text-white font-bold ">${price}</p>
                      </div>
                    </div>
                    <div className="text-white flex gap-2 justify-center items-center">
                      <button className="hover:text-slate-400 text-[30px]">
                        {icon1}
                      </button>
                      <button
                        className="hover:text-slate-400 text-[30px]"
                        onClick={() =>
                          handleAddToCart(id, name, img, price, actualPrice)
                        }
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

export default Bedrooms;
