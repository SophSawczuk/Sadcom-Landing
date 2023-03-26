import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import style from '../styles/Soluciones.module.css'

export default function Soluciones() {
    return (
        <div className={style.Soluciones}>
            <div className={style.FirstBlock}>
                <h1><b>Nuestras soluciones</b></h1>
                <hr></hr>
            </div>

            <div className={style.SecondBlock}>
                <Table responsive striped bordered hover style={{width: '80vw', "border-radius": "10px", }}>
                    <thead style={{height: '10vh'}}>
                        <tr className="text-center" style={{'background-color': '#682AB7', 'color': 'white', "border-radius": "10px"}}> 
                            <th style={{"padding-bottom": '2vh', 'font-size': '1.5rem'}}>Características</th>
                            <th style={{"padding-bottom": '2vh', 'font-size': '1.5rem'}}>Sadcom 3</th>
                            <th style={{"padding-bottom": '2vh', 'font-size': '1.5rem'}}>Sadcom 2</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Personas (Clientes, proveedores y empleados)</td>
                            <td className="text-center" >Si</td>
                            <td className="text-center" >Si</td>
                        </tr>
                        <tr>
                            <td>Módulo artículos</td>
                            <td className="text-center" >Si</td>
                            <td className="text-center" >Si</td>
                        </tr>
                        <tr>
                            <td>Control de stock</td>
                            <td className="text-center" >Si</td>
                            <td className="text-center" >Si</td>
                        </tr>
                        <tr>
                            <td>Lista de precios</td>
                            <td className="text-center" >Si</td>
                            <td className="text-center" >Si</td>
                        </tr>
                        <tr>
                            <td>Reportes</td>
                            <td className="text-center" >Si</td>
                            <td className="text-center" >Si</td>
                        </tr>
                        <tr>
                            <td>Módulo compras</td>
                            <td className="text-center" >Si</td>
                            <td className="text-center" >Si</td>
                        </tr>
                        <tr>
                            <td>Módulo usuarios</td>
                            <td className="text-center" >Si</td>
                            <td className="text-center" >Si</td>
                        </tr>
                        <tr>
                            <td>Importación de artículos desde Excel</td>
                            <td className="text-center" >Si</td>
                            <td className="text-center" >Si</td>
                        </tr>
                        <tr>
                            <td>Cambios de precios masivos</td>
                            <td className="text-center" >Si</td>
                            <td className="text-center" >Si</td>
                        </tr>
                        <tr>
                            <td>Impresión A4 pdf</td>
                            <td className="text-center" >Si</td>
                            <td className="text-center" >Si</td>
                        </tr>
                        <tr>
                            <td>Impresión formato ticket</td>
                            <td className="text-center" >Si</td>
                            <td className="text-center" >Si</td>
                        </tr>
                        <tr>
                            <td>Tu cliente escanea un código QR y obtiene la factura al instante en su celular</td>
                            <td className="text-center" >Si (Estamos trabajando en eso)</td>
                            <td className="text-center" >No</td>
                        </tr>
                        <tr>
                            <td>Base de datos en la nube (sus datos nunca se perderán)</td>
                            <td className="text-center" >Si</td>
                            <td className="text-center" >No</td>
                        </tr>
                        <tr>
                            <td>Buscador intuitivo y dinámico</td>
                            <td className="text-center" >Si</td>
                            <td className="text-center" >No</td>
                        </tr>
                        <tr>
                            <td>Múltiples depósitos de stock</td>
                            <td className="text-center" >Si</td>
                            <td className="text-center" >No</td>
                        </tr>
                        <tr>
                            <td>Asociación de múltiples códigos de barras a un artículo</td>
                            <td className="text-center" >Si</td>
                            <td className="text-center" >No</td>
                        </tr>
                        <tr>
                            <td>Personalización de colores, fondos de pantalla y tamaño de letra</td>
                            <td className="text-center" >Si</td>
                            <td className="text-center" >No</td>
                        </tr>
                        <tr>
                            <td>Envíos de documento por correo</td>
                            <td className="text-center" >Si (Próximamente)</td>
                            <td className="text-center" >No</td>
                        </tr>
                        <tr>
                            <td>Vinculación con tienda en línea</td>
                            <td className="text-center" >Si (Estamos trabajando en eso)</td>
                            <td className="text-center" >No</td>
                        </tr>
                        
                    </tbody>
                </Table>
            </div>

            <div className={style.ThirdBlock}>
                <Card  style={{ width: '16rem', "box-shadow": '4px 4px 10px #535353', "margin-right": '5vw', "margin-bottom": "5vh", "border-radius": "10px"}} className="text-center">
                    <Card.Header style={{ "background-color": '#787878',  "color": "white", "font-size": '1.3em', "border-top-left-radius": "10px", "border-top-right-radius": "10px", height: '60px', "padding-top": "15px"  }}><b>Plan Basic</b></Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <p>1 usuario</p> 
                            <p>300 ventas /mes</p>
                            <p><b>$6.000 /mes</b></p>
                            <p>Excedente por venta: <b>5% por venta</b> (a partir de la venta 301)</p>
                          
                        </Card.Text>
                        <Button style={{ "background-color": '#787878', "color": "white", "border-color": "#682AB7" }}><b>Obtener</b></Button>
                    </Card.Body>
                </Card>
                <Card  style={{ width: '16rem', "box-shadow": '4px 4px 10px #535353', "margin-right": '5vw', "margin-bottom": "5vh", "border-radius": "10px"}} className="text-center">
                    <Card.Header style={{ "background-color": '#682AB7',  "color": "white", "font-size": '1.3em', "border-top-left-radius": "10px", "border-top-right-radius": "10px", height: '60px', "padding-top": "15px"  }}><b>Plan Estándar</b></Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <p>2 usuarios</p>
                            <p>500 ventas /mes</p> 
                            <p><b>$8.000 /mes</b></p>
                            <p>Excedente por venta: <b>5% por venta</b> (a partir de la venta 501)</p>
                          
                        </Card.Text>
                        <Button style={{ "background-color": '#682AB7', "color": "white", "border-color": "#682AB7" }}><b>Obtener</b></Button>
                    </Card.Body>
                </Card>
                <Card  style={{ width: '16rem', "box-shadow": '4px 4px 10px #535353', "margin-right": '5vw', "margin-bottom": "5vh", "border-radius": "10px"}} className="text-center">
                    <Card.Header style={{ "background-color": '#682AB7',  "color": "white", "font-size": '1.3em', "border-top-left-radius": "10px", "border-top-right-radius": "10px", height: '60px', "padding-top": "15px"  }}><b>Plan Ultra</b></Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <p>5 usuarios</p>
                            <p>600 ventas /mes</p>
                            <p><b>$10.000 /mes</b></p>
                            <p>Excedente por venta: <b>5% por venta</b> (a partir de la venta 601)</p>
                        </Card.Text>
                        <Button style={{ "background-color": '#682AB7', "color": "white", "border-color": "#682AB7" }}><b>Obtener</b></Button>
                    </Card.Body>
                </Card>
                <Card  style={{ width: '16rem', "box-shadow": '4px 4px 10px #EEBF59', "margin-right": '5vw', "margin-bottom": "5vh", "border-radius": "10px"}} className="text-center">
                    <Card.Header style={{ "background-color": '#DE9B0C',  "color": "white", "font-size": '1.3em', "border-top-left-radius": "10px", "border-top-right-radius": "10px", height: '60px', "padding-top": "15px"  }}><b>Plan Premium</b></Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <p>Usuarios ilimitados</p>
                            <p>800 ventas /mes</p>
                            <p><b>$15.000 /mes</b></p>
                            <p>Excedente por venta: <b>5% por venta</b> (a partir de la venta 801)</p>
                        </Card.Text>
                        <Button style={{ "background-color": '#DE9B0C', "color": "white", "border-color": "#DE9B0C" }}><b>Obtener</b></Button>
                    </Card.Body>
                </Card>
                
            </div>
        </div>
        
    )
}