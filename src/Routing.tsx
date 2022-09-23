import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chart from "./components/Chart";
import Price from "./components/Price";
import Footer from "./components/Footer";
import Detail from "./pages/Detail";
import Main from "./pages/Main";
import Float from "./components/Float";

const Routing = () => {
  return (
    <BrowserRouter>
      <Float />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path=":coinId" element={<Detail />}>
          <Route path="price" element={<Price />} />
          <Route path="chart" element={<Chart />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
