import React from "react";
import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";

import { Home,DonloadPage } from './Home/index';


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
          <Route path="/donload" element={<DonloadPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
