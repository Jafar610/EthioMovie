import React, { useState } from "react";
import movies from "../../API/series";
import StarIcon from "@mui/icons-material/Star";
import RP from "react-paginate";

const ReactPaginate = RP.default ?? RP;

function Mylist() {
  const [itemOffset, setItemOffset] = useState(0);
  const itemPerPage = 10;
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
          <h1 className="text-4xl font-bold text-[#ecad2a]">My List</h1>
          <p className="text-lg py-4 text-[#b6b1b6]">
            You saved movies and series. Access them anytime and anywhere.
          </p>

          <div className="py-2 ">
            <div></div>

            <div>
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
                      <div className="py-2">
                        <p className="text-sm font-bold text-[#ecad2a]">
                          S1.E4
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
export default Mylist;
