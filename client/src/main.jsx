import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

import App from "./App.jsx";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/Netflix-Clone-Evangadi">
      <App />
    </BrowserRouter>
  </StrictMode>
);