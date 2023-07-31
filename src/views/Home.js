import { useEffect, useState } from "react";
import { MovieList } from "../components/MoviesList";
import { MoviesContainer } from "../styles/MoviesContainer";
import { MoviesService } from "../api/MoviesService";

export const Home = () => {
    const [movies, setMovies] = useState([]);
    
    const fecthMovies = async () => {
        const {data} = await MoviesService.getMovies();
        setMovies(data.results);
  }

    useEffect(() => {
        fecthMovies();
  }, []);

    return(
     <MoviesContainer>
        <MovieList movies={movies} />
      </MoviesContainer>
      )
};