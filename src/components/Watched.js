import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Greetings from "./Greetings";
import { MovieCard } from "./MovieCard";
import Quotes from "./Quotes";

export const Watched = () => {
  const { watched } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Watched Movies</h1>
          <span className="count-pill">{watched.length} Movies</span>
        </div>
        {watched.length > 0 ? (
          <div className="movie-grid">
            {watched.map((movie) => (
              <MovieCard movie={movie} type="watched" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies in watchlist</h2>
        )}
        <Quotes />
      </div>
    </div>
  );
};
