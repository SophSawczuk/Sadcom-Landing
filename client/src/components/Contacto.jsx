import style from "../styles/Contacto.module.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import { useState } from "react";
import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser';

export default function Contacto() {

    const [input, setInput] = useState({
        name: "",
        mail: "",
        message: ""
    })

    const [errors, setErrors] = useState({})

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
        console.log(input)
        console.log(errors)
    }

    function handleSubmit(e) {
        e.preventDefault()
        if(errors.name === "Se requiere un nombre" || errors.name === "El nombre debe tener al menos 4 caracteres" || errors.mail === "Se requiere un email" || errors.mail === "Ingrese un email válido" || errors.message === "Ingrese un mensaje con más de 50 caracteres") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Faltan completar campos',
            }) 
        } else if(input.name === "" && input.mail === "" && input.message === "") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Faltan completar campos',
            }) 
        }
        else{
            console.log(input)
            emailjs.sendForm('service_l66y4tk', 'template_qts6jx6', e.target, 'Rc4HvkwJmlJbyGBKL' )
                .then(response => console.log(response))
                .catch(error => console.log(error))

            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Mensaje enviado con éxito',
            })
            setInput({
                name: "",
                mail: "",
                message: ""
            })
        }
    }

    function validate(input) {
        let errors = []
        if(!input.name) {
            errors.name = "Se requiere un nombre"
        } else if(input.name.length < 4) {
            errors.name = "El nombre debe tener al menos 4 caracteres"
        }

        if(!input.mail) {
            errors.mail = "Se requiere un email"
        } else if (!input.mail.includes("@")) {
            errors.mail = "Ingrese un email válido"
        }

        if(input.message.length < 50) {
            errors.message = "Ingrese un mensaje con más de 50 caracteres"
        } 

        return errors
    }




    return(
       <div className={style.Contacto}>
            <div className={style.FirstBlock}>
                <h2><b>Formulario de contacto</b></h2>
                <hr></hr>
            </div>
            <Form style={{ width: '90vw', "margin-left": "5vw"}} onSubmit={(e) => handleSubmit(e)}>
                <Form.Group className="mb-3" >
                    <Form.Control type="string" placeholder="Ingresa tu nombre..." name="name" value={input.name} onChange={(e) => handleChange(e)}/>
                    {errors.name && (
                        <Form.Text className="text-muted" >
                            {errors.name}
                        </Form.Text> 
                    )}
                    
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Control type="email" placeholder="Ingresa un correo válido..." name="mail" value={input.mail} onChange={(e) => handleChange(e)} />
                    {errors.mail && (
                        <Form.Text className="text-muted" >
                            {errors.mail}
                        </Form.Text> 
                    )}
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Control type="text" placeholder="Deja tu mensaje..." name="message" value={input.message} onChange={(e) => handleChange(e)}/>
                    {errors.message && (
                        <Form.Text className="text-muted" >
                            {errors.message}
                        </Form.Text> 
                    )}
                </Form.Group>
                <Button style={{ "background-color": '#682AB7', "color": "white", "border-color": "#682AB7" }} type="submit">
                    Enviar
                </Button>
            </Form>
            <div className={style.ThirdBlock}>
                <h3><b>Preguntas frecuentes</b></h3>
                <hr></hr>
            </div>
            <Accordion defaultActiveKey="0" style={{ width: '90vw', "margin-left": "5vw"}}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>¿Qué base de datos utiliza el sistema?</Accordion.Header>
                    <Accordion.Body>Utiliza Miscrosoft SQL Server.</Accordion.Body>
                </Accordion.Item>
                <br/>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>¿Tiene soporte el sistema?</Accordion.Header>
                    <Accordion.Body>La versió gratuita tiene solamente soporte de errores. Eso quiere decir que, si realiza un tipo de operación y le dio ERROR, puede contactarnos. La versión de pago incluye atención al cliente.</Accordion.Body>
                </Accordion.Item>
                <br/>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>¿Qué medios de pago aceptan?</Accordion.Header>
                    <Accordion.Body>De momento Mercado Pago.</Accordion.Body>
                </Accordion.Item>
                <br/>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>¿Tienen demo del sistema?</Accordion.Header>
                    <Accordion.Body>Sí, la versión gratuita limitada.</Accordion.Body>
                </Accordion.Item>
                <br/>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>¿Mis datos están seguros?</Accordion.Header>
                    <Accordion.Body>En la versión online, la base de datos está en la nube, mientras que en la versión gratuita la base de datos se encuentra en su computadora.</Accordion.Body>
                </Accordion.Item>
                <br/>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>¿Es una versión cerrada o permite personalizaciones?</Accordion.Header>
                    <Accordion.Body>Se puede analizar la situación de cada cliente y realizar un presupuesto.</Accordion.Body>
                </Accordion.Item>
                <br/>
            </Accordion>
       </div>
    )
}