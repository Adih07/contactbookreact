import { Button } from "react-bootstrap";

function Component({ handleShow }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div>
        <Button variant="outline-warning" title="Sign in" onClick={handleShow}>
          🔱 Зарегистрируйся
        </Button>
      </div>
    </div>
  );
}

export default Component;
