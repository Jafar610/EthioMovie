import movie from '../../API/data'
import MovieRow from '../MovieRow/MovieRows'
function Movies() {
  return (
    <>
    <div className="bg-black min-h-screen">
      <MovieRow title="Trending Now" movies={movie} />
      <MovieRow title="Popular Movies" movies={movie} />
      <MovieRow title="Top Rated" movies={movie} />
    </div>
    </>
  )
}

export default Movies