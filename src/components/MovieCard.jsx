function Card({movie}) {
    return (
        <div className='rounded-lg shadow-lg hover:scale-[1.05] overflow-hidden w-[240px] transition-all'>
            <img className='poster poster_path' src={movie.poster_path}></img>
            <h3 className='title'>{movie.title}</h3>
            <h2 className='year'>{movie.release_date}</h2>
        </div>  
    )
};

export default Card
