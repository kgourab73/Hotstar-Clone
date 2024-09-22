import Header from "./components/Header.jsx";
import { useState } from "react";
import Slider from "./components/Slider.jsx";
import ProductionHouse from "./components/ProductionHouse.jsx";
import GenreMovieList from "./components/GenreMovieList.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <Slider />
      <ProductionHouse />
      <GenreMovieList />
    </div>
  );
};

export default App;
