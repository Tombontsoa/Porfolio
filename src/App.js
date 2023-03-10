import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import FirstPage from "./Components/FirstPage";

const App = () =>{
  return(
    <BrowserRouter>
      <Routes>
        <Route
          path="/Portfolio"
          element={<FirstPage/>}
        />
      </Routes>
      <Routes>
        <Route
          path="/"
          element={<FirstPage/>}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
