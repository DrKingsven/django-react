import React, {useEffect, useState} from "react";
import useAxios from "../../../utils/useAxios";
import {Button, Form, ListGroup, Modal} from "react-bootstrap";
import "./ExampleDataForm.css"
import NewComment from "./newComment";
function ExampleData(props) {
    const [lgShow, setLgShow] = useState(false);
    const [res, setRes] = useState([]);
    const [loading, setLoading] = useState(true)
    const api = useAxios();
    const fetchData = async (refTask = 0) => {
        try {
            const response = await api.get(`/v1/comments/?refUser=${props.taskId.id}`);
            let data = await response.data.results
            setRes(data);
        } catch {
            setRes("Something went wrong");
        }
        setLoading(false)
    };
    useEffect(() => {
        fetchData();
    }, []);
    const commentListRender = res.map(commentId => <ListGroup variant="flush" key={commentId.id}>
            <ListGroup.Item><Form.Control plaintext readOnly defaultValue={commentId.author}/></ListGroup.Item>
            <ListGroup.Item><Form.Control plaintext readOnly defaultValue={commentId.dateTime}/></ListGroup.Item>
            <Form.Group className="mb-10" controlId="exampleForm.ControlTextarea1" style={{marginTop: "20px"}}>
                <Form.Control as="textarea" readOnly rows={7} value={commentId.commentContent}/>
            </Form.Group>
        </ListGroup>
    )
    return (<>
        <button className={"buttonOpenTask"}  onClick={() => setLgShow(true)}>.</button>
        <Modal
            size="lg"
            show={lgShow}
            onHide={() => setLgShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header closeButton style={{backgroundColor: "#224cbd", color: "#ffffff"}}>
                <Modal.Title id="example-modal-sizes-title-lg">
                    Задача {props.taskId.numberTask}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form style={{width: "770px"}}>
                    <ListGroup variant="flush">
                        <ListGroup.Item><Form.Control plaintext readOnly defaultValue={"Контрагент: " + props.taskId.counterparty}/></ListGroup.Item>
                        <ListGroup.Item><Form.Control plaintext readOnly defaultValue={"ИНН: " + props.taskId.counterparty_inn}/></ListGroup.Item>
                        <ListGroup.Item><Form.Control plaintext readOnly defaultValue={"Стоимость работы: " + props.taskId.cost_of_work + " ₽"}/></ListGroup.Item>
                        <ListGroup.Item><Form.Control plaintext readOnly defaultValue={"Статус: " + props.taskId.status}/></ListGroup.Item>
                        <ListGroup.Item><Form.Control plaintext readOnly defaultValue={"Исполнитель: " + props.taskId.executor}/></ListGroup.Item>
                        <ListGroup.Item><Form.Control plaintext readOnly defaultValue={" Дата постановки: " + props.taskId.date}/></ListGroup.Item>
                        <ListGroup.Item><Form.Control plaintext readOnly defaultValue={"Срок выполнения задачи: " + props.taskId.due_date}/></ListGroup.Item>
                        <ListGroup.Item> <Form.Control plaintext readOnly defaultValue={"Начало работы: " + props.taskId.get_started}/></ListGroup.Item>
                        <ListGroup.Item> <Form.Control plaintext readOnly defaultValue={"Автор: " + props.taskId.author}/></ListGroup.Item>

                        <ListGroup.Item></ListGroup.Item>
                    </ListGroup>
                    <div>
                        <h3> Формулировка задачи: </h3>
                        <Form.Group className="mb-10" controlId="exampleForm.ControlTextarea1"
                                    style={{marginTop: "20px"}}>
                            <Form.Control as="textarea" readOnly rows={7} value={props.taskId.formulation_task}/>
                        </Form.Group>
                    </div>
                    <div>
                        <h3>Комментарии к задаче:</h3>
                        {/*{loading}*/}
                        {commentListRender}
                        <NewComment id={props.taskId.id}/>

                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    </>);
}
export default ExampleData