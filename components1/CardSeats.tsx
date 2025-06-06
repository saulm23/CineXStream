import React from "react";  
import AsientosCabecera from "./AsientosCabecera";
import AsientosMain from "./AsientosMain";
import BottomNavBar from "./BottomNavBar";
import NavigationBar from "./NavigationBar";

const CardSeats: React.FC = () => {
  return (
    <div>
      
      <AsientosCabecera />
      <AsientosMain />
      
    </div>
  );
};
export default CardSeats;