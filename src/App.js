import "./App.css";
import React from "react";
import Navbar from "../src/component/Navbar/Navbar";
import Search from "../src/component/Search/Search";
import { BrowserRouter as Router } from "react-router-dom";
import ArtistList from "./component/ArtistList/ArtistList";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <main className="main">
        <Search />
        <ArtistList />
      </main>
    </Router>
  );
}

export default App;
