import React from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import SharedLayout from "./components/SharedLayout";
import Home from "./components/Page/Home";
import Banner from "./components/Page/Banner/Banner";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Banner />} />
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
