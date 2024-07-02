// pages/index.js
import "@/app/globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { getSheetData } from "@/lib/googleSheets";

export async function getStaticProps() {
  const products = await getSheetData();
  console.log(products);
  return {
    props: { products },
    revalidate: 60,
  };
}

const HomePage = ({ products }) => {
  console.log(products);

  const featuredProducts = products.slice(0, 4);
  return (
    <div className="flex flex-col min-h-[100dvh] w-screen">
      <Header />
      <Main products={products} />
      <Footer />
    </div>
  );
};

export default HomePage;
