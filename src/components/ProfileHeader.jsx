import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Container, Navbar} from "react-bootstrap";
import Logo from "../img/logo-image.png";
import {whoami} from "../redux/actions/authActions";

const ProfileHeader = () => {
    const dispatch = useDispatch();
    const {isAuthenticated} = useSelector((state) => state.auth);

    useEffect(() => {
        if (localStorage.getItem("token")) {
            dispatch(whoami());
        }
    }, [dispatch, isAuthenticated]);

    setTimeout(() => {
        if (localStorage.getItem("token")) {
            dispatch(whoami());
        }
    }, 5 * 60000);

    return (
        <Navbar expand="lg" mb="2" sticky="top" className="shadow-sm" style={{backgroundColor: "white"}}>
            <Container>
                <Navbar.Brand>
                    <img src={Logo} className="img-fluid my-2" alt="logo.png" />
                </Navbar.Brand>
                <h1 style={{fontSize: 24}}>Lengkapi Profile</h1>
            </Container>
        </Navbar>
    );
};
export default ProfileHeader;
