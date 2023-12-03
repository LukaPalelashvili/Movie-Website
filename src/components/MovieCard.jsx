const MovieCard = ({data}) => {
    return <div className="movie-card"> 
    <h3>{data.title} </h3>
    <img src={data.poster} />
    <div className="description">
     <p>{data.description}</p>  
    </div>
    <div className="realease-date">
       <p> {data.year}</p> 
    </div>
    </div>
}

export default MovieCard;