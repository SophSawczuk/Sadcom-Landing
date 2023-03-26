import Form from 'react-bootstrap/Form';
import { validate } from 'uuid';
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import { postReview } from '../redux/actions';
import { useDispatch } from 'react-redux';
import style from '../styles/FormReviews.module.css'

export default function FormReviews() {
    const [input, setInput] = useState({
        name: "",
        email: "",
        review: "",
        business: ""
    })

    const [errors, setErrors] = useState({})

    const dispatch = useDispatch();

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
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
        if(errors.name === "Se requiere un nombre" || errors.name === "El nombre debe tener al menos 4 caracteres" || errors.email === "Se requiere un email" || errors.email === "Ingrese un email válido" || errors.review === "Ingrese un mensaje con al menos 50 caracteres" || errors.name === "Se requiere el nombre de tu negocio") {
            alert("Faltan completar campos")
        } else if(input.name === "" && input.email === "" && input.review === "" && input.business === "" && input.date === "") {
            alert("Faltan completar campos")
        } else {
            console.log(input)
            dispatch(postReview(input))
            setInput({
                name: "",
                email: "",
                review: "",
                business: ""
            })
            alert("¡Review enviada con éxito!")
        }
    }

    function validate(input) {
        let errors = []
        if(!input.name) {
            errors.name = "Se requiere un nombre"
        } else if(input.name.length < 4) {
            errors.name = "El nombre debe tener al menos 4 caracteres"
        }

        if(!input.email) {
            errors.email = "Se requiere un email"
        } else if (!input.email.includes("@")) {
            errors.email = "Ingrese un email válido"
        }

        if(input.review.length < 50) {
            errors.review = "Ingrese un mensaje con más de 50 caracteres"
        } 

        if(!input.business) {
            errors.business = "Se requiere el nombre de tu negocio"
        }

        return errors
    }

    return(
        <div>
            <div className={style.FirstBlock}>
                <h2><b>¡Dejanos tu reseña!</b></h2>
                <hr></hr>
            </div>
            <Form style={{ width: '90vw', "margin-left": "5vw"}} onSubmit={(e) => handleSubmit(e)}>
                <Form.Group className="mb-3">
                    <Form.Control type="string" placeholder="Ingresa tu nombre completo..." name="name" value={input.name} onChange={(e) => handleChange(e)}/>
                    {errors.name && (
                        <Form.Text className="text-muted" >
                            {errors.name}
                        </Form.Text> 
                    )}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="email" placeholder="Ingresa un correo válido..." name="email" value={input.email} onChange={(e) => handleChange(e)}/>
                    {errors.email && (
                        <Form.Text className="text-muted" >
                            {errors.email}
                        </Form.Text> 
                    )}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="string" placeholder="Ingresa el nombre de tu negocio..." name="business" value={input.business} onChange={(e) => handleChange(e)}/>
                    {errors.business && (
                        <Form.Text className="text-muted" >
                            {errors.business}
                        </Form.Text> 
                    )}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="string" placeholder="Contanos qué te pareció Sadcom..." name="review" value={input.review} onChange={(e) => handleChange(e)}/>
                    {errors.review && (
                        <Form.Text className="text-muted" >
                            {errors.review}
                        </Form.Text> 
                    )}
                </Form.Group>
                
                <Button style={{ "background-color": '#682AB7', "color": "white", "border-color": "#682AB7" }} type="submit">
                    Enviar
                </Button>
            </Form>
        </div>
    )
}