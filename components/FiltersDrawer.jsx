import { useState } from "react";

const FiltersDrawer = ({ filters, onFilterChange, isOpen, onClose }) => {
  const [selectedFilters, setSelectedFilters] = useState({});

  const handleFilterChange = (filterName, value) => {
    const newFilters = {
      ...selectedFilters,
      [filterName]: value,
    };
    setSelectedFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transition-transform transform ${
        isOpen ? "translate-x-0 z-10" : "translate-x-full "
      }`}
    >
      <button onClick={onClose} className="p-2 text-black">
        Cerrar
      </button>
      <h2 className="text-xl p-4">Filtros</h2>
      {filters.map((filter) => (
        <div key={filter.name} className="p-4">
          <label>{filter.label}</label>
          <select
            onChange={(e) => handleFilterChange(filter.name, e.target.value)}
            className="w-full mt-2 p-2 border"
          >
            <option value="">Todos</option>
            {filter.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default FiltersDrawer;
