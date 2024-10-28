"use client";
import "@/app/globals.css";
import { Tendencias } from "@/components/Ofertas";
import srcImage from "@/public/hero_iphone16.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";
export const Main = ({ products }) => {
  useEffect(() => {
    AOS.init({
      // Opciones de AOS (opcional)
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <main className="flex-1 pt-16">
      <section className=" h-[600px] w-full bg-white hidden md:block">
        {/* <div className="flex items-center place-content-center w-full max-h-[600px]">
          <video autoPlay muted className="max-h-[600px] w-full object-cover">
            <source src="/videos/header.mp4" type="video/mp4" />
          </video>
        </div> */}
        <div class="header">
          <Image src={srcImage} alt="iPhone 16" class="iphone-image " />
          <h1 class="title">iPhone 16</h1>
        </div>
      </section>
      <Tendencias products={products} />
    </main>
  );
};
