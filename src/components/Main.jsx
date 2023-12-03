import { useState } from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
import { initialMovies } from "../App";

const Main = () => {
    const [movies, setMovies] = useState(initialMovies);
     const [year, setYear ] = useState();

      const [movie, setMovie] = useState({
          title: '',
          description: '',
          image: '',
          year: ''
      });

      const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        setMovie({
            ...movie,
            [name]: value,
        })
    }

    const handleAdd = (e) => {
      e.preventDefault(); 
      console.log(initialMovies.id);
      setMovie(initialMovies.push(movie));     
  }
     
     function handleFilter () {
        const filteredMovies = initialMovies.filter((movie) => movie.year === +year);
            setMovies(filteredMovies);
            console.log(filteredMovies);
     }
    return (
    <div className="main">
    <input type="number" value={year} onChange = {(e) =>  {setYear(e.target.value);}} />
     <button onClick={handleFilter}>მოძენბნა</button>
     <Link to="/add-new"> დამატება </Link>
     <form>
            ფილმი სახელი: <input type="text" name="title" value={movie.title} onChange={handleChange} />
            ფილმის აღწერა: <input type="text" name="description" value={movie.description} onChange={handleChange} />
            ფილმის სურათი : <input type="text" name="poster" value={movie.poster} onChange={handleChange} /> 
            გამოშვების წელი: <input type="text" name="year" value={movie.year} onChange={handleChange} />

            <button onClick={handleAdd} > დამატება</button>
        </form>


     
    <div className="content">
        { movies.map((movie) => 
            <MovieCard data={movie} />
        ) }
        
    </div>
    </div>
)}

export default Main;



