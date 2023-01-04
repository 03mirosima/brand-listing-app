import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { PromotionDetail } from "./PromotionDetail";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/brand-listing-app" element={<Home />} />
        <Route path="/campaign/:SeoName/:Id" element={<PromotionDetail />} />
      </Routes>
    </>
  );
};

export default App;
