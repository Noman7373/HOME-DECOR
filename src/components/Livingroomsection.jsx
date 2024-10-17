import img1 from "../assets/Living Room/Living Chair/bell-chair.avif";
import img2 from "../assets/Living Room/Living Chair/-lounge-chair.avif";
import img3 from "../assets/Living Room/Living Chair/bondi-outdoor-chair.avif";
import img4 from "../assets/Living Room/Living Chair/bryant-chair.avif";
import img5 from "../assets/Living Room/Living Chair/collins-chair.avif";
import img6 from "../assets/Living Room/Living Chair/eastwood-swivel-chair.avif";
import img7 from "../assets/Living Room/Living Chair/hughes-swivel-chair.avif";
import img8 from "../assets/Living Room/Living Chair/nina-glider.avif";
import img10 from "../assets/Living Room/Living Chair/sittingR1.avif";
import img11 from "../assets/Living Room/Living Chair/sittingR2.avif";
import img12 from "../assets/Living Room/Living Chair/sittingR3.avif";
import img13 from "../assets/Living Room/Living Chair/sittingR4.avif";
import img14 from "../assets/Living Room/Living Chair/sittingR5.avif";
import img15 from "../assets/Living Room/Living Chair/sittingR6.avif";
import img16 from "../assets/Living Room/Living Sofaa/anton daybed.avif";
import img17 from "../assets/Living Room/Living Sofaa/brier sleeper.avif";
import img18 from "../assets/Living Room/Living Sofaa/bryant sofa.avif";
import img20 from "../assets/Living Room/Living Sofaa/bryant U-sofa.avif";
import img21 from "../assets/Living Room/Living Sofaa/holt sectional.avif";
import img22 from "../assets/Living Room/Living Sofaa/lewis section.avif";
import img23 from "../assets/Living Room/Living Sofaa/lewis sofa2.avif";
// import img24 from "../assets/Bedroom/Nightstand/about.png";
import img25 from "../assets/Living Room/Living Sofaa/pillow-sofa_74190-3846.avif";
import img26 from "../assets/Living Room/Living Sofaa/sittingR.avif";
import img27 from "../assets/Living Room/Living Sofaa/sofa1.avif";
import img28 from "../assets/Living Room/Living Table/ane nesting.avif";
import img29 from "../assets/Living Room/Living Table/declan-coffee-table.avif";
import img30 from "../assets/Living Room/Living Table/florence-desk.avif";
import img31 from "../assets/Living Room/Living Table/gabriella-coffee-table.avif";
import img32 from "../assets/Living Room/Living Table/iren cofee table.png";
import img33 from "../assets/Living Room/Living Table/mitzi-expandable-dining-table.avif";
import img34 from "../assets/Living Room/Living Table/nestin table.avif";
import img35 from "../assets/Living Room/Living Table/nestin table.avif";
import img36 from "../assets/Living Room/Living Table/prange.avif";
import img37 from "../assets/Living Room/Living Table/xavier-apartment.avif";

