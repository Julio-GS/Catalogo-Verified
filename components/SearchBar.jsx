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
          <form
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
