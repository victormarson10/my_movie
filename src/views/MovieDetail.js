import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { MoviesService } from "../api/MoviesService";



export const MovieDetail = () => {
    const { id } = useParams();

    const [movie, setMovie] = useState({});
    
    const fecthMovie = async () => {
        const {data} = await MoviesService.getMoviesById(id);
        setMovie(data);
  }

    useEffect(() => {
        fecthMovie();
  }, []);

    return (
        <>
        <h1>{movie.title}</h1>

        <article>
            {movie.overview}
        </article>
        </>
    )
}