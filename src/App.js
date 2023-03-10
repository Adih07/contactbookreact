import { useState } from "react";
import Component from "./Components/Component";
import "./Components/Modal/Modal";
import Modalc from "./Components/Modal/Modal";
import User from "./Components/User/User";
import UserEdit from "./Components/UserEdit/UserEdit";
import "./Css/.css";

const App = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [products, setProducts] = useState([]);

  function handleAddProduct(newObj) {
    let newProducts = [...products];
    newProducts.push(newObj);
    setProducts(newProducts);
  }

  function handleDelete(id) {
    let newProducts = products.filter((item) => item.id !== id);
    setProducts(newProducts);
  }

  const [showEditModal, setShowEditModal] = useState(false);
  const handleEditClose = () => setShowEditModal(false);
  const handleEditShow = () => setShowEditModal(true);

  const [editProduct, setEditProduct] = useState({});

  function handleEdit(id) {
    let obj = products.filter((item) => item.id == id);
    setEditProduct(obj[0]);
    handleEditShow();
  }

  function handleSave(editedObj) {
    // для Изменения Ползователя чтобы alert сработало
    if (
      editedObj.name === "" ||
      editedObj.surname === "" ||
      editedObj.number === "" ||
      editedObj.email === ""
    ) {
      alert("Заполните поле");
      return;
    }
    let newProducts = products.map((item) => {
      if (item.id === editedObj.id) {
        return editedObj;
      }
      return item;
    });

    setProducts(newProducts);
    setShowEditModal(false);
  }
  return (
    <div>
      <Component handleShow={handleShow} />
      <Modalc
        handleAddProduct={handleAddProduct}
        show={show}
        handleClose={handleClose}
      />
      <User
        products={products}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
      {showEditModal && (
        <UserEdit
          showEditModal={showEditModal}
          handleEditClose={handleEditClose}
          editProduct={editProduct}
          handleSave={handleSave}
        />
      )}
    </div>
  );
};

export default App;
