import React, {useEffect, useState} from "react";
import {Accordion, Button, Form, FormControl, InputGroup, ListGroup, Modal} from "react-bootstrap";
import useAxios from "../../../utils/useAxios";
import {map} from "react-bootstrap/ElementChildren";
import DatePicker from "react-widgets/DatePicker";
import "react-widgets/styles.css";
import { v4 as uuidv4 } from 'uuid';

const NewComment = (props) => {

    const [res, setRes] = useState([]);
    const api = useAxios();

    // setInputUser(res.title)
    // const [inputUser, setInputUser] = useState(res.title)


    const uuid = uuidv4()
    const taskId = props.id
    const author = localStorage.getItem("author")
    const [commentText, setCommentText] = useState('Пустой комментарий')

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

    const handleClose = () => {

        const data = [{
            "id": uuid,
            "refTask": taskId,
            "commentContent": commentText,
            "dateTime": date,
            "author": author
        }]
        // console.log(data)
        api.post('/v1/newComment/', data)
            .then(response => {
                // console.log("Status: ", response.status);
                // console.log("Data: ", response.data);
            }).catch(error => {
            console.error('Something went wrong!', error);
        });
    }

    return (
        <>
            <Accordion defaultActiveKey="0" >
                <Accordion.Item eventKey="0" >
                    <Accordion.Header >Создать новый комментарий:</Accordion.Header>
                    <Accordion.Body >
                        <Form>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                                value={commentText} onChange={e => setCommentText(e.target.value)}

                            >

                                <Form.Control  as="textarea" rows={3}/>
                            </Form.Group>
                            <Button type={"submit"}  variant="primary" onClick={handleClose}>
                                Создать комментарий
                            </Button>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>


        </>
    );
}
export default NewComment