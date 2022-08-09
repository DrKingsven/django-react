import React from "react";
import {Button, Container, Form} from "react-bootstrap";
import "./EntryForm.css";
import {useContext} from "react";
import AuthContext from "../../context/AuthContext";
import logo from "../../assets/imges/logoNecFooter.png";
import {Link} from "react-router-dom";
import backdrop from "bootstrap/js/src/util/backdrop";
export const  EntryForm = () => {
    const { loginUser } = useContext(AuthContext);
    const handleSubmit = e => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
        username.length > 0 && loginUser(username, password);
    };
    return (
        <div className={"context" }>
             <Container className={"container-my "} style={{backgroundColor: "#eeeaea"}}>
             <Form onSubmit={handleSubmit}  >
                 <Form.Group className="mb-3 " controlId="formBasicEmail">
                     <Form.Label htmlFor="username">Вход</Form.Label>
                     <br/>

                     <Form.Control type="tel" id="username" placeholder="Телефон"  />
                     <Form.Text className="text-muted">
                         Введите номер телефона прописаный в договоре без (+)
                     </Form.Text>
                 </Form.Group>
                 <Form.Group className="mb-3" controlId="formBasicPassword">

                     {/*<Form.Label>Пароль</Form.Label>*/}
                     <Form.Control type="password" id="password" placeholder="Пароль"/>
                     <Form.Text className="text-muted">
                         Введите ранее полученый пароль
                     </Form.Text>
                 </Form.Group>

            <Button variant="primary" type="submit" style={{marginRight: 5}}>
                     Войти
                 </Button >
                 <Button href={"/register"} style={{backgroundColor: "#224cbd"}} variant="primary" type="submit">
                     Регистрация
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

    );

}

export default EntryForm;