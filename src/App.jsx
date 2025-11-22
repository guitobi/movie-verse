// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './index.css'
import Card from './components/MovieCard'

const movie = {
  title: "The Matrix",
  release_date: "1999-03-30",
  poster_path: "https://m.media-amazon.com/images/I/71PfZFFz9yL._AC_UF894,1000_QL80_.jpg"
}

function App() { 
  return (
    <>
      <h1 className='text-3xl text-red-500 font-bold underline'>MovieVerse</h1>
      <Card movie={movie}></Card>
    </>
  )
}

export default App
