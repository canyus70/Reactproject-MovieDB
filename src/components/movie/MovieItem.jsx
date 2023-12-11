import  "./Movie.css"




const MovieItem = (props) => {
    return ( 
        
        <article className="item">
            <h1>{props.filmTitel}</h1>
            <p>{props.filmJahr}</p>
            <p>{props.filmRegi}</p>
            <p>{props.filmDauer}</p>
            <div className="itemflex"><p>{props.filmGenre.join(", ")}</p></div>
            <p>{props.filmRating}</p>
        </article>
        
    );
}


export default MovieItem;