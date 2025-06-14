import React from "react";

import Logo from "@/components1/Logo";
import NormalMovie from "./components/NormalMovie/NormalMovie";
import TrendingMovie from "./components/TrendingMovie/TrendingMovie";

const uploadMoviesPage = () => {
  return (
    <div className="bg-black h-full text-white flex flex-col justify-center items-center">
      upload-movies
      <Logo />
      <NormalMovie/>
      <TrendingMovie/>
    </div>
  );
};

export default uploadMoviesPage;
