import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./MiniCard.module.css";

function MiniCard() {
    const [animes, setAnimes] = useState([]);
    const [indiceActual, setIndiceActual] = useState(0);

    const animeActual = animes[indiceActual];

    useEffect(() => {
        const cargarAnimes = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:3000/anime/banner"
                );
                setAnimes(response.data.data.Page.media);
            } catch (error) {
                console.error("Error al obtener los animes:", error);
            }
        };

        cargarAnimes();
    }, []);

    if (!animeActual) return null;

    return(
        <section className={styles.minicard}>
            <div
                className={styles.minicard_slide}
                style={{backgroundImage: `url(${animeActual.coverImage?.large})`
                }}
            >
                <div className={styles.minicard_contenido}>
                    <div className={styles.minicard_encabezado}>
                        <h3 className={styles.minicard_nombre}>
                            {animeActual?.title?.romaji}
                        </h3>

                        <p className={styles.minicard_valoracion}>
                            ⭐{animeActual?.popularity}
                        </p> 
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MiniCard;