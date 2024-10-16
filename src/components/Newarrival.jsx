import React from "react";
import img1 from "../assets/circleT.avif";
import img2 from "../assets/cushion1.avif";
import img3 from "../assets/cushion2.avif";
import img4 from "../assets/img2.webp";
import img5 from "../assets/swinghanging.avif";
import img6 from "../assets/officeF2.avif";
import img7 from "../assets/kitchen2.jpg";
import img8 from "../assets/officeF5.avif";
import { HiHeart } from "react-icons/hi2";
import { BiCartAdd } from "react-icons/bi";
import Allnewarrivalitems from "./Allnewarrivalitems";
const Newarrival = () => {
  const newArrivalData = [
    {
      id: 0,
      name: "Stool",
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
      name: "SOFA",
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
      name: "EXPENSIVE",
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
      name: "COFEE TABLE",
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
      name: "OFFICE CHAIR",
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
      name: "OUTDOOR",
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
      name: "KITCHEN CABINET",
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
      name: "OFFICE",
      img: img8,
      description:
        "Lorem ipsum dolor sit amet. Est voluptates placeat qui error dolor in iusto earum aut dolorum veniam et incidunt harum. Ab consectetur omnis 33 eveniet possimus et rerum consequatur At aliquid dolores",
      price: "$350",
      actualPrice: "$320",
      icon1: <HiHeart />,
      icon2: <BiCartAdd />,
    },
  ];

  return (
    <div className="py-[50px]">
      <div>
        <h1 className="uppercase my-[20px] p-1 text-center border-b-[4px] border-slate-500 shadow-lg w-fit text-[25px] md:text-[40px]">
          New Arrival
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-col-4 gap-4">
        {newArrivalData.map((items, id) => {
          return <Allnewarrivalitems key={id} items={items} />;
        })}
      </div>

      
    </div>
  );
};

export default Newarrival;
