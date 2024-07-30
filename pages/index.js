// pages/index.js
import "@/app/globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { getSheetData } from "@/lib/googleSheets";

export async function getStaticProps() {
  const products = await getSheetData();

  return {
    props: { products },
    revalidate: 300,
  };
}

const HomePage = ({ products }) => {
  return (
    <div className="flex flex-col min-h-[100dvh] w-screen">
      <Header products={products} />
      <Main products={products} />
      <Footer />
    </div>
  );
};

export default HomePage;
