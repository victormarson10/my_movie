import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { MovieList } from "./components/MoviesList";
import { MoviesContainer } from "./styles/MoviesContainer";
import { MovieService } from "./api/MoviesService";

function App() {
  const [movies, setMovies] = useState([]);
  const fecthMovies = async (movies) => {
    const {data} = await MovieService.getMovies();
    setMovies(data.results);
    console.log(data.results);
  }

  useEffect(() => {
    fecthMovies();
  }, []);

  return (
    <div className="App">
      <Header />

      <MoviesContainer>
        <MovieList movies={movies} />
      </MoviesContainer>
    </div>
  );
}

export default App;
