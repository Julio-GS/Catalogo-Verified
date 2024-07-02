// components/ProductDetail.js
"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const ProductDetail = ({ product }) => {
  const [mainImage, setMainImage] = useState("");
  useEffect(() => {
    setMainImage(product.imgPrincipal);
  }, [product]);

  return (
    <section className="py-24 w-full">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="w-full">
          <Image
            src={mainImage}
            alt="Producto"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover h-[700px] w-full"
          />
          <div className="flex gap-4 mt-4 w-full">
            <Image
              src={product.imgPrincipal}
              alt="Producto"
              width={150}
              height={150}
              className="rounded-lg shadow-lg cursor-pointer"
              onClick={() => setMainImage(product.imgPrincipal)}
            />
            <Image
              src={product.imgFrente}
              alt="Producto"
              width={150}
              height={150}
              className="rounded-lg shadow-lg cursor-pointer"
              onClick={() => setMainImage(product.imgFrente)}
            />
            <Image
              src={product.imgCostado}
              alt="Producto"
              width={150}
              height={150}
              className="rounded-lg shadow-lg cursor-pointer"
              onClick={() => setMainImage(product.imgCostado)}
            />
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {product.Nombre}
          </h1>
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-800 mb-2">
              Descripción del Producto
            </h3>
            <p className="text-gray-600">{product.Descripcion}</p>
          </div>
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-800 mb-2">
              Zapatillas Premium Inspiradas en Diseños Clásicos
            </h3>
            <p className="text-gray-600">
              ¿Buscas estilo y comodidad sin romper la billetera? Nuestras
              zapatillas premium son la elección perfecta. Inspiradas en los
              diseños clásicos de las marcas más reconocidas, estas imitaciones
              de alta calidad te ofrecen lo mejor de ambos mundos.
            </p>
          </div>
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-800 mb-2">
              Características destacadas:
            </h3>
            <p className="text-gray-600">
              Materiales de primera: Utilizamos materiales cuidadosamente
              seleccionados para garantizar la durabilidad y la comodidad
              durante todo el día.
            </p>
            <p className="text-gray-600 pt-4">
              Diseño atemporal: Desde las icónicas rayas laterales hasta las
              suelas resistentes, nuestras zapatillas imitan los detalles que
              amas.
            </p>
            <p className="text-gray-600 pt-4">
              Comodidad sin igual: La plantilla acolchada y la suela flexible te
              mantienen cómodo en cada paso.
            </p>
          </div>
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-800 mb-2">Talla</h3>
            <div className="flex space-x-4 select-none">
              {product.Talles.split(" ").map((talle, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    name="type"
                    value={talle}
                    className="peer sr-only"
                  />
                  <p className="px-4 py-2 bg-white peer-checked:bg-black peer-checked:text-white rounded-md border border-gray-300 cursor-pointer">
                    {talle}
                  </p>
                </label>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-800">$65.000</span>
            <Link href="https://wa.link/cmof43" prefetch={false}>
              <Button className="bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors">
                Contactame
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// export default ProductDetail;
