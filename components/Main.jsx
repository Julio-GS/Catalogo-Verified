"use client";
import { Tendencias } from "@/components/Ofertas";
import AOS from "aos";
import "aos/dist/aos.css";
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
      <section className=" h-[600px] w-full bg-white hidden md:block mt-4">
        <div className="flex items-center place-content-center w-full max-h-[600px]">
          <video autoPlay muted className="max-h-[600px] w-full object-cover">
            <source src="/videos/header.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
      <Tendencias products={products} />
    </main>
  );
};
