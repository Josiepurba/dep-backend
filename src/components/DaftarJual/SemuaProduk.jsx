import React from "react";
import {useSelector} from "react-redux";
import {FiPlus} from "react-icons/fi";
import CardDaftarJual from "./CardDaftarJual";

function SemuaProduk() {
    const {product} = useSelector((state) => state.product);

    return (
        <>
            {product === undefined ? (
                <></>
            ) : (
                <div className="row">
                    <section className="card-tambah-produk col-lg-4 col-md-6 col-sm-6 mt-2">
                        <div className="card">
                            <div className="content d-flex ">
                                <FiPlus className="plus mb-2 text-center" size={20} style={{color: "#8A8A8A"}} />
                                <p className="text-center" style={{color: "#8A8A8A"}}>
                                    Tambah Produk
                                </p>
                            </div>
                        </div>
                    </section>
                    {product.length === 0 ? <></> : product.map((product) => <CardDaftarJual key={product.id} product={product} />)}
                </div>
            )}
        </>
    );
}

export default SemuaProduk;
