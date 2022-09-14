import React, {useContext, useEffect, useState} from "react";
import {Button, Form, ListGroup, Modal} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import AuthContext from "../../../context/AuthContext";
import {map} from "react-bootstrap/ElementChildren";
import useAxios from "../../../utils/useAxios";


function ExampleComment() {
    // const { personsData } = useContext(AuthContext);
// personsData()
    const api = useAxios()
    const [res, setRes] = useState([]);
    let persons = localStorage.getItem("persons")
    persons = JSON.parse(persons)
    const fetchData = async () => {
        try {
            let list = []
            for (let i = 0; i < persons.length; i++) {
                const response = await api.get(`/v1/profiluser/${persons[i]}`);
                let data = await response.data
                list.push(data)
            }
            setRes(list)

        } catch {
            // console.log("Ошибка");
        }
    };

    // console.log(res)

    useEffect(() => {
            fetchData();
    }, []);
    const [show, setShow] = useState(true);
    const history = useHistory();
    const [person, setPerson] = useState('')

    const handleClose = () => {
        setShow(false)
        // console.log(inputUser)

        localStorage.setItem("person", person);

        history.push("/home")

    }
    const handleShow = () => setShow(true);

    const clientsList = res.map(userId =>
        <option  key={userId.id} value={userId.id}>{userId.title}</option>)
        return (
        <>
            <Modal show={show}>
                <Modal.Header>
                    <Modal.Title>Выберите предприятие для работы</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Select autoFocus
                                 value={person} onChange={e => setPerson(e.target.value)} aria-label="Default select example">
                        <option>Предприятие</option>
                        {clientsList}
                </Form.Select></Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Выбрать
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ExampleComment