export const filterProducts = (products, selectedFilters) => {
  return products.filter((product) => {
    return Object.entries(selectedFilters).every(
      ([filterName, filterValue]) => {
        if (!filterValue) return true; // Si no hay valor de filtro, incluir el producto
        if (filterName === "category" && filterValue !== product.Categoría)
          return false;
        if (filterName === "capacity" && filterValue !== product.Capacidad)
          return false;
        if (filterName === "marca" && filterValue !== product.Marca)
          return false;
        // Añadir más condiciones según sea necesario
        return true;
      }
    );
  });
};
