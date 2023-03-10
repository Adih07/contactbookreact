import React, { useEffect, useState } from "react";
import { FormControl } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function UserEdit({ handleEditClose, showEditModal, editProduct, handleSave }) {
  const [productToEdit, setProductToEdit] = useState(editProduct);

  useEffect(() => {
    setProductToEdit(editProduct);
  }, [editProduct]);

  const editName = (e) => {
    let newObj = {
      ...productToEdit,
      name: e.target.value,
    };

    setProductToEdit(newObj);
  };

  const editNumber = (e) => {
    let newObj = {
      ...productToEdit,
      number: e.target.value,
    };

    setProductToEdit(newObj);
  };

  const editSurName = (e) => {
    let newObj = {
      ...productToEdit,
      surname: e.target.value,
    };

    setProductToEdit(newObj);
  };

  const editEmail = (e) => {
    let newObj = {
      ...productToEdit,
      email: e.target.value,
    };

    setProductToEdit(newObj);
  };

  return (
    <>
      <Modal show={showEditModal} onHide={handleEditClose}>
        <div className="mod">
          <Modal.Header>
            <Modal.Title style={{ color: "gold", background: "transparent" }}>
              Изменения Ползователя
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form">
              <FormControl
                style={{ color: "gold", background: "transparent" }}
                onChange={editName}
                value={productToEdit.name}
                className="my-3"
                placeholder="Имя"
              />
              <FormControl
                style={{ color: "gold", background: "transparent" }}
                onChange={editSurName}
                value={productToEdit.surname}
                className="my-3"
                placeholder="Фамилия"
              />
              <FormControl
                style={{ color: "gold", background: "transparent" }}
                onChange={editNumber}
                value={productToEdit.number}
                className="my-3"
                placeholder="Номер телефона"
              />
              <FormControl
                style={{ color: "gold", background: "transparent" }}
                onChange={editEmail}
                value={productToEdit.email}
                className="my-3"
                placeholder="@емайл"
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="outline-danger"
              onClick={handleEditClose}
              title="Закрывать"
            >
              ❌
            </Button>
            <Button
              variant="outline-warning"
              onClick={() => handleSave(productToEdit)}
              title="Сохранить"
            >
              📝
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
}

export default UserEdit;
