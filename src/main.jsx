import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokemonDetail from "./Pages/PokemonDetail";
import NotFound from "./Pages/NotFound";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/pokemon-detail/:pokemon_name" element={<PokemonDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
