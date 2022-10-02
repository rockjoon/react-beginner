import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function Detail() {
    const { id } = useParams()
    const [movie, setMovie] = useState("")
    const getDetail = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json()
        setMovie(json.data.movie)
    }
    useEffect(() => {
        getDetail()
    }, [])
    console.log(movie)
    return (
        <div>
            <h1>{movie.title_long}</h1>
            <img src={movie.large_cover_image}/>
            <p>{movie.descrition_full}</p>
            <ul>
                <Genres genres={movie.genres}/>
                <li>rating : {movie.rating}</li>
                <li>runtime : {movie.runtime} </li>
            </ul>
            <p>{movie.description_full}</p>
        </div>
    )
}

function Genres({genres}) {
    if (!genres) return
    return (<li>Genres : {genres.join(", ")}</li>)
}

export default Detail