import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProductByIdSeller} from "../../redux/actions/productsActions";
import {FiBox, FiHeart, FiDollarSign, FiChevronRight} from "react-icons/fi";
import {IconContext} from "react-icons";
import SwipeToSlide from "./SwipeToSlide";

function SidebarDaftarJual() {
    const dispatch = useDispatch();
    const {user} = useSelector((state) => state.auth);
    const [width, setWidth] = useState(window.innerWidth);

    const detectSize = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", detectSize);
        if (user !== null) dispatch(getProductByIdSeller(user.id));
        return () => {
            window.removeEventListener("resize", detectSize);
        };
    }, [width, dispatch, user]);

    return (
        <div className="col-lg-3">
            {width <= 576 ? (
                <SwipeToSlide />
            ) : (
                <div
                    className="card sidebar-kategori d-flex flex-column justify-content-center mt-2"
                    style={{
                        borderRadius: "16px",
                        boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)",
                        width: "90%",
                        height: "auto",
                        padding: "2.2rem 2.0rem",
                    }}
                >
                    <p className="pb-1">Kategori</p>
                    <ul style={{listStyleType: "none", padding: 0}}>
                        <li className="d-flex justify-content-between">
                            <div className="kategori" style={{color: "purple"}}>
                                <FiBox className="me-2" size={20} /> Semua Produk
                            </div>
                            <div className="chevron-right" style={{color: "purple"}}>
                                <FiChevronRight size={20} />
                            </div>
                        </li>
                        <hr />
                        <li className="d-flex justify-content-between">
                            <div className="kategori">
                                <FiHeart className="me-2" size={20} style={{color: "#8A8A8A"}} /> Diminati
                            </div>
                            <div className="chevron-right">
                                <IconContext.Provider value={{color: "#D0D0D0"}}>
                                    <FiChevronRight size={20} />
                                </IconContext.Provider>
                            </div>
                        </li>
                        <hr />
                        <li className="d-flex justify-content-between">
                            <div className="kategori">
                                <FiDollarSign className="me-2" size={20} style={{color: "#8A8A8A"}} />
                                Terjual
                            </div>
                            <div className="chevron-right">
                                <IconContext.Provider value={{color: "#D0D0D0"}}>
                                    <FiChevronRight size={20} />
                                </IconContext.Provider>
                            </div>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default SidebarDaftarJual;
