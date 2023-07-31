import { MovieItem } from "./MovieItem";

export const MovieList = ({ movies }) => (
    <section>
        <ul>
            {movies.map(m => <MovieItem id={m.id} title={m.title} />)}
        </ul>
    </section>
)