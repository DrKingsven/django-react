import React from "react";
import "./TaskList.css"
import {Button, Col, Container, Form, ListGroup, Modal, Row, Table} from "react-bootstrap";
// import {Buttons} from "../../../../../ReactLK/lkproject/src/components/testCounter";
// import {After} from "../../../../../ReactLK/lkproject/src/components/After";
import {useEffect, useState} from "react";
import useAxios from "../../utils/useAxios";
import data from "bootstrap/js/src/dom/data";
import Pagination from "../Pagination";
import ExampleData from "./ExampleDataForm/exampleData";
import Example from "./example/Example";
// import data from "bootstrap/js/src/dom/data";


const TaskList = () => {
    const [res, setRes] = useState([]);
    const [loading, setLoading] = useState(true)
    const api = useAxios();
    const limit = 10
    const fetchData = async (offset = 0) => {
        try {
            const response = await api.get(`/v1/tasks/?offset=${offset}`);
            let data = await response.data.results
            setRes(data);
        } catch {
            setRes("Something went wrong");
        }
        setLoading(false)
    };
    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    console.log(res)
    const taskListRender = res.map(taskId => <tr key={taskId.id}>
        <td style={{fontWeight: "500", textAlign: "center"}}>{taskId.numberTask}</td>
        <td style={{fontWeight: "500", textAlign: "center"}}>{taskId.date}</td>
        <td style={{fontWeight: "500", textAlign: "center"}}>{taskId.counterparty}</td>
        <td className={"formulationTask"}>{taskId.formulation_task}</td>
        <td style={{fontWeight: "500", textAlign: "center"}}>{taskId.status}</td>

        <td><ExampleData taskId={taskId}/></td>
    </tr>)
    return (
        <Container style={{marginTop: "10px", width: "950px"}}>

            {/*<Example/>*/}

            <div>
                <div className="newTask">
                </div>
                {/*<Pagination pageCount={ 100 / limit } onPageChange={ page => fetchData(page * limit) }/>*/}
                <Table striped bordered hover size="sm" className="Tabel">
                    <thead>
                    <tr>
                        <th style={{textAlign: "center", width: "10%"}}>Номер задачи</th>
                        <th style={{textAlign: "center", width: "10%"}}>Дата</th>
                        <th style={{textAlign: "center", width: "15%"}}>Контрагент</th>
                        <th style={{textAlign: "center", width: "40%"}}>Формулировка задачи</th>
                        <th style={{textAlign: "center", width: "10%"}}>Статус</th>
                        <th style={{textAlign: "center", width: "10%"}}>Действие</th>
                    </tr>
                    </thead>
                    <tbody>
                    {loading && 'Загрузка...'}
                    {taskListRender}
                    </tbody>
                </Table>
                <Pagination pageCount={1000 / limit} onPageChange={page => fetchData(page * limit)}/>
            </div>
        </Container>);
}
export default TaskList