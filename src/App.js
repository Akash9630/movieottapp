import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import "./App.css";
import AddFavouriteIcon from "./components/AddFavouriteIcon";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import RemoveFavouriteIcon from "./components/RemoveFavouriteIcon";
import SearchBox from "./components/SearchBox";


function App() {
  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState("")
  const [favourites, setFavourites] = useState([])

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=4df45d13`

    const response = await fetch(url)
    const responseJson = await response.json()

    if (responseJson.Search) {
      setMovies(responseJson.Search)
    }
  }

  useEffect(() => {
    getMovieRequest(searchValue)
  }, [searchValue])

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem('react-movie-app-favourites')
    );

    if (movieFavourites) {
      setFavourites(movieFavourites);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
  };

  const AddFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie]
    setFavourites(newFavouriteList)
    saveToLocalStorage(newFavouriteList);

  }
  const RemoveFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    )
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  }

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <Header heading="LTM Play" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row">
        <MovieList
          movies={movies}
          handleFavourites={AddFavouriteMovie}
          favouriteComponentIcon={AddFavouriteIcon} />
      </div>
      <hr />
      <div className="row d-flex align-items-center mt-4 mb-4">
        <Header heading="favourites" />
      </div>
      <div className="row">
        <MovieList
          movies={favourites}
          handleFavourites={RemoveFavouriteMovie}
          favouriteComponentIcon={RemoveFavouriteIcon}
        />
      </div>
    </div>
  );
}
export default App;