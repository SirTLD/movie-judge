'use client'

import React, { SyntheticEvent } from 'react'
import Image from 'next/image'

import { ThumbsUp, ThumbsDown } from 'lucide-react'

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const DEFAULT_IMAGE =
  'https://upload.wikimedia.org/wikipedia/commons/6/64/Poster_not_available.jpg'

interface Movie {
  id: number
  title: string
  poster_path: string | null
  vote_average: number
  overview: string
}

interface MovieCardProps {
  movie: Movie
}

type RatingColor = 'green' | 'orange' | 'red'
type ThumbDirection = 'up' | 'down'

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const { title, poster_path, vote_average, overview } = movie

  const getImageSrc = (posterPath: string | null): string => {
    return posterPath ? IMG_PATH + posterPath : DEFAULT_IMAGE
  }

  const getThumbDirection = (vote: number): ThumbDirection => {
    return vote >= 5 ? 'up' : 'down'
  }

  const getRatingColor = (voteTally: number): RatingColor => {
    if (voteTally >= 8) return 'green'
    if (voteTally >= 5) return 'orange'
    return 'red'
  }

  const handleImageError = (
    e: SyntheticEvent<HTMLImageElement, Event>
  ): void => {
    const target = e.target as HTMLImageElement
    target.src = DEFAULT_IMAGE
  }

  return (
    <div className='movie'>
      <div className='movie-image-container'>
        <Image
          src={getImageSrc(poster_path)}
          alt={title}
          width={300}
          height={450}
          style={{ objectFit: 'cover' }}
          onError={handleImageError}
        />
      </div>
      <div className='movie__info'>
        <h3>{title}</h3>

        {getThumbDirection(vote_average) === 'up' ? (
          <ThumbsUp
            className={`rating-icon  ${getRatingColor(vote_average)}`}
          />
        ) : (
          <ThumbsDown
            className={`rating-icon  ${getRatingColor(vote_average)}`}
          />
        )}
      </div>
      <div className='movie__overview'>
        <h3>Overview</h3>
        {overview || 'No overview available'}
      </div>
    </div>
  )
}

export default MovieCard
