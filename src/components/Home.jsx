import { BrandFilter } from "./BrandFilter";
import Header from "./Header";
import { Navbar } from "./Navbar";
import { PromotionListing } from "./PromotionListing";

export const Home = () => {
  return (
    <>
      <Header />
      <BrandFilter />
      <PromotionListing />
      <Navbar />
    </>
  );
};
