import { useState } from "react";
import MovieList from "../components/movie/MovieList"
import Sortieren from "../components/sortierfunktion/Sortieren";
import data from "../data/data"


const Home = () => {

    const [getMovie, setMovie] = useState(data);

    return ( 
        <>
        <Sortieren data={getMovie} setMovieData={setMovie} />
        <MovieList data={getMovie}/>
        </>
    );
}

export default Home;