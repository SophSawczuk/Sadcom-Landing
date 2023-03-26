import style from "../styles/EsquemaDeColores.module.css"
import img1 from "../images/EsquemaDeColores1.jpeg"
import img2 from "../images/EsquemaDeColores2.jpeg"
import img3 from "../images/EsquemaDeColores3.jpeg"
import img4 from "../images/EsquemaDeColores4.jpeg"

export default function EsquemaDeColores() {
    return (
        <div className={style.Container}>
            <h4><b>ESQUEMA DE COLORES</b></h4>
            <div className={style.Imagenes}>
                <img src={img1} alt="Palette1"/>
                <img src={img2} alt="Palette2"/>
                <img src={img3} alt="Palette3"/>
                <img src={img4} alt="Palette4"/>
            </div>
        </div>
    )
}