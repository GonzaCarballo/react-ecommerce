import Banner from './components/Banner'
import './App.css'
import NavBar from './components/NavBar/NavBar'

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
    <div className='navBar'>
    {pasarElementosNavBar()}
    <NavBar urlImage={"https://cdn-icons-png.flaticon.com/512/4305/4305700.png"}/>

    </div>
    {/*
    {barraDeMenu.map((elementoDeBarraDeMenu)=> {
      return <NavBar botonDeMenu={elementoDeBarraDeMenu}/>
    })}
    */}



      <Banner 
        saludo={"Banner1"} 
        urlImage={"https://locoxelrojo.com/independiente/wp-content/uploads/2024/02/tomas-a-duco-huracan.jpg"}
      />
      <Banner 
        saludo={"Banner2"} 
        urlImage={"https://adnpositivo.com/wp-content/uploads/2024/04/portada-huracan.jpeg"}
      />

      


    
    </>

  )
}

export default App
