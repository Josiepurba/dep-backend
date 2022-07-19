import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../css/transaksi.css";
import {
  Stack,
  Button,
  Toast,
  Row,
  Col,
  Container,
  Modal,
  Alert,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import SimpleDateTime from "react-simple-timestamp-to-date";
import CurrencyFormat from "react-currency-format";

import {
  getTransactionSeller,
  getTransactionBuyer,
  updateTransaction,
  updateStatusTransaction,
} from "../redux/actions/transactionsActions";

export default function TransactionComponent() {
  const dispatch = useDispatch();
  const { transactionSeller, transactionBuyer, statusTR } = useSelector(
    (state) => state.transaction
  );
  const { user } = useSelector((state) => state.auth);

  React.useEffect(() => {
    dispatch(getTransactionSeller());
    dispatch(getTransactionBuyer());
  }, [dispatch]);

  let [show, setShow] = useState(false);
  const [modalOneIsOpen, setModalOneIsOpen] = useState(false);
  const [modalTwoIsOpen, setModalTwoIsOpen] = useState(false);
  const [updateStatus, setUpdateStatus] = useState(false);

  function showModalOne() {
    setModalOneIsOpen(true);
  }

  function showModalTwo() {
    setModalTwoIsOpen(true);
  }

  const handleClose = () =>
    setModalOneIsOpen(false) || setModalTwoIsOpen(false);

  const handleTerima = (id) => {
    Swal.fire({
      title: "Apakah anda yakin?",
      text: "Anda akan mengkonfirmasi transaksi ini",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, konfirmasi!",
      cancelButtonText: "Tidak, batalkan!",
    }).then((result) => {
      if (result.value) {
        const args = { id, status: "Diproses" };
        dispatch(updateTransaction(args));
      }
    });
  };

  const handleTolak = (id) => {
    const args = { id, status: "Ditolak" };
    dispatch(updateTransaction(args));
  };

  const handleSubmit = (id, idProduk) => {
    let args = "";
    if (updateStatus === "Selesai" || updateStatus === false) {
      args = { id, idProduk, status: "Selesai", terjual: "true" };
    } else if (updateStatus === "Dibatalkan") {
      args = { id, idProduk, status: "Dibatalkan", terjual: "false" };
    }
    dispatch(updateStatusTransaction(args));
    handleClose();
    setUpdateStatus(false);
  };

  const handleContact = (item) => {
    window.open(
      `https://wa.me/${item.user.noHp}?text=Saya%20tertarik%20dengan%20barang%20Anda%20yang%20dijual`,
      "_blank"
    );
  };

  if (statusTR === "UPDATED" || statusTR === "DONE") {
    dispatch(getTransactionSeller());
    dispatch(getTransactionBuyer());
  }

  return (
    <>
      <Container>
        <Row className="justify-content-md-center mt-5 mb-3">
          <Col lg={8} className="d-flex">
            <div className="justify-content-start">
              <Link to="/daftarjual">
                <i className="bi bi-arrow-left fs-4 d-flex align-items-center"></i>
              </Link>
            </div>
            <div className="mx-auto">
              <h4 className="d-flex align-items-center">Info Penawar</h4>
            </div>
          </Col>
        </Row>

        <section className="d-flex justify-content-center">
          <Toast
            onClose={() => setShow(false)}
            show={show}
            delay={3000}
            autohide
            className="position-absolute notifToast px-2"
          >
            <Toast.Body>Status produk berhasil diperbarui</Toast.Body>
          </Toast>
          <div className="container mt-3" style={{ maxWidth: "700px" }}>
            <Stack direction="horizontal" gap={3} className="infoPenjual">
              {user === null ? (
                <></>
              ) : (
                <>
                  <img src={user.gambar} alt="" className="imageSmall" />
                  <div>
                    <h5 className="my-auto">{user.nama}</h5>
                    <p className="my-auto">{user.kota}</p>
                  </div>
                </>
              )}
            </Stack>
            {/* Status Transaksi sebagai Seller */}
            <div className="mt-4" style={{ padding: "5px" }}>
              <h5
                className="my-auto"
                style={{ fontSize: "14px", lineHeight: "24px" }}
              >
                Daftar Produkmu yang Ditawar
              </h5>
              {transactionSeller.length === 0 ? (
                <div className="d-flex justify-content-center">
                  <h5
                    className="my-3"
                    style={{
                      fontSize: "13px",
                      lineHeight: "24px",
                      color: "grey",
                    }}
                  >
                    Tidak ada produk yang ditawar
                  </h5>
                </div>
              ) : (
                <>
                  {transactionSeller.map((item, index) => {
                    return (
                      <div key={`modal${index}`}>
                        <div
                          style={{
                            marginTop: "10px",
                            marginBottom: "70px",
                          }}
                        >
                          <Stack direction="horizontal" gap={3}>
                            <img
                              src={item.product.productpics[0].gambar}
                              alt=""
                              className="imageSmall align-self-start mt-1"
                            />
                            <div>
                              <p
                                className="my-auto"
                                style={{
                                  fontSize: "12px",
                                  color: "#BABABA",
                                }}
                              >
                                Penawaran Produk
                              </p>
                              <h5
                                className="my-auto"
                                style={{
                                  fontSize: "16px",
                                  lineHeight: "26px",
                                }}
                              >
                                {item.product.nama}
                              </h5>
                              <h5
                                className="my-auto"
                                style={{
                                  fontSize: "14px",
                                  lineHeight: "26px",
                                }}
                              >
                                <CurrencyFormat
                                  value={item.product.harga}
                                  displayType={"text"}
                                  thousandSeparator={true}
                                  prefix={"Rp. "}
                                />
                              </h5>
                              <h5
                                className="my-auto"
                                style={{
                                  fontSize: "14px",
                                  lineHeight: "26px",
                                }}
                              >
                                Ditawar{" "}
                                <CurrencyFormat
                                  value={item.penawaran}
                                  displayType={"text"}
                                  thousandSeparator={true}
                                  prefix={"Rp. "}
                                />
                              </h5>
                            </div>
                            <p
                              className="align-self-start ms-auto"
                              style={{
                                fontSize: "12px",
                                color: "#BABABA",
                              }}
                            >
                              <SimpleDateTime
                                dateSeparator="-"
                                format="MYD"
                                showTime="1"
                                timeSeparator=":"
                                meridians="1"
                              >
                                {item.createdAt}
                              </SimpleDateTime>
                            </p>
                          </Stack>
                          {/* Cek Status Produk */}
                          {item.status === "Menunggu" ? (
                            <div className="float-end mt-2">
                              <Button
                                className="btnOutlineInfo me-2 px-5"
                                onClick={() => handleTolak(item.id)}
                              >
                                Tolak
                              </Button>
                              <Button
                                className="btnPrimaryInfo px-5"
                                data-bs-toggle="modal"
                                onClick={() => handleTerima(item.id)}
                                data-bs-target={`#modal${item.id}`}
                              >
                                Terima
                              </Button>
                            </div>
                          ) : (
                            <div className="float-end mt-2">
                              <Button
                                className="btnOutlineInfo me-2 px-5"
                                data-bs-toggle="modal"
                                data-bs-target={`#status${item.id}`}
                                onClick={showModalTwo}
                              >
                                Status
                              </Button>
                              <Button
                                className="btnPrimaryInfo px-3"
                                onClick={showModalOne}
                              >
                                Hubungi di{" "}
                                <i className="bi bi-whatsapp ms-2"></i>
                              </Button>
                            </div>
                          )}

                          {/* Modal Terima*/}
                          <Modal
                            show={modalOneIsOpen}
                            onHide={handleClose}
                            centered
                            contentClassName="custom-modal"
                            id={`modal${item.id}`}
                          >
                            <Modal.Header
                              variant="Header"
                              className="modalHeader"
                              closeButton
                            ></Modal.Header>
                            <Modal.Body className="judul">
                              Yeay kamu berhasil mendapat harga yang sesuai
                            </Modal.Body>
                            <Modal.Body>
                              <p
                                className="align-self-start ms-auto"
                                style={{
                                  fontSize: "14px",
                                  color: "#BABABA",
                                }}
                              >
                                Segera hubungi pembeli melalui whatsapp untuk
                                transaksi selanjutnya
                              </p>

                              <Stack className="modalProduk" gap={3}>
                                <div className="fw-bold text-center">
                                  Product Match
                                </div>
                                <Stack direction="horizontal" gap={3}>
                                  <img
                                    src={item.user.gambar}
                                    alt=""
                                    className="imageSmall"
                                  />
                                  <div>
                                    <h5
                                      className="my-auto"
                                      style={{
                                        fontSize: "14px",
                                        lineHeight: "26px",
                                      }}
                                    >
                                      {item.user.nama}
                                    </h5>
                                    <p
                                      className="my-auto"
                                      style={{
                                        fontSize: "14px",
                                        lineHeight: "26px",
                                      }}
                                    >
                                      {item.user.kota}
                                    </p>
                                  </div>
                                </Stack>
                                <Stack direction="horizontal" gap={3}>
                                  <img
                                    src={item.product.productpics[0].gambar}
                                    alt=""
                                    className="imageSmall align-self-start mt-1"
                                  />
                                  <div>
                                    <h5
                                      className="my-auto"
                                      style={{
                                        fontSize: "14px",
                                        lineHeight: "26px",
                                      }}
                                    >
                                      {item.product.nama}
                                    </h5>
                                    <h5
                                      className="my-auto"
                                      style={{
                                        fontSize: "14px",
                                        lineHeight: "26px",
                                      }}
                                    >
                                      <del>
                                        <CurrencyFormat
                                          value={item.product.harga}
                                          displayType={"text"}
                                          thousandSeparator={"."}
                                          decimalSeparator={","}
                                          prefix={"Rp. "}
                                        />
                                      </del>
                                    </h5>
                                    <h5
                                      className="my-auto"
                                      style={{
                                        fontSize: "14px",
                                        lineHeight: "26px",
                                      }}
                                    >
                                      Ditawar
                                      <CurrencyFormat
                                        value={item.penawaran}
                                        displayType={"text"}
                                        thousandSeparator={"."}
                                        decimalSeparator={","}
                                        prefix={"Rp. "}
                                      />
                                    </h5>
                                  </div>
                                </Stack>
                              </Stack>
                            </Modal.Body>
                            <Modal.Footer className="modalFooter">
                              <Button
                                className="btnNego"
                                variant="primary"
                                onClick={() => handleContact(item)}
                              >
                                Hubungi via Whatsapp{" "}
                                <i className="bi bi-whatsapp ms-2"></i>
                              </Button>
                            </Modal.Footer>
                          </Modal>

                          {/* ==========MODAL STATUS========== */}
                          <Modal
                            show={modalTwoIsOpen}
                            onHide={handleClose}
                            centered
                            contentClassName="custom-modal"
                            id={`status${item.id}`}
                          >
                            <Modal.Header
                              variant="Header"
                              className="modalHeader"
                              closeButton
                            ></Modal.Header>
                            <Modal.Body className="judul">
                              Yeay kamu berhasil mendapat harga yang sesuai
                            </Modal.Body>
                            <Modal.Body>
                              <Form>
                                <Stack gap={3}>
                                  <div>Perbarui status penjualan produkmu</div>
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      onClick={() =>
                                        setUpdateStatus("Diterima")
                                      }
                                      onChange={() =>
                                        setUpdateStatus("Diterima")
                                      }
                                      type="radio"
                                      name="status"
                                      id="flexRadioDefault1"
                                      value="Selesai"
                                      defaultChecked
                                      required
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexRadioDefault1"
                                    >
                                      Berhasil terjual
                                    </label>
                                    <p
                                      className="my-auto"
                                      style={{
                                        fontSize: "14px",
                                        color: "#BABABA",
                                      }}
                                    >
                                      Kamu telah sepakat menjual produk ini
                                      kepada pembeli
                                    </p>
                                  </div>
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      onClick={() =>
                                        setUpdateStatus("Dibatalkan")
                                      }
                                      onChange={() =>
                                        setUpdateStatus("Dibatalkan")
                                      }
                                      type="radio"
                                      name="status"
                                      id="flexRadioDefault2"
                                      value="Dibatalkan"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexRadioDefault2"
                                    >
                                      Batalkan transaksi
                                    </label>
                                    <p
                                      className="my-auto"
                                      style={{
                                        fontSize: "14px",
                                        color: "#BABABA",
                                      }}
                                    >
                                      Kamu membatalkan transaksi produk ini
                                      dengan pembeli
                                    </p>
                                  </div>
                                </Stack>
                              </Form>
                            </Modal.Body>
                            <Modal.Footer className="modalFooter">
                              <Button
                                className="btnNego"
                                variant="primary"
                                onClick={() =>
                                  handleSubmit(item.id, item.idProduct)
                                }
                              >
                                Kirim
                              </Button>
                            </Modal.Footer>
                          </Modal>
                        </div>
                        <hr className="mb-4"></hr>
                      </div>
                    );
                  })}
                </>
              )}
            </div>
            {/* Status Transaksi sebagai Buyer */}
            <div style={{ padding: "5px" }}>
              <h5
                className="my-auto"
                style={{ fontSize: "14px", lineHeight: "24px" }}
              >
                Status Negosiasi Anda
              </h5>
              {transactionBuyer.length === 0 ? (
                <div className="d-flex justify-content-center">
                  <h5
                    className="my-3"
                    style={{
                      fontSize: "13px",
                      lineHeight: "24px",
                      color: "grey",
                    }}
                  >
                    Tidak ada transaksi
                  </h5>
                </div>
              ) : (
                <>
                  {transactionBuyer.map((item, index) => {
                    return (
                      <div key={`modal${index}`}>
                        <div
                          style={{ marginTop: "10px", marginBottom: "70px" }}
                        >
                          <Stack direction="horizontal" gap={3}>
                            <img
                              src={item.product.productpics[0].gambar}
                              alt=""
                              className="imageSmall align-self-start mt-1"
                            />
                            <div>
                              <p
                                className="my-auto"
                                style={{ fontSize: "12px", color: "#BABABA" }}
                              >
                                Penawaran Produk
                              </p>
                              <h5
                                className="my-auto"
                                style={{ fontSize: "16px", lineHeight: "26px" }}
                              >
                                {item.product.nama}
                              </h5>
                              <h5
                                className="my-auto"
                                style={{ fontSize: "14px", lineHeight: "26px" }}
                              >
                                <CurrencyFormat
                                  value={item.product.harga}
                                  displayType={"text"}
                                  thousandSeparator={true}
                                  prefix={"Rp. "}
                                />
                              </h5>
                              <h5
                                className="my-auto"
                                style={{ fontSize: "14px", lineHeight: "26px" }}
                              >
                                Ditawar{" "}
                                <CurrencyFormat
                                  value={item.penawaran}
                                  displayType={"text"}
                                  thousandSeparator={true}
                                  prefix={"Rp. "}
                                />
                              </h5>
                            </div>
                            <p
                              className="align-self-start ms-auto"
                              style={{ fontSize: "12px", color: "#BABABA" }}
                            >
                              <SimpleDateTime
                                dateSeparator="-"
                                format="MYD"
                                showTime="1"
                                timeSeparator=":"
                                meridians="1"
                              >
                                {item.createdAt}
                              </SimpleDateTime>
                            </p>
                          </Stack>
                          {/* Cek Status Produk */}
                          {item.status === "Menunggu" ? (
                            <div className="float-end mt-2">
                              <Alert
                                variant="warning"
                                className="alertTransaksi d-flex align-items-center"
                              >
                                {item.status}
                              </Alert>
                            </div>
                          ) : (
                            <></>
                          )}
                          {item.status === "Selesai" ? (
                            <div className="float-end mt-2">
                              <Alert
                                variant="success"
                                className="alertTransaksi d-flex align-items-center"
                              >
                                {item.status}
                              </Alert>
                            </div>
                          ) : (
                            <> </>
                          )}
                          {item.status === "Ditolak" ? (
                            <div className="float-end mt-2">
                              <Alert
                                variant="danger"
                                className="alertTransaksi d-flex align-items-center"
                              >
                                {item.status}
                              </Alert>
                            </div>
                          ) : (
                            <> </>
                          )}
                        </div>
                        <hr className="mb-4"></hr>
                      </div>
                    );
                  })}
                </>
              )}
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}
