import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import Row from '../row/row.component';
import './moviesContainer.styles.css';

const MoviesContainer = ({movies}) => {
    const windowSize = useWindowSize();
    let definer;
    
    if(windowSize.width <= 1920) definer = 4
    if(windowSize.width <= 1280) definer = 3
    if(windowSize.width <= 764) definer = 2
    if(windowSize.width <= 480) definer = 1
    const newMovies = Array(12).fill(movies[0])

    const rowCount = Math.ceil(movies.length / definer);

    console.log(rowCount, definer)
    const arr = Array(rowCount || 0).fill("")

    return (
        <div className='movies-container'>
            {arr ? arr.map((_, i) => <Row movies={movies.slice(i*definer, (i*definer)+definer)}/>) : ''}
        </div>
    )
}

export default MoviesContainer;