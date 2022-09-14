import React, {useEffect, useState} from "react";
import {Button, Form, FormControl, InputGroup, ListGroup, Modal} from "react-bootstrap";
import useAxios from "../../../utils/useAxios";
import {map} from "react-bootstrap/ElementChildren";
import DatePicker from "react-widgets/DatePicker";
import "react-widgets/styles.css";
import { v4 as uuidv4 } from 'uuid';

const NewTask = () => {

    const person = localStorage.getItem("person")
    const author = localStorage.getItem("author")
    // console.log(person)


    const [inputIdUser, setInputIdUser] = useState(person)

    // const [inputUserInn, setInputUserInn] = useState('')
    const [inputPriority, setInputPriority] = useState('Средний')
    const [inputFormulation, setInputFormulation] = useState('')
    const [inputDate, setInputDate] = useState('')
    const [inputDueDate, setInputDueDate] = useState(new Date())



    const [res, setRes] = useState([]);
    const api = useAxios();
    const fetchData = async () => {
        try {
            const response = await api.get(`/v1/profiluser/${person}`);
            let data = await response.data
            setRes(data);
        } catch {
            setRes("Something went wrong");
        }
    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [person]);

    // setInputUser(res.title)
    const uuid = uuidv4()
    // const [inputUser, setInputUser] = useState(res.title)
    const inputUserInn = res.counterparty_inn
    const inputUser = res.title
    const status = "Постановка задачи"
    const [show, setShow] = useState(false);
    const options = {
        // era: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        // weekday: 'long',
        timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };
    const date = new Date().toLocaleString("ru", options)
    const dueDateTime = inputDueDate.toLocaleString("ru", options)
    const handleClose = () => {
        setShow(false);
        const data = [{
            "id": uuid,
            "refUsers": inputIdUser,
            "due_date": dueDateTime,
            "formulation_task": inputFormulation,
            "counterparty": inputUser,
            "counterparty_inn": inputUserInn,
            "status": status,
            "date": date,
            "priority": inputPriority,
            "author" : author
        }]



        api.post('v1/newTask/', data)
            .then(response => {
                console.log("Status: ", response.status);
                console.log("Data: ", response.data);
            }).catch(error => {
            console.error('Something went wrong!', error);
        });

        // console.log(inputUser)
        // console.log(inputDate)


    }

    const handleShow = () => setShow(true);



    return (
        <>
            <a onClick={handleShow}>
                СОЗДАТЬ ЗАДАЧУ <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 19V5C2 3.89543 2.89543 3 4 3H20C21.1046 3 22 3.89543 22 5V19C22 20.1046 21.1046 21 20 21H4C2.89543 21 2 20.1046 2 19Z" stroke="currentColor"  />
                <path d="M2 7L22 7" stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9 14H12M15 14H12M12 14V11M12 14V17" stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            </a>

            <Modal show={show}
                   size={"lg"}
                   onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Новая задача</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>

                            <Form.Group className="mb-3" style={{width: "150px"}}>
                                <Form.Label htmlFor="disabledTextInput">Контрагент</Form.Label>
                                <Form.Control autoFocus
                                               placeholder={res.title} disabled />
                            </Form.Group>
                        <Form.Group className="mb-3" style={{width: "300px"}}>
                            <Form.Label htmlFor="disabledTextInput">Дата окончания</Form.Label>
                            <DatePicker required  defaultValue={new Date()} includeTime onChange={value => setInputDueDate(value)}/>


                            {/*<DatePicker value={new Date()} includeTime onChange={value => setInputDueDate(value)}/>*/}

                        </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Приоритет</Form.Label>
                            <select
                                autoFocus
                                value={inputPriority} onChange={e => setInputPriority(e.target.value)}
                                style={{width: "150px", borderColor: "black"}}
                            >
                                <option value="Критический">Критический</option>
                                <option value="Высокий">Высокий</option>
                                <option value="Средний">Средний</option>
                                <option value="Низкий">Низкий</option>
                                <option value="Плановый">Плановый</option>
                            </select>

                        </Form.Group>
                        <Form.Group className="mb-3" style={{width: "200px"}}>
                            <Form.Label htmlFor="disabledTextInput">Статус</Form.Label>
                            <Form.Control autoFocus
                                          placeholder={status} disabled />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                            value={inputPriority} onChange={e => setInputFormulation(e.target.value)}

                        >

                            <Form.Label>Формулировка задачи</Form.Label>
                            <Form.Control  as="textarea" rows={3}/>
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>

                    <Button variant="secondary" onClick={handleClose}>
                        Отмена
                    </Button>
                    <Button type={"submit"}  variant="primary" onClick={handleClose}>
                        Создать
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default NewTask