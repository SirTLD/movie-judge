import React from 'react'
import MovieCard from './MovieCard'

interface Movie {
  id: number
  title: string
  poster_path: string | null
  vote_average: number
  overview: string
}

interface MovieGridProps {
  movies: Movie[]
}

const MovieGrid: React.FC<MovieGridProps> = ({ movies }) => {
  if (!movies || movies.length === 0) {
    return (
      <div className='no-movies'>
        <p>No movies found</p>
      </div>
    )
  }

  return (
    <>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </>
  )
}

export default MovieGrid
