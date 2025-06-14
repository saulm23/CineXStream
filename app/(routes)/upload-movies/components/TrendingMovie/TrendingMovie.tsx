"use client";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import React, { useState } from "react";
import axios from "axios";
import { trendingMovies } from "./TrendingMovie.data";

const TrendingMovie = () => {
  const [isLoading, setisLoading] = useState(false);
  const uploadTrendingMovies = async()=>{
    setisLoading(true);
    try{
   await axios.post("/api/create-popular-movies",{movies: trendingMovies });     
        setisLoading(false)
    }catch(error){
        console.log("falla",error)
        setisLoading(false)
    }

  }
  return (
    <div className="border rounder-lg border-white-400 p-6 trasition-all duration-300">
      NormalMovie
      <Button
        className="w-full"
        variant={"outline"}
        onClick={uploadTrendingMovies}
        disabled={isLoading}
      >
        Subir Pelicualas
        <Upload />
      </Button>
    </div>
  );
};

export default TrendingMovie;
