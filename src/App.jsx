import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Netflix from "./pages/Netflix";
import Player from "./pages/Player";
import Movies from "./pages/Movies";
import TVShows from "./pages/TvShows";
import UserLiked from "./pages/UserLiked";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/player" element={<Player/>}/>
      <Route exact path="/movies" element={<Movies/>}/>
      <Route exact path="/tvshows" element={<TVShows/>}/>
      <Route exact path="/mylist" element={<UserLiked/>}/>
      <Route path="/" element={<Netflix/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
