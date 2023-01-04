import { BrandFilter } from "./BrandFilter";
import Header from "./Header";
import { PromotionListing } from "./PromotionListing";

export const Home = () => {
  return (
    <>
      <BrandFilter />
      <PromotionListing />
    </>
  );
};
