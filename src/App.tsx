import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <Suspense fallback={"loading"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/:id" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
