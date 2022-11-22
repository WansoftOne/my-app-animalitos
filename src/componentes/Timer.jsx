import { useCallback, useEffect, useRef, useState } from "react";

export function Timer(props) {
    const tiempo = props.tiempo ?? 10; //25
    const [tiempoRestante, setTiempoRestante] = useState(tiempo);
    const interval = useRef(null);

    const iniciarTimer = useCallback(() => {
        // Guardamos en interval.current el intervalo para ser capaces de limpiarlo despues.
        interval.current = setInterval(() => {
            // setTiempoRestante(tiempoRestante - 1)
            // setTiempoRestante((valorActual) => {
            //     return nuevoValor;
            // })
            setTiempoRestante((valorActual) => {
                const nuevoValor = valorActual - 1;
                if (nuevoValor === 0 ) {
                    // Limpiamos el interval para evitar que la funcion se siga ejecutando
                    clearInterval(interval.current);
                }

                return nuevoValor;
            });
        }, 1000);
    }, [])

    const renderTiempo = () => {
        if (tiempoRestante === 0) {
            return <h1>El tiempo se acabo</h1>;
        }

        return <h1>{tiempoRestante} Segundos</h1>;
    }

    useEffect(() => {
        iniciarTimer();
    }, [iniciarTimer])

    console.log("Renderiando componente Timer")
    return (
        <div>
            <p>Tiempo Restante</p>
            { renderTiempo() }
            <button onClick={iniciarTimer}>Iniciar</button>
        </div>
    );
}