import Image from "next/image";
import Link from "next/link";
import Button from "./ui/button";
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
            <Link
              // href={`/products/${item.ID}`}
              href={`https://wa.me/5491164061265?text=Hola%2C%20estoy%20interesado%20en%20este%20producto%20que%20vi%20en%20el%20catalogo%20web%20${item.Nombre}%20de%20${item.Capacidad}`}
              prefetch={false}
              className="group transform transition duration-300 hover:scale-105"
              key={index}
            >
              <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Image
                  className=" rounded-t-lg object-cover p-8 mx-auto"
                  src={item.imgPrincipal}
                  alt="product image"
                  width="300"
                  height="300"
                />

                <div className="px-5 p-8">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {item.Nombre}
                  </h5>
                  <h4 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {item.Capacidad}
                  </h4>

                  <div className="flex items-center justify-between pt-8">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                      {item.Precio ? `${item.Precio}` : "Sin Stock"}
                    </span>
                    <Link href="" type="button">
                      <Button />
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
