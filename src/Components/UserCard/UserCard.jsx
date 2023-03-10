import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function UserCard({ item, handleDelete, handleEdit }) {
  return (
    <Card
      className="card"
      style={{
        width: "22rem",
        margin: "10px",
        border: "1px solid yellow",
        borderTopColor: "red",
        borderBottomColor: "red",
        textAlign: "start",
      }}
    >
      <Card.Body>
        <h4 style={{ textAlign: "center", color: "gold" }}>
          Контактная книжка
        </h4>
        <Card.Text style={{ color: "gold", background: "transparent" }}>
          Имя:{item.name}
          <br />
          Фамилия: {item.surname}
          <br />
          Номер телефона: {item.number}
          <br />
          @емайл: {item.email}
        </Card.Text>
        <Button
          onClick={() => handleDelete(item.id)}
          title="Удаление"
          variant="outline-danger"
        >
          🗑
        </Button>
        <Button
          onClick={() => handleEdit(item.id)}
          title="Изменение"
          variant="outline-info"
        >
          🖊
        </Button>
      </Card.Body>
    </Card>
  );
}

export default UserCard;
