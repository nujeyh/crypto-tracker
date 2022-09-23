import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chart from "./components/Chart";
import Header from "./components/Header";
import Price from "./components/Price";
import Footer from "./components/Footer";
import Detail from "./pages/Detail";
import Main from "./pages/Main";

const Routing = () => {
  return (
    <BrowserRouter>
      <Header />
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
