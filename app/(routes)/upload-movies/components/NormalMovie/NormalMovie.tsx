"use client";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import React, { useState } from "react";
import axios from "axios";
import { dataMovies } from "./NormalMovie.data";

const NormalMovie = () => {
  const [isLoading, setisLoading] = useState(false);
  const uploadMovies = async()=>{
    setisLoading(true);
    try{
   await axios.post("/api/create-movies",{movies:dataMovies});     
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
        onClick={uploadMovies}
        disabled={isLoading}
      >
        Subir Pelicualas
        <Upload />
      </Button>
    </div>
  );
};

export default NormalMovie;
