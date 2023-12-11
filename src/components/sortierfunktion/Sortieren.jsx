import "./Sortieren.css"



const Sortieren = ({data, setMovieData}) => {



    const jahrAufsteigend = () => [...data].sort((movie1, movie2) => {
        return movie1.year -movie2.year
    })

    const jahrABsteigend = () => [...data].sort((movie1, movie2) => {
        return movie2.year -movie1.year
    })

    const ratingAufsteigend = () => [...data].sort((movie1, movie2) => {
        return movie1.rate -movie2.rate
    })

    const AtoZ = [...data].sort((movie1, movie2) => {
        if (movie1.title.charAt(0) < movie2.title.charAt(0)) {
            return -1;
        } else if (movie1.title.charAt(0) > movie2.title.charAt(0)) {
            return 1;
        } else {
            return 0;
        }
    });
    
    const ZtoA = [...data].sort((movie1, movie2) => {
        if (movie2.title.charAt(0) < movie1.title.charAt(0)) {
            return -1;
        } else if (movie2.title.charAt(0) > movie1.title.charAt(0)) {
            return 1;
        } else {
            return 0;
        }
    });

    


    return ( 
        <nav>
            <button onClick={() => setMovieData(jahrAufsteigend)}>Sort by Date Ascending</button>
            <button onClick={() => setMovieData(jahrABsteigend)}>Sort by Date Decending</button>
            <button onClick={() => setMovieData(ratingAufsteigend)}>Best rate</button>
            <button onClick={() => setMovieData(AtoZ)}>A-Z</button>
            <button onClick={() => setMovieData(ZtoA)}>Z-A</button>
        </nav>
    );
}

export default Sortieren;