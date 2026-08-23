import React from "react";

function MovieCard({ movie }) {
  return (
    <>
      <div
        className="min-w-[180px] h-[270px] rounded-lg overflow-hidden 
                    relative group cursor-pointer 
                    transform hover:scale-110 transition duration-300"
      >
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/60 opacity-0 
                      group-hover:opacity-100 transition flex items-end p-2"
        >
          <h3 className="text-white text-sm">{movie.title}</h3>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
