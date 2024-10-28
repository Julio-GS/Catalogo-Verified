// pages/products/[id].js
import "@/app/globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MoreProducts } from "@/components/MoreProducts";
import { ProductDetail } from "@/components/ProductDetail";
import { getSheetData } from "@/lib/googleSheets"; // Asegúrate de importar correctamente la función
import { useRouter } from "next/router";

export async function fetchData() {
  const products = await getSheetData();
  //console.log(xiaomi);
  const allProducts = [...products];
  console.log(allProducts);
  return allProducts;
}

export async function getStaticPaths() {
  const allProducts = await fetchData();
  const validProducts = allProducts.filter((product) => product.ID);
  const paths = validProducts.map((product) => ({
    params: { id: product.ID.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const products = await getSheetData();
  //console.log(xiaomi);
  const allProducts = [...products];

  console.log(allProducts);
  const product = allProducts.find((p) => p.ID === params.id);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: { product, products: products || [] }, // Asegúrate de que products sea un arreglo
    revalidate: 300,
  };
}

const ProductPage = ({ product, products }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <ProductDetail product={product} />
      <MoreProducts products={products} />
      <Footer />
    </>
  );
};

export default ProductPage;
