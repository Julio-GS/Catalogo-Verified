import Image from "next/image";
import Link from "next/link";
import Button from "./ui/button";
const ProductCard = ({ product, index }) => {
  return (
    <Link
      // href={`/products/${item.ID}`}
      href={`https://wa.me/5491164061265?text=Hola%2C%20estoy%20interesado%20en%20este%20producto%20que%20vi%20en%20el%20catalogo%20web%20${product.Nombre}%20de%20${product.Capacidad}`}
      prefetch={false}
      className="group transform transition duration-300 hover:scale-105"
      key={index}
    >
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Image
          className=" rounded-t-lg object-cover p-8 mx-auto"
          src={product.imgPrincipal}
          alt="product image"
          width="300"
          height="300"
        />

        <div className="px-5 p-8">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {product.Nombre}
          </h5>
          <h4 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {product.Capacidad}
          </h4>

          <div className="flex items-center justify-between pt-8">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              {product.Precio ? `${product.Precio}` : "Sin Stock"}
            </span>
            <Link
              href={`https://wa.me/5491164061265?text=Hola%2C%20estoy%20interesado%20en%20este%20producto%20que%20vi%20en%20el%20catalogo%20web%20${product.Nombre}%20de%20${product.Capacidad}`}
              type="button"
            >
              <Button />
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
