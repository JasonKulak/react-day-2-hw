

// the component function
const Movie = (props) => {

    //The Components Returned JSX
    return <div className="Movie">
        <div> 
            <h1>{props.movie.name}</h1>
            <h3>{props.movie.year}</h3>
            <h4>{props.movie.rating}</h4>
            <img src={props.movie.image} />
        </div>
    </div>
}

// export the component
export default Movie