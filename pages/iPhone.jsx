import "@/app/globals.css";
import FiltersDrawer from "@/components/FiltersDrawer";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import FilterIcon from "@/components/ui/svg/FilterIcon";
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

const iPhone = ({ products }) => {
  const Iphone = products.filter((product) => product.Categoría === "iPhone");
  const [results, setResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const filters = [
    {
      name: "stock",
      label: "Stock",
      options: [
        ...new Set(
          products
            .filter((product) => product.Categoría === "iPhone")
            .map((product) => product.Stock)
        ),
      ],
    },
    {
      name: "capacity",
      label: "Capacidad",
      options: [
        ...new Set(
          products
            .filter((product) => product.Categoría === "iPhone")
            .map((product) => product.Capacidad)
        ),
      ],
    },
  ];
  useEffect(() => {
    setResults(Iphone);
    setFilteredResults(Iphone);
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
                <FilterIcon />
              </div>
            </button>
            <h2 className="text-2xl font-bold mb-6 text-center">
              Descrubri todos nuestro Iphone
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredResults.map((product, index) => (
                <div key={index}>
                  <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
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
                      width={500}
                      height={400}
                      className="object-cover w-full h-64"
                    />
                    <div className="p-4 bg-background">
                      <h3 className="text-xl font-bold">{product.Nombre}</h3>
                      <h3 className="text-xl font-bold">{product.Capacidad}</h3>
                      <p className="text-sm text-muted-foreground">
                        El mejor Iphone es el que se adapta a tu estilo
                      </p>
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

export default iPhone;