import { BiCartAdd } from "react-icons/bi";
import { HiHeart } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartslice";
const Livingroomsection = () => {
  const [input, setinputValue] = useState("chairs");
  const dispatch = useDispatch();

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
  const handleFilter = (e) => {
    let inputValue = e.target.value;
    if (inputValue == "") {
      inputValue = "BEDS";
    }
    setinputValue(inputValue);
  };
  const bestSellersProduct = [
    {
      category: "Chair",
      id: 46,
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
      category: "Chair",
      id: 47,
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
      category: "Chair",
      id: 48,
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
      category: "Chair",
      id: 49,
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
      category: "Chair",
      id: 50,
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
      category: "Chair",
      id: 51,
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
      category: "Chair",
      id: 52,
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
      category: "Chair",
      id: 53,
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
      category: "Chair",
      id: 54,
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
      category: "Chair",
      id: 55,
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
      category: "Chair",
      id: 56,
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
      category: "Chair",
      id: 57,
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
      category: "Chair",
      id: 58,
      name: "Industrial Metal",
      img: img14,
      description:
        "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
      price: 100,
      actualPrice: "$120",
      icon1: <HiHeart />,
      icon2: <BiCartAdd />,
    },
    {
      category: "Chair",
      id: 59,
      name: "Chic Glass-Top",
      img: img15,
      description:
        "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
      price: 120,
      actualPrice: "$150",
      icon1: <HiHeart />,
      icon2: <BiCartAdd />,
    },
    {
      category: "Chair",
      id: 60,
      name: "Vintage Charm",
      img: img16,
      description:
        "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
      price: 110,
      actualPrice: "$130",
      icon1: <HiHeart />,
      icon2: <BiCartAdd />,
    },
    {
      category: "sofa",
      id: 61,
      name: "Modern Minimalist",
      img: img17,
      description:
        "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
      price: 130,
      actualPrice: "$160",
      icon1: <HiHeart />,
      icon2: <BiCartAdd />,
    },
    {
      category: "sofa",
      id: 62,
      name: "Urban Loft",
      img: img18,
      description:
        "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
      price: 70,
      actualPrice: "$100",
      icon1: <HiHeart />,
      icon2: <BiCartAdd />,
    },
    {
      category: "sofa",
      id: 63,
      name: "Nordic Wood",
      img: img20,
      description:
        "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
      price: 100,
      actualPrice: "$125",
      icon1: <HiHeart />,
      icon2: <BiCartAdd />,
    },
    {
      category: "sofa",
      id: 64,
      name: "Contemporary Sleek",
      img: img21,
      description:
        "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
      price: 80,
      actualPrice: "$100",
      icon1: <HiHeart />,
      icon2: <BiCartAdd />,
    },
    {
      category: "sofa",
      id: 65,
      name: "Elegant Edge",
      img: img22,
      description:
        "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
      price: 50,
      actualPrice: "$75",
      icon1: <HiHeart />,
      icon2: <BiCartAdd />,
    },
    {
      category: "sofa",
      id: 66,
      name: "Rustic Farmhouse",
      img: img22,
      description:
        "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
      price: 150,
      actualPrice: "$170",
      icon1: <HiHeart />,
      icon2: <BiCartAdd />,
    },
    {
      category: "sofa",
      id: 67,
      name: "abbay small",
      img: img23,
      description:
        "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
      price: 120,
      actualPrice: "$150",
      icon1: <HiHeart />,
      icon2: <BiCartAdd />,
    },
    // {
    //   category: "NIGHTSTANDS",
    //   id: 68,
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
      category: "sofa",
      id: 69,
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
      category: "sofa",
      id: 70,
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
      category: "sofa",
      id: 71,
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
      category: "Table",
      id: 72,
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
      category: "Table",
      id: 73,
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
      category: "Table",
      id: 74,
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
      category: "Table",
      id: 75,
      name: "Abbey Small",
      img: img31,
      description:
        "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
      price: 50,
      actualPrice: "$100",
      icon1: <HiHeart />,
      icon2: <BiCartAdd />,
    },
    {
      category: "Table",
      id: 76,
      name: "Abbey Small",
      img: img32,
      description:
        "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
      price: 50,
      actualPrice: "$100",
      icon1: <HiHeart />,
      icon2: <BiCartAdd />,
    },
    {
      category: "Table",
      id: 77,
      name: "Abbey Small",
      img: img33,
      description:
        "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
      price: 50,
      actualPrice: "$100",
      icon1: <HiHeart />,
      icon2: <BiCartAdd />,
    },
    {
      category: "Table",
      id: 78,
      name: "Abbey Small",
      img: img34,
      description:
        "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
      price: 50,
      actualPrice: "$100",
      icon1: <HiHeart />,
      icon2: <BiCartAdd />,
    },
    {
      category: "Table",
      id: 79,
      name: "Abbey Small",
      img: img35,
      description:
        "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
      price: 50,
      actualPrice: "$100",
      icon1: <HiHeart />,
      icon2: <BiCartAdd />,
    },
    {
      category: "Table",
      id: 80,
      name: "Abbey Small",
      img: img36,
      description:
        "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
      price: 50,
      actualPrice: "$100",
      icon1: <HiHeart />,
      icon2: <BiCartAdd />,
    },
    {
      category: "Table",
      id: 81,
      name: "Abbey Small",
      img: img37,
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
            LIVINGROOM {input}
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
                <option value="Chair">Chair</option>
                <option value="Sofa">Sofa</option>
                <option value="Table">Table</option>
              </select>
            </form>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {allBedroomsProducts.map(
            ({
              id,
              name,
              img,
              description,
              price,
              actualPrice,
              icon1,
              icon2,
            }) => {
              return (
                <div
                  key={id}
                  className="rounded-2xl relative flex flex-col justify-center items-center w-[270px] shadow-2xl my-[10px] max-[500px]:w-[190px]"
                >
                  <p className="absolute top-4 left-2 bg-slate-500 text-white p-1 italic rounded text-[15px] z-10">
                    New
                  </p>
                  <Link
                    to="/products-detail"
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
                      <button className="hover:text-slate-400 text-[30px]">
                        {icon1}
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

export default Livingroomsection;
