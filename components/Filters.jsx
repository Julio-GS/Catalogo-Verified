import { useState } from "react";

const Filters = ({ filters, onFilterChange }) => {
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
    <div>
      <h2>Filtros</h2>
      {filters.map((filter) => (
        <div key={filter.name}>
          <label>{filter.label}</label>
          <select
            onChange={(e) => handleFilterChange(filter.name, e.target.value)}
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

export default Filters;
