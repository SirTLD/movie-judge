// app/page.tsx or app/home/page.tsx
'use client'

import Header from '@/components/Header'
import MovieGrid from '@/components/MovieGrid'
import { useEffect, useState } from 'react'
import { fetchMovies, Movie } from '@/lib/tmdb'
import { useDebounce } from '@/hooks/useDenounce'

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearch = useDebounce(searchTerm, 500)

  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    loadMovies(debouncedSearch)
  }, [debouncedSearch])

  async function loadMovies(search?: string) {
    try {
      setLoading(true)
      setError(null)
      const results = await fetchMovies(search)
      setMovies(results)
    } catch (err) {
      setError(err as string)
      setMovies([])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='wrapper-container'>
      <Header onSearchChange={setSearchTerm} />
      <main id='main'>
        {loading && <div className='loading'>Loading...</div>}
        {!loading && error && <div className='error'>{error}</div>}
        {!loading && !error && <MovieGrid movies={movies} />}
      </main>
    </div>
  )
}
