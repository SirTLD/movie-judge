export interface Movie {
  id: number
  title: string
  poster_path: string | null
  vote_average: number
  overview: string
  release_date?: string
  genre_ids?: number[]
  original_language?: string
  original_title?: string
  popularity?: number
  video?: boolean
  adult?: boolean
  backdrop_path?: string | null
}

export interface ApiResponse {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}

export interface HeaderProps {
  onSearch: (searchTerm: string) => void
}

export interface MovieGridProps {
  movies: Movie[]
}

export interface MovieCardProps {
  movie: Movie
}

export type RatingColor = 'green' | 'orange' | 'red'
export type ThumbDirection = 'up' | 'down'
