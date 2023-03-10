import React, { useState } from "react";
import { FormControl } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Modalc({ show, handleClose, handleAddProduct }) {
  const [name, setName] = useState("");
  const [surname, setSurName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  function handleAdd() {
    if (!name || !surname || !number || !email) {
      alert("Заполните все поле!!!!");
      return;
    }

    let newObj = {
      name,
      surname,
      number,
      email,
      id: Date.now(),
    };
    handleAddProduct(newObj);

    setName("");
    setSurName("");
    setNumber("");
    setEmail("");
    handleClose();
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <div className="mod">
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "gold" }}>Пользователь</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form">
              <FormControl
                style={{ color: "gold", background: "transparent" }}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="my-3"
                placeholder="Имя"
              />
              <FormControl
                style={{ color: "gold", background: "transparent" }}
                value={surname}
                onChange={(e) => setSurName(e.target.value)}
                className="my-3"
                placeholder="Фамилия"
              />
              <FormControl
                style={{ color: "gold", background: "transparent" }}
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="my-3"
                placeholder="Номер телефона"
              />
              <FormControl
                style={{ color: "gold", background: "transparent" }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="my-3"
                placeholder="@емайл"
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-danger" onClick={handleClose}>
              Закрыть
            </Button>
            <Button
              variant="outline-success
"
              onClick={handleAdd}
            >
              Добавлять
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
}

export default Modalc;
