import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail() {
    const[trailer, setTrailer] = useState("");

    const {id} = useParams();
    
    const getMovie = async() => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setTrailer(json.data.movie.yt_trailer_code);
    };

    useEffect(() => {
        getMovie();
    },[]);

    return (
        <iframe width="600" height="600" src={`https://www.youtube.com/embed/${trailer}`} frameBorder="0" allowFullScreen></iframe>
    )
}

export default Detail;