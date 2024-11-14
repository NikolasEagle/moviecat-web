import React from "react";

export type contextType = {
  movieData: {
    name_russian: string | null;
    name_original: string | null;
    year: string | null;
    country_ru: string | null;
    budget: string | null;
    persons:
      | {
          profession: {
            profession_id: string;
          };
          name_russian: string;
        }[]
      | [];
    genres: { name_ru: string }[] | [];
    description: string | null;
    kinopoisk_id: number | null;
    big_poster: string | null;
    small_poster: string | null;
    age_restriction: string | null;
    rating_kp: number | null;
    rating_imdb: number | null;
  };
};

export default React.createContext<contextType | null>(null);
