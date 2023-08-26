import MovieCard from './MovieCard';
import React from "react";

const Watchlist = ({watchList, removeMovie}) => {

//The code maps through each movie in the watchList and returns a MovieCard component for each movie.
const movieDisplay = watchList.map((movie, index) => {
    return <MovieCard key={index} movie={movie} removeMovie={removeMovie} watchList={watchList}/> //The movie object is passed as a prop to the MovieCard component.
});


return (
    <div className="watchlist">
        <h1>My Watchlist</h1>
        <div className='movie-container'>
            {movieDisplay}
        </div>
    </div>
)};

export default Watchlist;