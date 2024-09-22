import React from "react";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const HrMovieCard = ({ movie }) => {
  return (
    <section className="rounded-lg hover:border-[2px] border-gray-400 hover:scale-110 cursor-pointer transition-all duration-400 ease-in shadow-md shadow-gray-600">
      <img
        src={IMAGE_BASE_URL + movie.backdrop_path}
        className="w-[110px] md:w-[260px] rounded-lg"
      />
      <h2 className="w-[110px] md:w-[260px] text-white mt-2 flex items-center justify-center font-bold">
        {movie.title}
      </h2>
    </section>
  );
};

export default HrMovieCard;
