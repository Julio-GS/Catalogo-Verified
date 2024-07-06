import Image from "next/image";
import Link from "next/link";
export const MoreProducts = ({ products = [] }) => {
  const seleccionados = products.slice(4, 8);
  console.log(seleccionados);
  return (
    <section className="bg-muted py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl font-bold mb-6">
          Otros modelos que pueden interesarte
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {seleccionados.map((item, index) => (
            <div key={index}>
              <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
                <Link
                  href={`/products/${item.ID}`}
                  className="absolute inset-0 z-10"
                  prefetch={false}
                >
                  <span className="sr-only">View</span>
                </Link>
                <Image
                  src={item.imgPrincipal}
                  alt={item.Nombre}
                  width={500}
                  height={400}
                  className="object-cover w-full h-64"
                />
                <div className="p-4 bg-background">
                  <h3 className="text-xl font-bold">{item.Nombre}</h3>
                  <p className="text-sm text-muted-foreground">
                    Explora esta opcion
                  </p>
                  <h4 className="text-lg font-semibold md:text-xl">
                    {item.Precio}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
