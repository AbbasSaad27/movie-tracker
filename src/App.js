import { useState } from 'react';

import Firebase from './firebase/firebase';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore'
import './App.css';
import MoviesContainer from './components/movies-container/moviesContainer.component';
import MoviesContext from './contexts/moviesContext/moviesContext';
import MovieForm from './components/movieForm/movieForm.component';

function App() {
  
  const [moviesData, setmoviesData] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const db = getFirestore(Firebase)

  const moviesCollectionRef = collection(db, "movies")

  moviesData[0] || getDocs(moviesCollectionRef).then(allDocs => {
    let moviesArr = []
    allDocs.forEach(doc => {
      moviesArr.push(doc.data())
    })
    setmoviesData(moviesArr)
  })

  const addMovie = async(movieData) => {
    const docRef = await addDoc(moviesCollectionRef, movieData)
    console.log(docRef);
  }

  return (
    <div className="App">
      <h1 className='app-title'>Movie Tracker</h1>
      <button className='btn btn-addMovie' onClick={() => setShowForm(!showForm)}>Add Movie +</button>
      {showForm && <MovieForm moviesData={moviesData} setmoviesData={setmoviesData} addMovie={addMovie}/>}
      <MoviesContext.Provider value={moviesData}>
        <MoviesContainer movies={moviesData}/>
      </MoviesContext.Provider>
    </div>
  );
}

export default App;
