import React, { useState } from "react";
import './movieBox.styles.css'

const MovieBox = ({imgLink, movieName, watchedAt, rating, review}) => {

    const [viewReview, setViewReview] = useState(false);

    return (
        <div className='movie-box'>
            {imgLink ? <img src={imgLink} className="movie-img" alt="" /> : <div className="movie-img">No img</div>}
            <div className='movie-details'>
            <div className='about-movie'>
                <p className='movie-name bold mb-2'>{movieName}</p>
                <p className='movie-watched'>Watched on: <br/> {watchedAt}</p>
            </div>
            <div className='rating-review'>
                <p className='ratings mb-2'>{rating} / 10</p>
                <button className='btn btn-review' onClick={() => setViewReview(!viewReview)}>View Review</button>
            </div>
            </div>
            {viewReview ? <div className="review-box">{review && review}</div> : ""}
        </div>
    )
}

export default MovieBox;