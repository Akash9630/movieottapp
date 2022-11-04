const MovieList = (props) => {
    const FavouriteComponent = props.favouriteComponentIcon
    return (
        <>
            {
                props.movies.map((movie) => (
                    <div className="image-container d-flex justify-content-start" key={movie.id}>
                        <img src={movie.Poster} alt="not found" />
                        <div
                            onClick={() => props.handleFavourites(movie)}
                            className="overlay d-flex align-items-center justify-content-center"
                        >< FavouriteComponent />
                        </div>
                    </div>
                ))
            }
        </>
    )
}
export default MovieList