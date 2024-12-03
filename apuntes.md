---
Comando, en terminal, para iniciar la app

> npm run dev


Comando rapido para hacer un objeto

> rafc


Link github clases: https://github.com/MartinPerezDev/camada-63395
---


Si la primera letra de una funcion es mayuscula == Es un componente 

En la parte de arriba del componente es la logica del back y la parte de atras es la visual del front

## Contenacion de Strings

let nombre = "Gonzalo"
let saludo = `Hola ${nombre}`    ((Las comillas esas es un alt+96))


Ejemplo arrow function

const suma = (a, b) => a + b        (Esto es igual que poner la funcion con el return abajo)

------------------
> Spead operator (copia valores de uno a otro)
------------------

const array1 = [1,2,3]
const array2 = [...array1]

const obj1 = {name : "Gonzalo"}
const obj2 = {...obj1}

------------------

> Desestructuracion  (Se usa para obtener datos sin tener que hacer una variable para cada dato)


const persona = {nombre: "Gonzalo", edad: 26}

const {edad, nombre} = persona
console.log(edad)

// ejemplo con array

const numeros = [1, 2, 3]
const [primerValor, segundoValor, tercerValor] = numeros

------------------

> MAP      (sirve para hacer algo con un array, sin modificar el original)


Ejemplo 1  
Va a ir recibiendo todos los numeros y por  cada uno, lo multiplica por 2 y lo va guardando

const arryOriginal [1, 2, 3]
const arrayNuevo = arrayOriginal.map( (numero) => numero * 2 )        

Ejemplo 2 
Agarra del array original, los objetos y arma uno array nuevo solo con los precios

const productos = [
  {
    id: "Afgg112",
    nombre: "Auriculares",
    precio: 1500,
  },
  {
    id: "Grr222",
    nombre: "Teclado",
    precio: 2000,
  },
  {
    id: "Httt222",
    nombre: "Mouse",
    precio: 300,
  },
];

const productosPrecios = productos.map((unProducto) => unProducto.precio);


------------------

>Filter

Crea una nueva lista, agarra la lista de productos del punto anterior y filtra por los precios

const productosFiltrados = productos.filter( (unProducto) => unProducto.precio <= 1500);

   
------------------

>FIND       (Itera y busca si hay una coincidencia, solo encuentra un elemento)


const productoEncontrado = productos.find( (unProducto) => unProducto.id === "Grr222");



--------

Hooks de estado

UseState

La idea es que se actualice la pantalla, cuando haga cierta accion asociada a este hook

useState es uno de los hoocks, hay muchos mas

import {useState} from "react"    (Dentro del archivo que se quiere usar, se debe poner esto)

const [ contador, setContador ] = useState(0)     //siempre se pone la variable y al lado set + el nombre de la variable

const aumentarContador = ()=> {
  setContador(contador + 1)  //cuando se llama al setContador, es cuando se utiliza el hook y se refresca la pantalla
}


--------

Props Children

> Se usa para enviar texto con etiquetas o ya personalizados entre clases. 

Ejemplo:
<PadreComponente>    //esta es la clase que va a recibir
  <p> Texto a enviar </p>
</PadreComponente>


const PadreComponente = (props) => {   //recibe
  return {
    <div>
    {props.children}
    </div>
  }
}


--------

useEffect

//Se ejecuta solo al montar el componente, una ves sola. no se repite.


useEffect (() => { 
  const fetchApi = () => {
    fetch ("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => console.log(data))
  }
}, [] )


-----------


Sincronico = Si hay dos acciones y se ejecuta una, tiene que esperara a que termina para ejecutar la segunda
Asincronica = Se pueden ejecutar al mismo tiempo 

Promesas = 
Hay que declarar la promesa =    const promesa = new promise (resolve, reject) => { //aca va la funcion con la promesa}

La promesa puede ser RESOLVE o REJECT 
En caso que se sea resolve, se va a ejecutar el .then
En caso que no se resuelva, se ejecuta .catch
El .finally se ejecuta si o si 

El setTimeout()     == sirve para simular un retraso de la red, para simular una sincronia.


----------------

Renderizar lista de arrays

























