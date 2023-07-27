import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import MoviesList from "./MovieList";
import MovieShow from "./MovieShow";

const MoviesPage = ({ movies }) => {
  const match = useRouteMatch();

  return (
    <div>
      <MoviesList movies={movies} />

      <Route exact path={match.url}>
        <h3>Choose a movie from the list above</h3>
      </Route>

      <Route path={`${match.url}/:movieId`}>
        {/* Pass the `movies` prop to MovieShow */}
        <MovieShow movies={movies} />
      </Route>
    </div>
  );
};

export default MoviesPage;
