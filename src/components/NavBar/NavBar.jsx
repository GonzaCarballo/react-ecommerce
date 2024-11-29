import "./navBar.css"



const NavBar = ({botonDeMenu, urlImage}) => {
  return (
    <div className='menu'>
      <h4>{botonDeMenu}</h4>
      <img src={urlImage} alt="" />
    </div>
  )
}

export default NavBar



