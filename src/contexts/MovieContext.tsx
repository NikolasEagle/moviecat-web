import React from "react";

export type contextType = {
  movie_id: string | undefined;
  movieData: {
    name_russian: string | null;
    name_original: string | null;
    year: string | null;
    year_start: string | null;
    year_end: string | null;
    country_ru: string | null;
    budget: string | null;
    persons:
      | {
          profession: {
            profession_id: string;
          };
          name_russian: string;
          name_english: string;
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
    images: Array<{ src: string }> | [];
  };
};

export default React.createContext<contextType | null>(null);
