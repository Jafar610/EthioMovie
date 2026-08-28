import React, { useState } from "react";
import movies from "../../API/series";
import StarIcon from "@mui/icons-material/Star";
import RP from "react-paginate";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import AppsIcon from '@mui/icons-material/Apps';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteIcon from '@mui/icons-material/Delete';
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

          <div className="py-2 flex  gap-10">
            <div className="min-w-60 h-auto  ">
              <div className="border border-[#1d2024] rounded-lg px-6 py-4">
                <div className="flex justify-between items-center py-2">
                  <div className="flex gap-2">
                    <BookmarkIcon/>
                    <p>All Items</p>
                  </div>
                    <p>24</p>           
                </div>

                <div className="flex justify-between items-center py-2">
                  <div className="flex gap-2">
                    <AppsIcon/>
                    <p>Movies</p>
                  </div>
                    <p>14</p>           
                </div>

                <div className="flex justify-between items-center py-2">
                  <div className="flex gap-2">
                    <LiveTvIcon/>
                    <p>Series</p>
                  </div>
                    <p>10</p>           
                </div>

                <hr className="my-2 text-[#181b1e] border-t-2" />

                <div className="mb-2">
                  <h2 className="my-2 text-[#818187] font-bold mb-2">SORT BY</h2>
                   <div className="border border-[#1f2126] rounded-lg px-4 py-2 bg-[#15181b] text-[#f5f6f7]">
                    <select name="" id="">
                      <option value="recent-added">Recent Added</option>
                    </select>
                   </div>
                </div>

                <hr className="my-2 text-[#181b1e] border-t-2" />
                <div className="mb-2">
                  <h2 className="my-2 text-[#818187] font-bold mb-2">FILTER BY</h2>
                  <div className="border border-[#1f2126] rounded-lg px-4 py-2 bg-[#15181b] text-[#f5f6f7] mb-4">
                    <select name="" id="" className="">
                      <option value="">All Geners</option>
                    </select>
                  </div>
                  <div className="border border-[#1f2126] rounded-lg px-4 py-2 bg-[#15181b] text-[#f5f6f7]">
                    <select name="" id="">
                      <option value="">All Years</option>
                    </select>
                  </div>
                </div>
              </div>


              <div className="bg-[#0c0d0b] mt-4 border border-[#161616] rounded-lg p-4 text-[#f7bd01] flex flex-col items-center">
                  <FavoriteBorderIcon fontSize={'large'}/>
                  <h2 className="text-lg text-[#f5f4f4] py-2">Love EthioMovie?</h2>
                  <p className="text-sm text-[#f5f4f4] text-center pb-2">Rate us and Help us and improve your expriance.</p>

                  <div className="border border-[#3c2d0c] rounded-lg px-4 py-2">
                    <button className="font-bold">Rate Now</button>
                  </div>
              </div>
            </div>

            <div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 relative">
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
                    <div className = "absolute top-0 right-0 border border-[#ffff] rounded-full bg-[#1c1b1d]">
                      <DeleteIcon/>
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
