// pages/search.js
import "@/app/globals.css";
import { Header } from "@/components/Header";
import { getSheetData } from "@/lib/googleSheets";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export async function getStaticProps() {
  const products = await getSheetData();

  return {
    props: { products },
    revalidate: 60,
  };
}

const SearchPage = ({ products }) => {
  const router = useRouter();
  const { query } = router.query;
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      const filteredResults = products.filter((product) =>
        product.Nombre.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults);
    }
  }, [query]);

  return (
    <>
      <Header />
      <div className="container pt-10 mt-10">
        <h1>Resultados de búsqueda para "{query}"</h1>
        {results.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {results.map((product, index) => (
              <Link
                href={`/products/${product.ID}`}
                className="group transform transition duration-300 hover:scale-105"
                prefetch={false}
                key={index}
              >
                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <Image
                    className=" rounded-t-lg object-cover p-8 mx-auto"
                    src={product.imgPrincipal}
                    alt="product image"
                    width="300"
                    height="300"
                  />

                  <div className="px-5 p-8">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {product.Nombre}
                    </h5>

                    <div className="flex items-center justify-between pt-8">
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">
                        {product.Precio}
                      </span>
                      <Link href="https://wa.me/5491164061265" type="button">
                        <button class="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-white font-medium">
                          <div class="inline-flex h-12 translate-y-0 items-center justify-center px-6 text-neutral-950 transition duration-500 group-hover:-translate-y-[150%]">
                            Contacto
                          </div>
                          <div class="absolute inline-flex h-12 w-full translate-y-[100%] items-center justify-center text-neutral-50 transition duration-500 group-hover:translate-y-0">
                            <span class="absolute h-full w-full translate-y-full skew-y-12 scale-y-0 bg-[#6fbb6d] transition duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
                            <span class="z-10">Contacto</span>
                          </div>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p>No se encontraron productos.</p>
        )}
      </div>
    </>
  );
};

export default SearchPage;
