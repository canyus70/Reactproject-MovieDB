import MovieItem from "./MovieItem"
import { v4 as uuidv4 } from 'uuid';
import  "./Movie.css"






const MovieList = ({data}) => {
    return ( 
        <section className="filmlist">
            {data.map((singleMovie) => <MovieItem
            key={uuidv4()}
            filmTitel={singleMovie.title}
            filmJahr={singleMovie.year}
            filmRegi={singleMovie.director}
            filmDauer={singleMovie.duration}
            filmGenre={singleMovie.genre}
            filmRating={singleMovie.rate}
            />)}
        </section>
    );
}

export default MovieList;