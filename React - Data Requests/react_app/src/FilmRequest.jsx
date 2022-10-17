import {useState} from 'react';
import axios from 'axios'

const Film = () => {
    const [data, setData] = useState ("");
    const [apiKey, setApiKey] = useState ("");
    const [filmTitle, setFilmTitle] = useState ("");

    const updateApiKey = (e) => {  
      e.preventDefault();
      setFilmTitle(e.target.value);
    }
  
    const makeRequest = (e) => {
     
      axios.get("http://www.omdbapi.com/?apikey=" + apiKey + "&t" + filmTitle)
      .then(response => {
        console.log(response.data);
        setData(response.data);
      });
    };
    
    return (
      <>
      <div>
        <h2>FilmRequest.js</h2>
          <p>b8daade7</p>
          <input type="text" onChange={(e)=> updateApiKey(e)}/>
          <p>Enter the name of the film you are searching for</p>
          <input type="text" onChange={(e)=> setFilmTitle(e)}/>
          <p>Do not click this button until the fields above are correctly filled</p>
          <button onClick={(e) => makeRequest(e)}>Click me</button>
  
          <h4>{data.Title}</h4>
          <h4>{data.Year}</h4>
          <h4>{data.Rated}</h4>
          <h4>{data.Genre}</h4>
          <h4>{data.Plot}</h4>
  
          <img src={data.Poster} alt="The Poster"></img>
      </div>
      </>
    );
  }

  export default Film;