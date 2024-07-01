import "@/app/globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import imgSrc from "@/public/visual_content/product-model.png";
import Image from "next/image";
import Link from "next/link";
export default function Product() {
  return (
    <>
      <Header />
      <section className="py-24 w-full">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="w-full">
            <Image
              src={imgSrc}
              alt="Producto"
              className="rounded-lg shadow-lg object-cover h-[500px] w-full"
            />
            <div className="flex gap-4 mt-4 w-full">
              <Image
                src={imgSrc}
                alt="Producto"
                width={150}
                height={150}
                className="rounded-lg shadow-lg"
              />
              <Image
                src={imgSrc}
                alt="Producto"
                width={150}
                height={150}
                className="rounded-lg shadow-lg"
              />
              <Image
                src={imgSrc}
                alt="Producto"
                width={150}
                height={150}
                className="rounded-lg shadow-lg"
              />
              <Image
                src={imgSrc}
                alt="Producto"
                width={150}
                height={150}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Zapatillas Nike Air Force 1
            </h1>
            <div className="mb-8">
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Descripción del Producto
              </h3>
              <p className="text-gray-600">
                Las zapatillas Nike Air Force 1 son un icono del estilo
                deportivo. Cuentan con un diseño atemporal y una suela
                amortiguada que ofrece comodidad durante todo el día. Están
                fabricadas con materiales de alta calidad y cuentan con detalles
                distintivos de la marca Nike.
              </p>
            </div>
            <div className="mb-8">
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Zapatillas Premium Inspiradas en Diseños Clásicos
              </h3>
              <p className="text-gray-600">
                ¿Buscas estilo y comodidad sin romper la billetera? Nuestras
                zapatillas premium son la elección perfecta. Inspiradas en los
                diseños clásicos de las marcas más reconocidas, estas
                imitaciones de alta calidad te ofrecen lo mejor de ambos mundos.
              </p>
            </div>
            <div className="mb-8">
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Características destacadas:
              </h3>
              <p className="text-gray-600 ">
                Materiales de primera: Utilizamos materiales cuidadosamente
                seleccionados para garantizar la durabilidad y la comodidad
                durante todo el día.
              </p>
              <p className="text-gray-600 pt-4">
                Diseño atemporal: Desde las icónicas rayas laterales hasta las
                suelas resistentes, nuestras zapatillas imitan los detalles que
                amas.
              </p>
              <p className="text-gray-600 pt-4">
                Comodidad sin igual: La plantilla acolchada y la suela flexible
                te mantienen cómodo en cada paso.
              </p>
            </div>
            <div className="mb-8">
              <h3 className="text-lg font-medium text-gray-800 mb-2">Talla</h3>
              <div className="flex space-x-4 select-none">
                <label>
                  <input
                    type="radio"
                    name="type"
                    value="Powder"
                    className="peer sr-only"
                  />
                  <p className="px-4 py-2 bg-white peer-checked:bg-black peer-checked:text-white rounded-md border border-gray-300 cursor-pointer">
                    38
                  </p>
                </label>
                <label>
                  <input
                    type="radio"
                    name="type"
                    value="Powder"
                    className="peer sr-only"
                  />
                  <p className="px-4 py-2 bg-white peer-checked:bg-black peer-checked:text-white rounded-md border border-gray-300 cursor-pointer">
                    39
                  </p>
                </label>
                <label>
                  <input
                    type="radio"
                    name="type"
                    value="Powder"
                    className="peer sr-only"
                  />
                  <p className="px-4 py-2 bg-white peer-checked:bg-black peer-checked:text-white rounded-md border border-gray-300 cursor-pointer">
                    40
                  </p>
                </label>
                <label>
                  <input
                    type="radio"
                    name="type"
                    value="Powder"
                    className="peer sr-only"
                  />
                  <p className="px-4 py-2 bg-white peer-checked:bg-black peer-checked:text-white rounded-md border border-gray-300 cursor-pointer">
                    41
                  </p>
                </label>
                <label>
                  <input
                    type="radio"
                    name="type"
                    value="Powder"
                    className="peer sr-only"
                  />
                  <p className="px-4 py-2 bg-white peer-checked:bg-black peer-checked:text-white rounded-md border border-gray-300 cursor-pointer">
                    42
                  </p>
                </label>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-800">$99.99</span>
              <Button className="bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors">
                Agregar al Carrito
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-muted py-12">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-6">You may also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View</span>
              </Link>
              <Image
                src={imgSrc}
                alt="Product 1"
                width={500}
                height={400}
                className="object-cover w-full h-64"
              />
              <div className="p-4 bg-background">
                <h3 className="text-xl font-bold">Acme Prism Sneakers</h3>
                <p className="text-sm text-muted-foreground">
                  Comfortable and stylish
                </p>
                <h4 className="text-lg font-semibold md:text-xl">$99</h4>
              </div>
            </div>
            <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View</span>
              </Link>
              <Image
                src={imgSrc}
                alt="Product 2"
                width={500}
                height={400}
                className="object-cover w-full h-64"
              />
              <div className="p-4 bg-background">
                <h3 className="text-xl font-bold">Acme Retro Runners</h3>
                <p className="text-sm text-muted-foreground">
                  Nostalgic and comfortable
                </p>
                <h4 className="text-lg font-semibold md:text-xl">$89</h4>
              </div>
            </div>
            <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View</span>
              </Link>
              <Image
                src={imgSrc}
                alt="Product 3"
                width={500}
                height={400}
                className="object-cover w-full h-64"
              />
              <div className="p-4 bg-background">
                <h3 className="text-xl font-bold">Acme Trail Hikers</h3>
                <p className="text-sm text-muted-foreground">
                  Rugged and durable
                </p>
                <h4 className="text-lg font-semibold md:text-xl">$129</h4>
              </div>
            </div>
            <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View</span>
              </Link>
              <Image
                src={imgSrc}
                alt="Product 4"
                width={500}
                height={400}
                className="object-cover w-full h-64"
              />
              <div className="p-4 bg-background">
                <h3 className="text-xl font-bold">Acme Sporty Kicks</h3>
                <p className="text-sm text-muted-foreground">
                  Lightweight and flexible
                </p>
                <h4 className="text-lg font-semibold md:text-xl">$79</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
