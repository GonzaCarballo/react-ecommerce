
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
------------------

const persona = {nombre: "Gonzalo", edad: 26}

const {edad, nombre} = persona
console.log(edad)

// ejemplo con array

const numeros = [1, 2, 3]
const [primerValor, segundoValor, tercerValor] = numeros

------------------
> MAP      (sirve para hacer algo con un array, sin modificar el original)
------------------

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
------------------
Crea una nueva lista, agarra la lista de productos del punto anterior y filtra por los precios

const productosFiltrados = productos.filter( (unProducto) => unProducto.precio <= 1500);

   
------------------
>FIND       (Itera y busca si hay una coincidencia, solo encuentra un elemento)
------------------

const productoEncontrado = productos.find( (unProducto) => unProducto.id === "Grr222");





