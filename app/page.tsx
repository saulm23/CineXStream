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


export default function Home() {
  return (
    <div>
      <NavigationBar />
      <MovieDetailsCard
        title="Sample Movie"
        trailerUrl="./public/images/sample-trailer.jpg" // Replace with actual video component
        description="This is a sample movie description."
        year={2024}
        location="2:30 hrs"

      />
      <BottomNavBar />
      
    </div>
  );
}

