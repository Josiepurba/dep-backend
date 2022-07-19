import React from "react";
import {Container, Row, Col, Carousel} from "react-bootstrap";
import Banner from "../img/banner.png";
import "../css/Carousel.css";

const BannerSection = () => {
    return (
        <section id="carousel" className="mt-1 mb-4">
            <Container className="pt-4">
                <Carousel className="w-100 carousel-height">
                    <Carousel.Item interval={3000}>
                        <Row className="justify-content-center">
                            <Col lg={12}>
                                <img src={Banner} className="w-100 " alt="" />
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <Row className="justify-content-center">
                            <Col lg={12}>
                                <img src={Banner} className="w-100 carousel-img" alt="" />
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <Row className="justify-content-center">
                            <Col lg={12}>
                                <img src={Banner} className="w-100 carousel-img" alt="" />
                            </Col>
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </section>
    );
};

export default BannerSection;
