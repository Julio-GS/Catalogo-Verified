// components/ProductDetail.js
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const ProductDetail = ({ product }) => {
  const [mainImage, setMainImage] = useState("");
  const [stock, setStock] = useState("");
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  useEffect(() => {
    setMainImage(product.imgPrincipal);
    if (product.Precio) {
      setStock(product.Precio);
    } else {
      setStock("Sin stock");
    }
  }, [product]);

  return (
    <section className="py-24 w-full">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
        <div className="max-w-full mx-auto">
          <Image
            src={mainImage}
            alt="Producto"
            width={500}
            height={500}
            className="rounded-lg shadow-lg mx-auto h-[600px] p-8 object-contain "
          />
          {/* <div className="flex gap-4 mt-4 w-full">
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
          </div> */}
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

          {product.Capacidad ? (
            <div className="mb-8">
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Capacidad
              </h3>
              <div className="flex space-x-4 select-none">
                {product.Capacidad.split(" ").map((capacidad, index) => (
                  <label key={index}>
                    <input
                      type="radio"
                      name="type"
                      value={capacidad}
                      className="peer sr-only"
                    />
                    <p className="px-4 py-2 bg-white peer-checked:bg-black peer-checked:text-white rounded-md border border-gray-300 cursor-pointer">
                      {capacidad}
                    </p>
                  </label>
                ))}
              </div>
            </div>
          ) : (
            <div></div>
          )}

          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-800">{stock}</span>
            <Link
              href={`https://wa.me/5491164061265?text=Hola%2C%20estoy%20interesado%20en%20este%20producto%20que%20vi%20en%20el%20catalogo%20web%20${currentUrl}`}
              prefetch={false}
            >
              <button class="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200 transition hover:scale-110">
                <span>Contactame</span>
                <div class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                  <div class="relative h-full w-8 bg-white/20"></div>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// export default ProductDetail;
