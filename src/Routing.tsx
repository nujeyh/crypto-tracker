import { BrowserRouter, Route, Routes } from "react-router-dom";

import Detail from "./pages/Detail";
import Main from "./pages/Main";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path=":coinId" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
