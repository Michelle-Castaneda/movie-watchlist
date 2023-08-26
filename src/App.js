import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import MovieScreen from "./components/MovieScreen";
import Watchlist from "./components/Watchlist";

function App() {

  const [movieList, setMovieList] = useState([]); //Holds a list of movies fetched from the API.
  const [watchList, setWatchList] = useState([]); //Contains movies added to a watchlist by the user.
  const [page, setPage] = useState(1); //Stores the current page of the API results.
  
    const addMovie = (movie) => setWatchList([...watchList, movie]);
    
    const removeMovie = (movie) => {
      const newState = watchList.filter((mov) => {
        return mov !== movie;
      });
      setWatchList(newState);
    };
  
  //Fetches popular movies using the API and updates the movieList state.
  const getData = () => {
  axios
  .get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
  .then((res) => {
    console.log(res.data.results);
    setMovieList(res.data.results);
  });
  };
  
 //Fetches movie data using the getData function whenever the page state changes
useEffect (() => {     
// call getData within useEffect
getData();
},[page]); // Empty dependency array to ensure this useEffect runs after rendered
           //Invoke getData inside of your useEffect, and add page as a dependency to your useEffect

  return (
    <div className="App">
      <Header />
      <main>
        <MovieScreen
        addMovie={addMovie}
        movieList={movieList}
        page={page}
        setPage={setPage}
        watchList={watchList}
        removeMovie={removeMovie}
        />
        <Watchlist watchList={watchList} removeMovie={removeMovie}/>
      </main>
      </div>
  );

}

export default App;
