// pages/search.js
import "@/app/globals.css";
import FiltersDrawer from "@/components/FiltersDrawer";
import { Header } from "@/components/Header";
import { filterProducts } from "@/lib/filterProducts";
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
  const [filteredResults, setFilteredResults] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const filters = [
    // {
    //   name: "category",
    //   label: "Categoría",
    //   options: [...new Set(products.map((product) => product.Categoría))],
    // },
    {
      name: "capacity",
      label: "Capacidad",
      options: [...new Set(products.map((product) => product.Capacidad))],
    },
  ];
  useEffect(() => {
    if (query) {
      const filteredResults = products.filter((product) =>
        product.Nombre.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults);
      setFilteredResults(filteredResults);
    }
  }, [query]);

  const handleFilterChange = (selectedFilters) => {
    const filtered = filterProducts(results, selectedFilters);
    setFilteredResults(filtered);
  };

  return (
    <>
      <Header />
      <div
        onClick={() => {
          if (isDrawerOpen) setIsDrawerOpen(true);
        }}
      >
        <FiltersDrawer
          filters={filters}
          onFilterChange={handleFilterChange}
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        />
      </div>
      <div
        onClick={() => {
          if (isDrawerOpen) setIsDrawerOpen(!isDrawerOpen);
        }}
      >
        <div className="container pt-12 mt-10">
          <button
            class="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200 "
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          >
            <span>Filtros</span>
            <div class="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
              >
                <path
                  d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </button>

          <div className="text-xl pt-4 text-pretty">
            Resultados de búsqueda para "{query}"
          </div>

          {filteredResults.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
              {filteredResults.map((product, index) => (
                <Link
                  href={`/products/${product.ID}`}
                  className="group transform transition duration-300 hover:scale-105"
                  prefetch={false}
                  key={index}
                >
                  <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <Image
                      className="rounded-t-lg object-cover p-8 mx-auto"
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

                        <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-white font-medium">
                          <div className="inline-flex h-12 translate-y-0 items-center justify-center px-6 text-neutral-950 transition duration-500 group-hover:-translate-y-[150%]">
                            Ver mas
                          </div>
                          <div className="absolute inline-flex h-12 w-full translate-y-[100%] items-center justify-center text-neutral-50 transition duration-500 group-hover:translate-y-0">
                            <span className="absolute h-full w-full translate-y-full skew-y-12 scale-y-0 bg-[#6fbb6d] transition duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
                            <span className="z-10">Ver mas</span>
                          </div>
                        </button>
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
      </div>
    </>
  );
};

export default SearchPage;
