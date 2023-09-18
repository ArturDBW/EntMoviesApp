import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Navigation } from "../components/Navigation";
import { useState } from "react";
import moviesListJSON from "../data.json";

export function AppLayout() {
  const [searchTitle, setSearchTitle] = useState("");
  const [movies, setMovies] = useState(moviesListJSON);

  return (
    <div className="container">
      <Navigation />
      <Header searchTitle={searchTitle} setSearchTitle={setSearchTitle} />
      <main className="main">
        <Outlet context={{ movies, setMovies, searchTitle }} />
      </main>
    </div>
  );
}
