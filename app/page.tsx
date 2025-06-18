// pages/index.js
import { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import MovieGrid from '../components/MovieGrid'

const API_URL = process.env.API_URL
const SEARCH_API = process.env.SEARCH_API

export default function Home() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getMovies(API_URL)
  }, [])

  async function getMovies(url) {
    try {
      setLoading(true)
      const res = await fetch(url)
      const data = await res.json()
      setMovies(data.results)
    } catch (error) {
      console.error('Error fetching movies:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (searchTerm) => {
    if (searchTerm && searchTerm !== '') {
      getMovies(SEARCH_API + searchTerm)
    } else {
      getMovies(API_URL)
    }
  }

  return (
    <>
      <Head>
        <title>Film Judge</title>
        <meta name='description' content='Movie rating and discovery app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://use.fontawesome.com/releases/v5.15.3/css/all.css'
          integrity='sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk'
          crossOrigin='anonymous'
        />
      </Head>

      <div className='wrapper-container'>
        <Header onSearch={handleSearch} />
        <main id='main'>
          {loading ? (
            <div className='loading'>Loading...</div>
          ) : (
            <MovieGrid movies={movies} />
          )}
        </main>
      </div>
    </>
  )
}
