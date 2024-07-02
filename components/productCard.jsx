// components/ProductCard.js
import Link from "next/link";

const ProductCard = ({ product }) => {
  if (!product || !product.ID) return null;

  return (
    <Link href={`/products/${product.ID}`}>
      <div>
        <h2>{product.Nombre}</h2>
        <p>{product.Descripcion}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
