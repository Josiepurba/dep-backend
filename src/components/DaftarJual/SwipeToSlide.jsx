import React, { Component } from "react";
import Slider from "react-slick";
import { FiBox, FiHeart, FiDollarSign } from "react-icons/fi";
import "../../css/DaftarJual/SwipeToSlide.css";

export default class SwipeToSlide extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 2,
      swipeToSlide: true,
      afterChange: function (index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      },
    };
    return (
      <div className="my-3">
        <Slider {...settings}>
          <div className="btn btn-category d-flex align-items-center active">
            <FiBox className="me-2" size={20} />
            Produk
          </div>
          <div className="btn btn-category d-flex align-items-center">
            <FiHeart className="me-2" size={20} />
            Diminati
          </div>
          <div className="btn btn-category d-flex align-items-center">
            <FiDollarSign className="me-2" size={20} />
            Terjual
          </div>
        </Slider>
      </div>
    );
  }
}
