import { useState } from "react";

const CarritoContador = () => {

    const [contador, setContador] = useState(0)
    const aumentarContador = () => {
        setContador(contador + 1)
    }
    const disminuirContador = () => {
        if(contador!=0){
            setContador(contador - 1)
        } 
    }
    return (
        <div>
            <p>{contador}</p>
            <button onClick={aumentarContador}> + </button>
            <button onClick={disminuirContador}> - </button>
        </div>
    )
}



export default CarritoContador