"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { useEffect } from "react";
import { Tendencias } from "./Ofertas";
export const Main = () => {
  useEffect(() => {
    AOS.init({
      // Opciones de AOS (opcional)
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <main className="flex-1 pt-16">
      <section className=" relative h-[600px] w-full bg-[#DADADA] ">
        <div
          className="flex items-center w-full h-full background-image-header"
          data-aos="fade-up"
        >
          <div className="space-y-4 p-8">
            <h1 className="text-3xl md:text-4xl font-bold">
              Descubri las tendencias
            </h1>
            <p className="text-sm max-w-[400px]">
              Explora nuestra colección de los últimos lanzamientos en
              zapatillas de las mejores marcas.
            </p>
            <div className="flex gap-2">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Todos los productos
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Tendencias />
    </main>
  );
};
