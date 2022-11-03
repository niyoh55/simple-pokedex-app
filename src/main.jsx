import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokemonDetail from "./Pages/PokemonDetail";
import NotFound from "./Pages/NotFound";
import About from "./Pages/About";
import User from "./Pages/User";
import { Provider } from "react-redux";
import store from "./Features/store";
import Counter from "../src/Pages/Counter";
import Try from "./Pages/Try";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/pokemon-detail/:pokemon_name"
          element={<PokemonDetail />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />

        {/* <Route path="/try" element={<Try />} /> 
        <Route path="/users/:user_id" element={<User />} />
        */}
      </Routes>
    </BrowserRouter>
  </Provider>
);
