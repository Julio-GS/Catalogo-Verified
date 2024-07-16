import Image from "next/image";
import Link from "next/link";
export const Tendencias = ({ products }) => {
  const Iphone = products.filter((product) => product.Categoría === "iPhone");
  const tendencias = Iphone.slice(3, 11);
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
          {tendencias.map((item, index) => (
            <Link
              href={`/products/${item.ID}`}
              className="group transform transition duration-300 hover:scale-105"
              prefetch={false}
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

                  <div className="flex items-center justify-between pt-8">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                      {item.Precio}
                    </span>
                    <Link href="https://wa.me/5491164061265" type="button">
                      <button class="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-white font-medium">
                        <div class="inline-flex h-12 translate-y-0 items-center justify-center px-6 text-neutral-950 transition duration-500 group-hover:-translate-y-[150%]">
                          Ver mas
                        </div>
                        <div class="absolute inline-flex h-12 w-full translate-y-[100%] items-center justify-center text-neutral-50 transition duration-500 group-hover:translate-y-0">
                          <span class="absolute h-full w-full translate-y-full skew-y-12 scale-y-0 bg-[#6fbb6d] transition duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
                          <span class="z-10">Ver mas</span>
                        </div>
                      </button>
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
