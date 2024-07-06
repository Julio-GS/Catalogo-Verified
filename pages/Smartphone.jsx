import "@/app/globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getSheetData } from "@/lib/googleSheets"; // Ajusta la ruta según sea necesario
import Image from "next/image";
import Link from "next/link";

export async function getStaticProps() {
  const products = await getSheetData();
  return {
    props: {
      products,
    },
  };
}

const Smartphone = ({ products }) => {
  const smartphone = products.filter(
    (product) => product.Categoría === "Smartphone"
  );
  console.log(smartphone);
  return (
    <div>
      <Header />
      <section className="bg-muted py-12">
        <div className="max-w-6xl mx-auto mt-10 px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Descrubri todos nuestros Smartphone
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {smartphone.map((product, index) => (
              <div key={index}>
                <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
                  <Link href={`/products/${product.ID}`}>
                    <div className="absolute inset-0 z-10">
                      <span className="sr-only">View</span>
                    </div>
                  </Link>
                  <Image
                    src={product.imgPrincipal}
                    alt={product.Nombre}
                    width={500}
                    height={400}
                    className="object-cover w-full h-64"
                  />
                  <div className="p-4 bg-background">
                    <h3 className="text-xl font-bold">{product.Nombre}</h3>
                    <p className="text-sm text-muted-foreground">
                      Cada Smartphone es único
                    </p>
                    <h4 className="text-lg font-semibold md:text-xl">
                      {product.Precio}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Smartphone;
