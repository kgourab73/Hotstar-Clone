import { useEffect, useRef, useState } from "react";
import GlobalAPI from "../services/GlobalAPI";
import MovieCard from "./MovieCard";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import HrMovieCard from "./HrMovieCard";

const MovieList = ({ genreId, index_ }) => {
  const elementRef = useRef(null);
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    getMovieByGenreId();
  }, []);

  const getMovieByGenreId = () => {
    GlobalAPI.getMovieByGenreId(genreId).then((resp) => {
      //   console.log(resp.data.results);
      setMovieList(resp.data.results);
    });
  };
  const SliderRight = (element) => {
    element.scrollLeft += 500;
  };
  const SliderLeft = (element) => {
    element.scrollLeft -= 500;
  };
  return (
    <div className="relative">
      <HiChevronLeft
        className={`hidden md:block text-white text-[50px] absolute mx-8  cursor-pointer z-10 p-2 top-0 ${
          index_ % 3 == 0 ? `mt-[100px]` : `mt-[150px]`
        }`}
        onClick={() => SliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className={`hidden md:block text-white text-[50px] absolute mx-8 cursor-pointer right-0 top-0 z-10 p-2 ${
          index_ % 3 == 0 ? `mt-[90px]` : `mt-[150px]`
        }`}
        onClick={() => SliderRight(elementRef.current)}
      />
      <div
        ref={elementRef}
        className="flex overflow-x-auto gap-8 scrollbar-none scroll-smooth pt-4 px-3 pb-4"
      >
        {movieList.map((item, index) => (
          <>
            {index_ % 3 == 0 ? (
              <HrMovieCard movie={item} />
            ) : (
              <MovieCard movie={item} key={index} />
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
