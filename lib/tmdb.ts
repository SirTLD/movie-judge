const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY || ''
const BASE_URL = 'https://api.themoviedb.org/3'

export interface Movie {
  id: number
  title: string
  poster_path: string | null
  vote_average: number
  overview: string
}

export async function fetchMovies(search?: string): Promise<Movie[]> {
  const url =
    search && search.trim()
      ? `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
          search
        )}`
      : `${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`

  const res = await fetch(url)
  if (!res.ok) throw new Error(`HTTP error: ${res.status}`)

  const data = await res.json()
  return data.results
}
