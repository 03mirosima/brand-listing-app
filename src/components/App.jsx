import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { PromotionDetail } from "./PromotionDetail";

const App = () => {
  //I check if we are in development or production mode for project routing
  let homeRoute;
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    homeRoute = "/";
  } else {
    homeRoute = "/brand-listing-app";
  }
  return (
    <>
      <Routes>
        <Route path={homeRoute} element={<Home />} />
        <Route path="/campaign/:SeoName/:Id" element={<PromotionDetail />} />
      </Routes>
    </>
  );
};

export default App;
