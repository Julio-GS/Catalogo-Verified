import "@/app/globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import ProductCard from "@/components/productCard";
import FilterIcon from "@/components/svg/FilterIcon";
import { getSheetData } from "@/lib/googleSheets";
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

export default function Consolas({ products }) {
  const Consolas = products.filter(
    (product) => product.Categoría === "Consolas"
  );
  const [results, setResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    stock: [],
    capacity: [],
  });

  const filters = [
    {
      name: "stock",
      label: "Stock",
      options: [...new Set(Consolas.map((product) => product.Stock))],
    },

    {
      name: "capacity",
      label: "Capacidad",
      options: [...new Set(Consolas.map((product) => product.Capacidad))],
    },
  ];

  useEffect(() => {
    setResults(Consolas);
    setFilteredResults(Consolas);
  }, [products]);

  const handleFilterChange = (name, option) => {
    setSelectedFilters((prevFilters) => {
      if (name === "stock") {
        return {
          ...prevFilters,
          stock: prevFilters.stock.includes(option) ? [] : [option],
        };
      } else {
        const isSelected = prevFilters[name].includes(option);
        return {
          ...prevFilters,
          [name]: isSelected
            ? prevFilters[name].filter((item) => item !== option)
            : [...prevFilters[name], option],
        };
      }
    });
  };

  useEffect(() => {
    const filtered = results.filter((product) => {
      const stockMatch =
        selectedFilters.stock.length === 0 ||
        selectedFilters.stock.includes(product.Stock);
      const capacityMatch =
        selectedFilters.capacity.length === 0 ||
        selectedFilters.capacity.includes(product.Capacidad);

      return stockMatch && capacityMatch;
    });

    setFilteredResults(filtered);
  }, [selectedFilters, results]);

  return (
    <div>
      <Header />

      <div className="flex flex-col lg:flex-row pt-20">
        <div
          className={`w-full lg:w-1/4 p-4 ${
            isDrawerOpen ? "block" : "hidden lg:block"
          }`}
        >
          {filters.map((filter, index) => (
            <div className="border-b mt-4" key={index}>
              <h2 className="text-lg font-bold mb-2">{filter.label}</h2>
              {filter.options.map((option, i) => (
                <div key={i} className="flex items-center ">
                  <input
                    type="checkbox"
                    id={`${filter.name}-${option}`}
                    name={filter.name}
                    value={option}
                    checked={selectedFilters[filter.name].includes(option)}
                    onChange={() => handleFilterChange(filter.name, option)}
                    class="w-4 h-4 mr-2 text-blue-600 bg-gray-100 border-gray-700 rounded focus:ring-blue-500 focus:ring-2 "
                  />
                  <label
                    htmlFor={`${filter.name}-${option}`}
                    class="w-full py-2 ms-2 text-sm font-medium text-gray-900 cursor-pointer"
                  >
                    {option}
                  </label>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="w-full lg:w-3/4 p-4">
          <button
            className="lg:hidden group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200 mb-4"
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          >
            <span>Filtros</span>
            <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
              <FilterIcon />
            </div>
          </button>

          <h2 className="text-2xl font-bold mb-6 text-left">
            Descubre todas nuestras consolas
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredResults.length > 0 ? (
              filteredResults.map((product, index) => (
                <ProductCard product={product} index={index} />
              ))
            ) : (
              <p>No se encontraron productos con los filtros seleccionados.</p>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
