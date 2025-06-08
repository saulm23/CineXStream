"use client";
import React from "react";
import Home from "../public/Home.svg";
import Buy from "../public/Buy.svg";
import Play from "../public/Play.svg";
import Candy from "../public/fastfood.svg";
import User from "../public/Profile.svg";
import Button from "./Button";

const BottomNavBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1b002a] py-4 px-6 flex justify-around items-center z-50">
      <Button
        Img={Home}
        ImgAlt="home"
        redirectTo="/"
        className="flex items-center justify-center w-10 h-10"
      />
      <Button
        Img={Buy}
        ImgAlt="buy"
        redirectTo="/Buy"
        className="flex items-center justify-center w-10 h-10"
      />
      <Button
        Img={Play}
        ImgAlt="play"
        redirectTo="/Play"
        className="flex items-center justify-center relative -top-5 bg-gradient-to-b from-purple-700 to-purple-900 w-14 h-14 rounded-full shadow-lg z-10"
      />
      <Button
        Img={Candy}
        ImgAlt="candy"
        redirectTo="/CandyBar"
        className="flex items-center justify-center w-10 h-10"
      />
      <Button
        Img={User}
        ImgAlt="user"
        redirectTo="/User"
        className="flex items-center justify-center w-10 h-10"
      />
    </div>
  );
};

export default BottomNavBar;
