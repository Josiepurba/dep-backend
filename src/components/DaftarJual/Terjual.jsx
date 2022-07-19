import React from "react";
import NumberFormat from "react-number-format";
import image1 from "../../img/image1.png";

function Terjual() {
  return (
    <div className="row">
      <section className="card-daftar-jual col-lg-4 col-md-6 col-sm-6 mt-2">
        <div className="card">
          <img src={image1} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-title">Card title</p>
            <p className="card-text">Aksesoris</p>
            <p className="card-price">
              <NumberFormat
                value={2456981}
                displayType={"text"}
                thousandSeparator={"."}
                decimalSeparator={","}
                prefix={"Rp "}
              />
            </p>
          </div>
        </div>
      </section>
      <section className="card-daftar-jual col-lg-4 col-md-6 col-sm-6 mt-2">
        <div className="card">
          <img src={image1} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-title">Card title</p>
            <p className="card-text">Aksesoris</p>
            <p className="card-price">
              <NumberFormat
                value={2456981}
                displayType={"text"}
                thousandSeparator={"."}
                decimalSeparator={","}
                prefix={"Rp "}
              />
            </p>
          </div>
        </div>
      </section>
      <section className="card-daftar-jual col-lg-4 col-md-6 col-sm-6 mt-2">
        <div className="card">
          <img src={image1} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-title">Card title</p>
            <p className="card-text">Aksesoris</p>
            <p className="card-price">
              <NumberFormat
                value={2456981}
                displayType={"text"}
                thousandSeparator={"."}
                decimalSeparator={","}
                prefix={"Rp "}
              />
            </p>
          </div>
        </div>
      </section>
      <section className="card-daftar-jual col-lg-4 col-md-6 col-sm-6 mt-2">
        <div className="card">
          <img src={image1} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-title">Card title</p>
            <p className="card-text">Aksesoris</p>
            <p className="card-price">
              <NumberFormat
                value={2456981}
                displayType={"text"}
                thousandSeparator={"."}
                decimalSeparator={","}
                prefix={"Rp "}
              />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Terjual;
