import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import SearchBox from "./components/SearchBox";

function App() {
  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState("")
  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <Header heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>

      <div className="row">
        <MovieList movies={movies} />
      </div>

    </div>
  );
}

export default App;

