import React from "react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genres } = useGenres();
  return (
    <ul>
      {genres.map((genre) => (
        <ul key={genre.id}>{genre.name}</ul>
      ))}
    </ul>
  );
};

export default GenreList;
