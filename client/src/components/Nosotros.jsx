import style from "../styles/Nosotros.module.css"
import Card from 'react-bootstrap/Card';
import image3 from "../images/circulo-gris.png"

export default function Nosotros() {
    return(
        <div className={style.Nosotros}>
            <div className={style.HolaSoyUnDiv}>
            <div className={style.FirstBlock}>
                <h2><b>Nuestra misión</b></h2>
                <hr></hr>
                <p>Ayudar a todos los emprendedores a administrar su negocio. Sabemos lo difícil que puede resultar crear una empresa y levantar un negocio, tanto como lo caro que puede resultar todo cuando estás empezando. </p>
            </div>
            <div className={style.SecondBlock}>
                <h2><b>Nuestra visión</b></h2>
                <hr></hr>
                <p>Proveer soluciones de software de gestión a empresas, buscando la mayor eficiencia y transparencia entre desarrolladores y clientes. Ayudar a las pymes para que no deban agregar costos de software a su inversión. Expandir nuestros servicios a todo el país.</p>
            </div>
            </div>
            
            <div className={style.ThirdBlock}>
                <h2><b>Nuestro team</b></h2>
                <hr></hr>

                <Card style={{width: "80vw", "margin-left": "10vw", "margin-top": '8vh', /* height: '35vh' */}}>
                        <div >
                            <div className={style.ThirdDescription}>
                                <img src={image3} style={{width: '6rem', height: '6em'}}></img>  
                                <div className={style.SoyUnDiv}>
                                    <div>
                                        <p><b>Sebastian Bernachea</b>, ciudad</p>
                                        <p><i>Team líder, creador de la interfaz y de la estructura de la DB.</i></p>
                                    </div>
                                    <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis harum amet nobis optio vero? Mollitia necessitatibus dolores debitis rem adipisci fugiat repellendus, qui tempore eveniet sapiente nesciunt quos labore laborum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis harum amet nobis optio vero? Mollitia necessitatibus dolores debitis rem adipisci fugiat repellendus, qui tempore eveniet sapiente nesciunt quos labore laborum!"</p>
                                </div>
                            </div>
                            <Card.Body></Card.Body>
                        </div>
                        <br/>
                </Card>
                <Card style={{width: "80vw", "margin-left": "10vw", "margin-top": '8vh', /* height: '35vh' */}}>
                        <div >
                            <div className={style.ThirdDescription}>
                                <img src={image3} style={{width: '6rem', height: '6em'}}></img>  
                                <div className={style.SoyUnDiv}>
                                    <div>
                                        <p><b>Sofia Sawczuk</b>, Mar del Plata, Buenos Aires, Argentina</p>
                                        <p><i>Web developer</i></p>
                                    </div>
                                    <p>Soy estudiante de ingeniería informática y desarrolladora web Full Stack. Tengo experiencia trabajando con API’s, NodeJS, React, Redux, SQL entre otras tecnologías. Estudiar ingeniería me preparó para ser una persona resolutiva, responsable y creativa. Me apasiona viajar y tengo intereses personales en liderazgo y ventas.</p>
                                    <p><i>Instagram: <a href="https://www.instagram.com/soph_sawczuk/">Soph_Sawczuk</a> LinkedIn: <a href="https://www.linkedin.com/in/sofia-sawczuk/">Sofia Sawczuk</a> Github: <a href="https://github.com/SophSawczuk">SophSawczuk</a></i></p>
                                </div>
                            </div>
                            <Card.Body></Card.Body>
                        </div>
                        <br/>
                </Card>
                <Card style={{width: "80vw", "margin-left": "10vw", "margin-top": '8vh', /* height: '35vh' */}}>
                        <div >
                            <div className={style.ThirdDescription}>
                                <img src={image3} style={{width: '6rem', height: '6em'}}></img>  
                                <div className={style.SoyUnDiv}>
                                    <div>
                                        <p><b>Mario Olivares</b>, Corrientes, Capital, Argentina</p>
                                        <p><i>Desktop developer, administrador base de datos en SQL Server</i></p>
                                    </div>
                                    <p>Analista en sistemas de información, reparador de equipos electrónicos. Programador en diversos lenguajes como Python, .NET y C#. Habilidades para trabajar en equipo y resolver conflictos.</p>
                                    <p><i>LinkedIn: <a href="https://www.linkedin.com/in/mario-olivares-b87941238/">Mario Olivares</a></i></p>
                                </div>
                            </div>
                            <Card.Body></Card.Body>
                        </div>
                        <br/>
                </Card>
                <Card style={{width: "80vw", "margin-left": "10vw", "margin-top": '8vh', /* height: '35vh' */}}>
                        <div >
                            <div className={style.ThirdDescription}>
                                <img src={image3} style={{width: '6rem', height: '6em'}}></img>  
                                <div className={style.SoyUnDiv}>
                                    <div>
                                        <p><b>Nicolas Gallo Garcia</b>, General Pico, La Pampa, Argentina</p>
                                        <p><i>Web developer</i></p>
                                    </div>
                                    <p>Soy desarrollador Full Stack y estoy dando mis primeros pasos en el mundo IT. Las tecnologías con las que he trabajado principalmente son JavaScript, React, Redux, NodeJS, Express, Sequelize, PostgreSQL, styled-components, GitHub, entre otras. Soy una persona responsable, detallista, muy comprometido en lograr mis objetivos y con mucho deseo de crecer tanto personalmente como laboralmente.</p>
                                    <p><i>LinkedIn: <a href="https://www.linkedin.com/in/nicolas-gallo-garcia-359136236/">Nicolas Gallo Garcia</a> Github: <a href="https://github.com/galoss88">galos88</a></i></p>
                                </div>
                            </div>
                            <Card.Body></Card.Body>
                        </div>
                        <br/>
                </Card>
                {/* <div>
                    <Card style={{width: "80vw", "margin-left": "10vw", "margin-top": '8vh'}}  border="danger">
                        <p style={{ "padding": "5vh 5vw 5vh 5vw"}}><i>Esta versión gratuita la podemos lograr gracias a que este gran equipo ha aceptado trabajar de forma gratuita en una etapa inicial. Jóvenes que con esfuerzo y sacrificio estudiaron y se formaron renunciando a mucho para poder dar una mano a cada emprendedor.
                            Si está en tu poder ayudarnos en este proyecto, escribinos, cualquier ayuda es bien recibida.
                        </i></p>
                    </Card>
                </div> */}
                <br/>
            </div>
        </div>
    )
}