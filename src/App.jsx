import { useState, useEffect } from 'react'
import './index.css'
import Card from './components/MovieCard'

function App() { 
  const [movies, setMovies] = useState([]);
  useEffect(() => {
          // movies.map((movie) => {
          //     return <Card key={movie.id} movie={movie}/>
          // })
          const fetchMovies = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&page=1`);
            const data = await response.json();
            setMovies(data.results);
          }
          fetchMovies();
        }, []);
  return (
    <>
      <h1 className='text-3xl text-red-500 font-bold underline'>MovieVerse</h1>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>{movies.map((movie) => {
        return <Card key={movie.id} movie={movie}/>
      })}</div>
    </>
  )
}

export default App
