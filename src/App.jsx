// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './index.css'
import Card from './components/MovieCard'

function App() { 
  const movies = [
    { id: 1, title: "The Matrix", release_date: "1999-03-30", poster_path: "https://m.media-amazon.com/images/I/71PfZFFz9yL._AC_UF894,1000_QL80_.jpg" },
    { id: 2, title: "Inception", release_date: "2010-07-15", poster_path: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg" },
    { id: 3, title: "Interstellar", release_date: "2014-11-05", poster_path: "https://mythicwall.com/cdn/shop/files/Interstellar_2BMovie_2B_2Bposter_2BPrint_2BWall_2BArt_2BPoster_2B1-W0pfS_1024x1024.jpg?v=1762442294" },
    { id: 4, title: "The Dark Knight", release_date: "2008-07-16", poster_path: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg" },
  ];
  return (
    <>
      <h1 className='text-3xl text-red-500 font-bold underline'>MovieVerse</h1>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>{
        movies.map((movie) => {
          return <Card key={movie.id} movie={movie}/>
        })
      }</div>
    </>
  )
}

export default App
