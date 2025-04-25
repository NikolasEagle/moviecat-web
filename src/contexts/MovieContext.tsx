import React from "react";

export type contextType = {
  movieData: {
    id: number | null;
    name: string | null;
    title: string | null;
    first_air_date: string | null;
    release_date: string | null;
    production_countries: [];
    budget: number | null;
    genres: [];
    overview: string | null;
    poster_path: string | null;
    vote_average: number | null;
  };
};

export default React.createContext<contextType | null>(null);
