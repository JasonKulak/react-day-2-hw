import Movie from './Movie'

// the component function
const Movies = (props) => {

    //The Components Returned JSX
    return <div className="Movies">
       {props.movies.map((movie) => {
        return <Movie movie={movie} key={movie.name}/>
       })}
    </div>
}

// export the component
export default Movies