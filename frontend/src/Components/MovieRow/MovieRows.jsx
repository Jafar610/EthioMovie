import React,{useRef} from "react";
import MovieCard from "../Cards/MovieCard";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
function MovieRows({ title, movies }) {
  const rowRef = useRef();

  const scroll = (dir) => {
    const scrollAmount = 400;
    rowRef.current.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="relative px-6 py-6 group">
        {/* Title */}
        <h2 className="text-white text-xl font-semibold mb-4">{title}</h2>

        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 
                   bg-black/50 text-white p-2 opacity-0 
                   group-hover:opacity-100 transition border rounded-full hover:bg-[#e4a726]  border-[#e4a726]"
        >
          <KeyboardArrowLeftIcon/>
        </button>

        {/* Row */}
        <div
          ref={rowRef}
          className="flex gap-4 overflow-x-scroll scrollbar-hide scroll-smooth"
        >
          {movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 
                   bg-black/50 text-white p-2 opacity-0 
                   group-hover:opacity-100 transition border border-[#e4a726] rounded-full hover:bg-[#e4a726] "
        >
          <KeyboardArrowRightIcon/>
        </button>
      </div>
    </>
  );
}

export default MovieRows;
