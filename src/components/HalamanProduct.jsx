import {Carousel, Row, Col, Container, Button} from "react-bootstrap";
import "../css/Preview.css";

import Jam from "../img/jam-image.png";
import Jam2 from "../img/jam2-image.png";
import Foto from "../img/profile-image.png";

const PreviewProduct = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col lg={10} md={12} sm={12} className="mx-auto">
                        <Row className="gx-5 justify-content-center mt-4">
                            <Col sm={8}>
                                <Row>
                                    <Carousel variant="dark">
                                        <Carousel.Item>
                                            <img className="d-block w-100" src={Jam} alt="First slide" />
                                            <Carousel.Caption></Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img className="d-block w-100" src={Jam2} alt="Second slide" />
                                            <Carousel.Caption></Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img className="d-block w-100" src={Jam} alt="Third slide" />
                                            <Carousel.Caption></Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img className="d-block w-100" src={Jam2} alt="Four slide" />
                                            <Carousel.Caption></Carousel.Caption>
                                        </Carousel.Item>
                                    </Carousel>
                                </Row>
                                <Row className="mx-1 mt-4 mb-4 shadow-sm" style={{borderRadius: "20px"}}>
                                    <p className="fw-bold text-family ps-3 pt-3 pb-3">Deskripsi</p>
                                    <p className="text-color ps-3 lh-base pb-3">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                    <p className="text-color ps-3 lh-base pb-4">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </Row>
                            </Col>
                            <Col sm={4}>
                                <Row className="shadow-sm" style={{borderRadius: "20px"}}>
                                    <p className="fw-bold text-family ps-4 fs-4 pt-3">Jam Tangan Casio</p>
                                    <p className="text-color ps-4 pt-1">Aksesoris</p>
                                    <p className="fw-bold text-family ps-4 pt-3">Rp 250.000</p>
                                    <div className="d-grid mt-4 gap-3">
                                        <Button className="button-add fw-semibold mb-4 text-white" style={{backgroundColor: "#7126B5"}}>
                                            Saya tertarik dan ingin nego
                                        </Button>
                                    </div>
                                </Row>
                                <Row className="mt-4 pt-3 shadow-sm" style={{borderRadius: "20px"}}>
                                    <Col lg={2} sm={3} className="me-3">
                                        <div className="layout-foto">
                                            <img className="foto" src={Foto} alt="Foto Profile" />
                                        </div>
                                    </Col>
                                    <Col lg={9} sm={10}>
                                        <p className="fw-bold text-family ps-3 fs-6">Nama Penjual</p>
                                        <p className="text-color ps-3 fs-6 pt-2 pb-2" style={{marginTop: "-5px"}}>
                                            Kota
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default PreviewProduct;
