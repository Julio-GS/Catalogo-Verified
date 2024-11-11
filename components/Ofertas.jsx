import ProductCard from "./productCard";
export const Tendencias = ({ products }) => {
  const Iphone = products.filter((product) =>
    product.Nombre.includes("iPhone 16")
  );

  return (
    <section className="bg-muted py-12 md:py-24">
      <div className="container">
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">
            ¡Descubri las tendencias!
          </h2>
          <p className="text-muted-foreground text-lg max-w-[500px]">
            No te pierdas nuestras últimos ingresos.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {Iphone.map((item, index) => (
            <ProductCard product={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
