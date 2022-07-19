import React from "react";
import tes from "../../img/profileseller.png";

function DaftarJualHeader() {
    return (
        <div className="row mb-3">
            <div className="col-lg-12">
                <h1 className="judul mb-4">Daftar Jual Saya</h1>
                <div
                    className="card w-100 p-3"
                    style={{
                        borderRadius: "16px",
                        boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)",
                    }}
                >
                    <div className="row">
                        <div className="col-lg-12 d-flex justify-content-between">
                            <div className="d-flex align-items-center">
                                <img
                                    className="me-3"
                                    src={tes}
                                    alt=""
                                    style={{
                                        maxWidth: "48px",
                                        maxHeight: "48px",
                                        borderRadius: "12px",
                                    }}
                                />
                                <div className="text d-flex flex-column">
                                    <p className="mb-2 p-0" id="penjual">
                                        Nama Penjual
                                    </p>
                                    <p className="mb-2 p-0" id="kota">
                                        Kota
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <button className="edit">Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DaftarJualHeader;
