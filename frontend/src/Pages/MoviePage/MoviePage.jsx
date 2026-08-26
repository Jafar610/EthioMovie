import React, { useState } from "react";
import TuneIcon from "@mui/icons-material/Tune";
import movies from "../../API/data";
import StarIcon from "@mui/icons-material/Star";
import RP from "react-paginate";

import WidgetsIcon from "@mui/icons-material/Widgets";
import DateRangeIcon from "@mui/icons-material/DateRange";
import WhatshotIcon from "@mui/icons-material/Whatshot";

const ReactPaginate = RP.default ?? RP;

function MoviePage() {
  const [itemOffset, setItemOffset] = useState(0);
  const itemPerPage = 5;
  const endOffset = itemOffset + itemPerPage;
  const currentMovies = movies.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(movies.length / itemPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemPerPage) % movies.length;
    setItemOffset(newOffset);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="px-20 bg-[#0b0d11] text-white w-full min-h-screen">
        <div className="py-3">
          <h1 className="text-4xl font-bold text-[#ecad2a] pb-4">Movies</h1>

          <div className="flex justify-start items-center gap-10 pb-4">
            <div className="flex gap-3 border border-[#232328] px-6 py-2 rounded-lg outline-none  text-[#ecad2a]">
              <WidgetsIcon />
              <select className="text-[#b6b1b6]">
                <option value="">All Genres</option>
              </select>
            </div>

            <div className="border border-[#232328] px-6 py-2 rounded-lg outline-none text-[#ecad2a] flex gap-3">
              <DateRangeIcon />
              <select className="text-[#b6b1b6]">
                <option value="">All Years</option>
              </select>
            </div>

            <div className="border border-[#232328] px-6 py-2 rounded-lg outline-none text-[#ecad2a] flex gap-3">
              <WhatshotIcon />
              <select className="text-[#b6b1b6]">
                <option value="">Popular</option>
              </select>
            </div>

            <div className="border border-[#232328] text-[#ecad2a] px-6 py-2 rounded-lg outline-none hover:scale-105 flex items-center gap-2">
              <TuneIcon />
              <button type="button" className="text-[#b6b1b6]">
                Filters
              </button>
            </div>
          </div>

          <div className="py-2">
            <h4 className="text-[#b6b1b6] text-lg pb-4 font-semibold">
              Showing {itemOffset + 1}–{Math.min(endOffset, movies.length)} of{" "}
              {movies.length} Movies.
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {currentMovies.map((movie, index) => (
                <div
                  key={movie.id ?? index}
                  className="rounded-xl overflow-hidden hover:scale-105 relative"
                >
                  <img
                    src={movie.image}
                    alt={movie.title || "Movie poster"}
                    className="rounded-xl w-full"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                  <div className="absolute bottom-0 w-full px-2 py-2">
                    <h2 className="text-lg font-bold text-white">
                      {movie.title}
                    </h2>
                    <div className="flex justify-between items-center text-gray-300">
                      <div>
                        <p>
                          {movie.year || "2022"}.{movie.genre || "Drama"}
                        </p>
                      </div>
                      <div className="flex items-center text-yellow-500">
                        <StarIcon fontSize="small" />
                        <p>{movie.rating || "4.5"}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <ReactPaginate
            breakLabel="..."
            nextLabel="Next"
            previousLabel="Prev"
            onPageChange={handlePageClick}
            pageCount={pageCount}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            forcePage={itemOffset / itemPerPage}
            containerClassName="flex justify-center gap-3 mt-8"
            pageClassName="px-3 py-1 bg-[#1a1d24] text-white rounded-lg hover:bg-[#ecad2a] hover:text-black transition cursor-pointer"
            activeClassName="!bg-[#ecad2a] !text-black"
            previousClassName="px-3 py-1 bg-[#1a1d24] rounded-lg cursor-pointer"
            nextClassName="px-3 py-1 bg-[#1a1d24] rounded-lg cursor-pointer"
            disabledClassName="opacity-40 cursor-not-allowed"
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </>
  );
}

export default MoviePage;
