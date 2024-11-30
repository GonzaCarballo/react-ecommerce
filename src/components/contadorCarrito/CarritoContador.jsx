import { useState } from "react";

const CarritoContador = () => {

    const [contador, setContador] = useState(0)
    const aumentarContador = () => {
        setContador(contador + 1)
    }
    return (
        <div>
            <p>{contador}</p>
            <button onClick={aumentarContador}> + </button>
        </div>
    )
}


export default CarritoContador