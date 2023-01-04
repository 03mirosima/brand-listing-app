import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import { Home } from "./Home";
import { PromotionDetail } from "./PromotionDetail";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/campaign/:SeoName/:Id" element={<PromotionDetail />} />
      </Routes>
    </>
  );
};

export default App;
