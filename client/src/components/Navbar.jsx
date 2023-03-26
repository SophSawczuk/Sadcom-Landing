import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";

export default function NavBar() {
    const navigate = useNavigate();

    return(
        <Navbar collapseOnSelect className="navBg" variant="dark" expand="lg" sticky="top">
            <Container fluid>
                <Navbar.Brand onClick={()=>{navigate('/')}} style={{ 'cursor': 'pointer'}}><b>Sadcom</b></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav ">
                <Nav className="nav navbar-nav me-auto" style={{ "margin-left": "60vw"}}>
                    <Nav.Link onClick={()=>{navigate('/solutions')}} style={{ "background-color": "#060531", "padding-left": "3vw"}}>Soluciones</Nav.Link>
                    <Nav.Link onClick={()=>{navigate('/us')}} style={{ "background-color": "#060531", "padding-left": "3vw"}}>Nosotros</Nav.Link>
                    <Nav.Link onClick={()=>{navigate('/contact')}} style={{ "background-color": "#060531", "padding-left": "3vw"}}>Contacto</Nav.Link>
                </Nav> 
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}