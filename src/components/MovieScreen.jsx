import MovieCard from './MovieCard';
import React from "react";

const MovieScreen = ({ movieList, page, setPage, addMovie, removeMovie, watchList}) => {
    const decrement = () => setPage(page - 1);
    const increment = () => setPage(page + 1);

const movieDisplay = movieList.map((movie, index) => {
    return <MovieCard movie={movie} addMovie={addMovie} watchList={watchList} removeMovie={removeMovie}/>
});

return (
<div className="page">
    <h1>"Michelle's Movie Theater"</h1>
    <h3>Add a movie to your watchlist</h3>
    <div className="movie-container">
        {movieDisplay}
        <div className='btn-containter'>
        <button onClick= {page !==1 ? decrement: undefined}>Previous</button>
        <button onClick={increment}>Next</button>
        </div>
        <div className="movie-container">{movieDisplay}</div>
    </div>
</div>

);
};

export default MovieScreen;