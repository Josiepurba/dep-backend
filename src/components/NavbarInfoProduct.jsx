import {Navbar, Container} from "react-bootstrap";
import "../css/Preview.css";

import Logo from "../img/logo-image.png";

const NavbarInfoProduct = () => {
    return (
        <Navbar key="lg" sticky="top" className="shadow-sm" expand="lg" style={{backgroundColor: "white"}}>
            <Container>
                <Navbar.Brand>
                    <img src={Logo} className="img-fluid my-2" alt="logo.png" />
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default NavbarInfoProduct;
