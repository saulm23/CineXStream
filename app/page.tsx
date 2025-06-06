//import { BottomNavigationBar } from "@/componentes2/BottonNavigationBar";
import BottomNavBar from "@/components1/BottomNavBar";
import Carousel from "@/components1/Carousel";
import PromoCard from "@/components1/PromoCard";
import TopBar from "@/components1/TopBar";
import React from "react";
import NavigationBar from "@/components1/NavigationBar";
import Image from "next/image"; 
import MovieCard from "@/components1/MovieDetailsCard";
import MovieDetailsCard from "@/components1/MovieDetailsCard";
import AsientosCabecera from "@/components1/AsientosCabecera";
import AsientosMain from "@/components1/AsientosMain";
import CardSeats from "@/components1/CardSeats";


export default function Home() {
  return (
    <div>
      <NavigationBar />
      <CardSeats />
      <BottomNavBar />
      
    </div>
  );
}

