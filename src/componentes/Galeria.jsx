import { useEffect, useState } from 'react';
import oleo1 from '../assets/imagenes/oleo1.jpg';
import oleo2 from '../assets/imagenes/oleo2.jpg';
import oleo3 from '../assets/imagenes/oleo3.jpg';
import '../App.css';

const imagenes = [oleo1, oleo2, oleo3];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export function Galeria(props) {
    const [foto, setfoto] = useState(oleo1);
    
    // Establece una nueva imagen a "foto"
    const siguienteFoto = () => {
        setfoto(imagenes[getRandomInt(imagenes.length)]);
    }

    useEffect(() => {
        setInterval(() => {
            siguienteFoto();
        }, 1000);
    }, [])

    return (
        <div>
            <img src={foto} alt="Foto Oleo" width={400} height={300}/>
            <br />
            <button onClick={siguienteFoto}>Siguiente Imagen</button>
        </div>
        
    );
}