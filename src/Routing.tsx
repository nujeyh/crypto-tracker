import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chart from "./components/Chart";
import Price from "./components/Price";

import Detail from "./pages/Detail";
import Main from "./pages/Main";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path=":coinId" element={<Detail />}>
          <Route path="price" element={<Price />} />
          <Route path="chart" element={<Chart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
