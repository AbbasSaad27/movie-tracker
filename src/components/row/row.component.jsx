import React from "react";
import MovieBox from "../movie-box/movieBox.component";
import Shelf from "../shelf/shelf.component";
import "./row.styles.css";

const Row = ({movies}) => {
    return (
        <div className='row row-1'>
            <Shelf />
            <div className="movies">
                {movies.map((movie, i) => <MovieBox key={i} {...movie}/>)}
            </div>
        </div>
    )
}

export default Row;