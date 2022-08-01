import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Game from "./pages/Game/Game";
import PageNotFound from "./components/PageNotFound/PageNotFound";
const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path='/bingo/:game-id' element={<Game />} />
      <Route path='/' element={<Home />} />
      <Route path={"*"} element={<PageNotFound />} />
    </Routes>
  );
};

export default App;
