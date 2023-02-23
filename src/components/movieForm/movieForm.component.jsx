import React, { useState } from "react";
import './movieForm.styles.css';

const MovieForm = ({moviesData, setmoviesData, addMovie}) => {
    const [movieDataInput, setMovieDataInput] = useState({});

    const handleChange = (e) => {
        movieDataInput[e.target.name] = e.target.value;
        setMovieDataInput(movieDataInput);

        console.log(movieDataInput)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!movieDataInput.review) {
            alert("Please add a review");
            return;
        }

        setmoviesData([...moviesData, movieDataInput]);
        addMovie(movieDataInput)

        console.log(movieDataInput)
    }

    return(
        <form>
            <div className="input-container input-name-container">
                <label htmlFor="movieName">Movie Name:</label>
                <input name="movieName" type="text" placeholder="type Movie Name" required onChange={handleChange}/>
            </div>
            <div className="input-container input-name-container">
                <label htmlFor="movieName">Movie Image Link:</label>
                <input name="imgLink" type="text" placeholder="Insert Image link (optional)" onChange={handleChange}/>
            </div>
            <div className="input-container input-watchedOn-container">
                <label htmlFor="movieWatchedOn">Watched On:</label>
                <input name="watchedAt" type="date" placeholder="Select the date the movie was watched" required onChange={handleChange}/>
            </div>
            <div className="input-container input-rating-container">
                <label htmlFor="movieName">Rating:</label>
                <input name="rating" type="number" placeholder="Rate out of 10" min="1" max="10" required onChange={handleChange}/>
            </div>
            <div className="input-container input-review-container">
                <label htmlFor="movieReview">Review: </label>
                <textarea name="review" id="movieReview" onChange={handleChange}></textarea>
            </div>

            <button type="submit" className="btn btn-submit" onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default MovieForm;