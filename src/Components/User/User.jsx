import React from "react";
import UserCard from "../UserCard/UserCard";

const User = ({ products, handleDelete, handleEdit }) => {
  return (
    <div>
      <center style={{ fontSize: "30px", margin: "20px" }}></center>
      <div className="d-flex jutify-content-between flex-wrap w-75 m-auto">
        {products.map((item) => (
          <UserCard
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

export default User;
