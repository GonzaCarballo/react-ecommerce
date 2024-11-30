import './App.css'
import NavBar from './components/NavBar/NavBar'
import CarritoContador from './components/contadorCarrito/CarritoContador'

function App() {
  
  const barraDeMenu = ["Inicio", "Productos", "Sobre nosotros", "Contacto"]


  function pasarElementosNavBar(){
    const funcionParametro = (elementro)=>{
      return <NavBar botonDeMenu={elementro} />
    }
    let listaDeNav = []
    listaDeNav =   barraDeMenu.map(funcionParametro);
    return listaDeNav
  }



  return (
    <>
    <header>
      <div className='navBar'>
        <div className='navBarPalabras'>
          {pasarElementosNavBar()}
        </div>
        <div className='navBarImagen'>
          <NavBar urlImage={"https://cdn-icons-png.flaticon.com/512/4305/4305700.png"}/>
          <CarritoContador />
        </div>
      </div>
      {/*
      {barraDeMenu.map((elementoDeBarraDeMenu)=> {
        return <NavBar botonDeMenu={elementoDeBarraDeMenu}/>
      })}
      */}
      
      


    </header>


    <body className='body'>
        
    <div>
      <p>Suma al carrito <button>+</button></p>
    </div>




    </body>


    
    </>

  )
}

export default App
