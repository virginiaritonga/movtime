import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Greetings from "./Greetings";
import { MovieCard } from "./MovieCard";
import Quotes from "./Quotes";

export const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);
  return (
    <div>
      <div className="movie-page">
        <div className="container">
          <Greetings />
          <div className="header">
            <h1 className="heading">My Watchlist</h1>
            <span className="count-pill">{watchlist.length} Movies</span>
          </div>
          {watchlist.length > 0 ? (
            <div className="movie-grid">
              {watchlist.map((movie) => (
                <MovieCard movie={movie} type="watchlist" />
              ))}
            </div>
          ) : (
            <h2 className="no-movies">No movies in watchlist</h2>
          )}
        </div>
        <Quotes />
      </div>
    </div>
  );
};
