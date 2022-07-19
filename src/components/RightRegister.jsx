import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate, Link} from "react-router-dom";
import "../css/Register.css";
import {Container, Form, Button} from "react-bootstrap";
import Swal from "sweetalert2";

import {register} from "../redux/actions/authActions";

function RightRegister() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nama, setName] = useState("");

    const registerSubmit = async (e) => {
        e.preventDefault();
        if (nama === "") {
            Swal.fire({
                title: "Warning!!",
                text: "Nama tidak boleh kosong",
                icon: "warning",
                confirmButtonText: "Ok",
            });
            return;
        } else if (email === "") {
            Swal.fire({
                title: "Warning!!",
                text: "Email tidak boleh kosong",
                icon: "warning",
                confirmButtonText: "Ok",
            });
            return;
        } else if (
            // eslint-disable-next-line no-useless-escape
            email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) === null
        ) {
            Swal.fire({
                title: "Warning!!",
                text: "Email tidak valid",
                icon: "warning",
                confirmButtonText: "Ok",
            });
            return;
        } else if (password === "") {
            Swal.fire({
                title: "Warning!!",
                text: "Password tidak boleh kosong",
                icon: "warning",
                confirmButtonText: "Ok",
            });
            return;
        } else {
            Swal.fire({
                title: "Loading",
                text: "Permintaan anda sedang diproses, harap tunggu sebentar",
                icon: "info",
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
                showConfirmButton: false,
                showCloseButton: false,
                showCancelButton: false,
                showClass: {
                    popup: "animate__animated animate__fadeInDown",
                },
            });
            dispatch(register({nama, email, password}));
            return navigate("/login");
        }
    };
    return (
        <>
            <Container className="form-container">
                <Form className="form" onSubmit={registerSubmit}>
                    <h3>Daftar</h3>
                    <Form.Group controlId="formBasicName" className="margin-component">
                        <Form.Label className="label">Nama</Form.Label>
                        <Form.Control type="text" className="form-border" placeholder="Name Lengkap" value={nama} onChange={(e) => setName(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail" className="margin-component">
                        <Form.Label className="label">Email</Form.Label>
                        <Form.Control type="text" className="form-border" placeholder="Contoh: johndee@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="password" className="margin-component">
                        <Form.Label className="label">Password</Form.Label>
                        <Form.Control type="password" className="form-border" placeholder="Masukkan password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                    <div className="margin-component">
                        <Button type="submit" className="w-100 color form-border mt-2 mb-3">
                            Daftar
                        </Button>
                    </div>
                    <Form.Text className="margin-component">
                        <center>
                            Sudah punya akun?
                            <Link to="/login"> Masuk disini</Link>
                        </center>
                    </Form.Text>
                </Form>
            </Container>
        </>
    );
}

export default RightRegister;
