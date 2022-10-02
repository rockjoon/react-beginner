import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

function Movie() {
    const [loading, setLoading] = useState(true)
    const [movies, setMovie] = useState([])
    const getMovies = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
        ).json()
        setMovie(json.data.movies)
        setLoading(false)
    }
    useEffect(() => {
        getMovies()
    }, [])
    return (
        <div>
            <h1>Great Movies {loading ? null : `(${movies.length})`}</h1>
            <div>
                {movies.map(m => {
                    return (<div key={m.id}>
                        <h2>
                            <Link to={`/movies/${m.id}`}>{m.title}</Link>
                        </h2>
                        <img src={m.medium_cover_image} />
                        <p>{m.summary}</p>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default Movie

