import Banner from './components/Banner'
import './App.css'
import NavBar from './components/NavBar/NavBar'

function App() {
  

  return (
    <>
    <NavBar botonDeMenu= {"inicio"}/>
    <NavBar botonDeMenu= {"Productos"}/>
    <NavBar botonDeMenu= {"Sobre nosotros"}/>
    <NavBar botonDeMenu= {"Contacto"}/>
    <NavBar urlImage={"https://cdn-icons-png.flaticon.com/512/4305/4305700.png"}/>


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
