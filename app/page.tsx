
import BottomNavBar from "@/components1/BottomNavBar";
import MoviesPage from "@/components1/MoviePage";
import TopBar from "@/components1/TopBar";
 
export default function Home() {
  return (
   <div>
    <TopBar/>
    
    <MoviesPage/>
    <BottomNavBar/>

   </div>
  );
}