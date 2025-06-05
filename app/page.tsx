import BottomNavBar from "@/components1/BottomNavBar";
import Carousel from "@/components1/Carousel";
import PromoCard from "@/components1/PromoCard";
import TopBar from "@/components1/TopBar";
import React from "react";


export default function Home() {
  return (
    <div>
      <TopBar />
      <PromoCard
        title="Marvel"
        message="adquiere tu boleto aquí"
        imageUrl="/spiderman.jpg"
        isNew
      />

      <Carousel />
      <BottomNavBar />
    </div>
  );
}
