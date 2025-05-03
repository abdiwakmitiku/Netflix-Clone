import React from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import SharedLayout from "./components/SharedLayout";
import HomePage from "./components/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
