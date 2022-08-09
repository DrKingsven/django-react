import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import {Button, Container, Form} from "react-bootstrap";
import React from "react";

function Register() {
  const [username, setUsername] = useState("");

  const { registerUser } = useContext(AuthContext);

  const handleSubmit = async e => {
    e.preventDefault();
    registerUser(username);
  };

  return (
      <div className={"context"} style={{backgroundColor: "#eeeaea"}}>
        <Container className={"container-my "} >
          <Form onSubmit={handleSubmit} >
            <Form.Group className="mb-3 " controlId="formBasicEmail">
              <Form.Label htmlFor="username">Регистрация</Form.Label>
              <br/>

              {/*<Form.Label htmlFor="username">Введите номер телефона:</Form.Label>*/}
              <Form.Control type="text"
                        id="username"
                        onChange={e => setUsername(e.target.value)}
                        placeholder="Телефон"
                        required />
              <Form.Text className="text-muted">
                Введите номер телефона прописаный в договоре без (+)
              </Form.Text>
            </Form.Group>



            <Button variant="primary" type="submit">
              Получить пароль
            </Button >
          </Form>
        </Container>
        <div className="area">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>

        </div>
      </div>
      // <form onSubmit={handleSubmit}>
      //   <div>
      //     <label htmlFor="username">Username</label>
      //     <input
      //       type="text"
      //       id="username"
      //       onChange={e => setUsername(e.target.value)}
      //       placeholder="Username"
      //       required
      //     /></div>
      //
      //   <button>Register</button>
      // </form>
  );
}

export default Register;
