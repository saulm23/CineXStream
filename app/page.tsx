import BottomNavBar from "@/components1/BottomNavBar";
import Carousel from "@/components1/Carousel";
import PromoCard from "@/components1/PromoCard";
import TopBar from "@/components1/TopBar";
import React from "react";
import Header from '@/components/Header/Header';
import styles from './page.module.css';


export default function Home() {
  return (
    <div className={styles.container}>
      <TopBar />
      <PromoCard
        title="Marvel"
        message="adquiere tu boleto aquí"
        imageUrl="/spiderman.jpg"
        isNew
      />
      <Header />
      <Carousel />
      <BottomNavBar />
    </div>
  );
}
