import "@/app/globals.css";
import FiltersDrawer from "@/components/FiltersDrawer";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { filterProducts } from "@/lib/filterProducts";
import { getSheetData } from "@/lib/googleSheets"; // Ajusta la ruta según sea necesario
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export async function getStaticProps() {
  const products = await getSheetData();
  return {
    props: {
      products,
    },
    revalidate: 300,
  };
}

const Apple = ({ products }) => {
  const Apple = products.filter((product) => product.Marca === "Apple");
  const [results, setResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const filters = [
    {
      name: "category",
      label: "Categoría",
      options: [
        ...new Set(
          products
            .filter((product) => product.Marca === "Apple")
            .map((product) => product.Categoría)
        ),
      ],
    },
    {
      name: "capacity",
      label: "Capacidad",
      options: [
        ...new Set(
          products
            .filter((product) => product.Marca === "Apple")
            .map((product) => product.Capacidad)
        ),
      ],
    },
  ];
  useEffect(() => {
    setResults(Apple);
    setFilteredResults(Apple);
  }, []);
  const handleFilterChange = (selectedFilters) => {
    const filtered = filterProducts(results, selectedFilters);
    setFilteredResults(filtered);
  };
  return (
    <div>
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
        <section className="bg-muted py-12">
          <div className="max-w-6xl mx-auto px-4 md:px-6 mt-10 ">
            <button
              class="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200 max-w- "
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
            <h2 className="text-2xl font-bold mb-6 text-center">
              Descrubri todos nuestro productos Apple
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredResults.map((product, index) => (
                <div key={index}>
                  <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 bg-white">
                    {/* <Link href={`/products/${product.ID}`}> */}
                    <Link
                      href={`https://wa.me/5491164061265?text=Hola%2C%20estoy%20interesado%20en%20este%20producto%20que%20vi%20en%20el%20catalogo%20web%20${product.Nombre}%20de%20${product.Capacidad}`}
                      prefetch={false}
                    >
                      <div className="absolute inset-0 z-10">
                        <span className="sr-only">View</span>
                      </div>
                    </Link>
                    <Image
                      src={product.imgPrincipal}
                      alt={product.Nombre}
                      width={300}
                      height={300}
                      className="h-[250px] p-4 mx-auto my-auto object-contain"
                    />
                    <div className="p-4 bg-background">
                      <h3 className="text-xl font-bold">{product.Nombre}</h3>
                      <h3 className="text-xl font-bold">{product.Capacidad}</h3>

                      <h4 className="text-lg font-semibold md:text-xl mt-4">
                        {product.Precio ? `${product.Precio}` : "Sin Stock"}
                      </h4>
                      <button class="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200 transition hover:scale-110 mt-4">
                        <span>Consultar</span>
                        <div class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                          <div class="relative h-full w-8 bg-white/20"></div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Apple;
