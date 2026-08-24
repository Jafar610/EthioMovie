import React from 'react'
import TuneIcon from '@mui/icons-material/Tune';
import movies from '../../API/data';
import StarIcon from '@mui/icons-material/Star';
function MoviePage() {
  return (
    <>
     <div className='px-20'>
        <div>
            <h1>Movies</h1>
            <div className='flex justify-center align-center gap-10'>
                <select name="" id="">
                    <option value="">All Genres</option>
                </select>

                <select name="" id="">
                    <option value="">All Years</option>
                </select>

                <select name="" id="">
                    <option value="">Popular</option>
                </select>

                <div>
                 <TuneIcon/>
                 <button>Filters</button>
                </div>
            </div>

            <div>
                <h4>Showing 1-20 of 320 Movies.</h4>
                <div className='grid grid-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
                    {
                        movies.map((movie, index)=>(
                            <div key={index} className='rounded-xl overflow-hidden hover:scale-104 relative '>
                                <img src={movie.image} alt="" className='rounded-xl' />

                                <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent'></div>

                                <div className='absolute bottom-0 w-full px-2 py-2'>
                                    <h2 className='text-lg font-bold text-white'>{movie.title}</h2>
                                <div className='flex justify-between align-center text-gray-300'>
                                    <div><p>2022.Drama</p></div>
                                    <div className='flex text-yellow-500'>
                                        <StarIcon/>
                                        <p>4.5</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
     </div>
    </>
  )
}

export default MoviePage