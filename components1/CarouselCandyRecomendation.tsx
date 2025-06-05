import React from "react";
import Image from "next/image";

const placeholderCandies = [
  {
    cover: "/papas.png",
    title: "Papas y frituras",
    description: "Papas Lays medianas",
    price: "Bs. 15",
  },
  {
    cover: "/dulces.png",
    title: "Dulces Chocolates",
    description: "Dulces de chocolate variados",
    price: "Bs. 15",
  },
  {
    cover: "/gaseosas.png",
    title: "Gaseosas",
    description: "Gaseosas medianas",
    price: "Bs. 10",
  },
];

const CarouselCandyRecomendation = () => {
  return (
    <div className="overflow-x-auto whitespace-nowrap py-4 px-2">
      {placeholderCandies.map((candies) => (
        <div>
          <Image
            src={candies.cover}
            alt={candies.title}
            className="object-cover"
            width={130}
            height={72}
          />
          <h3 className="text-white text-lg font-bold">{candies.title}</h3>
          <p className="text-white text-sm mt-2 text-center">
            {candies.description}
          </p>
          <h2 className="text-white text-sm mt-2 text-center">
            {candies.price}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default CarouselCandyRecomendation;
