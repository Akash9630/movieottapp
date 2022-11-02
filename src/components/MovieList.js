const MovieList = (props) => (
    <>
        {props.movies.map((movie) => (
            <div className="image-container d-flex justify-content-start m3" key={movie.id}>
                <img src={movie.Poster} alt="not found" />
            </div>
        ))}
    </>
)
export default MovieList