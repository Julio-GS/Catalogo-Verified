// components/SearchBar.js
import { useRouter } from "next/router";
import { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Asegúrate de instalar react-icons

const SearchBar = ({ products }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const router = useRouter();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.length > 1) {
      const filteredSuggestions = products.filter((product) =>
        product.Nombre.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (query) {
      router.push(`/search?query=${query}`);
    }
  };

  const handleSuggestionClick = (id) => {
    router.push(`/products/${id}`);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <div style={{ position: "relative" }}>
      {!showSearch && (
        <button
          onClick={toggleSearch}
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <FaSearch size={20} color="white" />
        </button>
      )}
      {showSearch && (
        <div style={{ position: "relative" }}>
          {/* <form
            onSubmit={handleSearch}
            style={{ display: "flex", alignItems: "center" }}
          >
            <input
              type="text"
              value={query}
              onChange={handleInputChange}
              placeholder="Buscar productos..."
              style={{ flex: 1 }}
            />
            <button type="submit">Buscar</button>
          </form> */}
          <form class="max-w-md mx-auto" onSubmit={handleSearch}>
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-gray-500"
                placeholder="Buscar productos..."
                required
                value={query}
                onChange={handleInputChange}
              />
            </div>
          </form>
          {suggestions.length > 0 && (
            <div
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                right: 0,
                zIndex: 1000,
                backgroundColor: "white",
                border: "1px solid #ccc",
                maxHeight: "200px",
                overflowY: "auto",
              }}
            >
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {suggestions.map((suggestion) => (
                  <li
                    key={suggestion.ID}
                    style={{
                      padding: "10px",
                      borderBottom: "1px solid #ccc",
                      cursor: "pointer",
                    }}
                    onClick={() => handleSuggestionClick(suggestion.ID)}
                  >
                    {suggestion.Nombre}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
