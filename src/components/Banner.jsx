import "./banner.css"

const Banner = ({urlImage, saludo})=>{
    return(
        <div className= "banner">
            <h2>{saludo}</h2>
            <img src={urlImage} alt="" />
        </div>
    )
}
export default Banner


