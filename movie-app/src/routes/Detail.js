import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import styles from "../css/Detail.module.css";

function Detail() {
    const[background, setBackground] = useState("");
    const[title, setTitle] = useState("");

    const {id} = useParams();
    
    const getMovie = async() => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
        setBackground(json.data.movie.background_image_original);
        setTitle(json.data.movie.title);
    };

    useEffect(() => {
        getMovie();
    },[]);

    return (
        <html>
            <body style={{
                backgroundImage: `url(${background})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: "cover",
                width: '100vw',
                height: '100vh'
            }}>
                <h1 className={styles.title}>{title}</h1>
    
            </body>
        </html>
    )
}

export default Detail;