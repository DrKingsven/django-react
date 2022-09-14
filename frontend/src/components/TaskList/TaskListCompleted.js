import React from "react";
import "./TaskList.css"
import {Button, Col, Container, DropdownButton, Dropdown, Form, ListGroup, Modal, Row, Table} from "react-bootstrap";

import {useEffect, useState} from "react";
import useAxios from "../../utils/useAxios";
import Pagination from "../Pagination";
import ExampleData from "./ExampleDataForm/exampleData";
import StatusFilter from "./Drop";
import NewTask from "./NewTask/NewTask";



const TaskList = () => {
    const [res, setRes] = useState([]);
    const [loading, setLoading] = useState(true)
    const api = useAxios();
    const limit = 10
    const fetchData = async (offset = 0) => {
        try {
            const response = await api.get(`/v1/tasks/completed/?offset=${offset}`);
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



    const taskListRender = res.map(taskId =>
        <>
            <ExampleData taskId={taskId}/>

            <div key={taskId.id}  className="divTableRow" >
                <div className="divTableCell">{taskId.numberTask}</div>
                <div className="divTableCell">{taskId.date}</div>
                <div className="divTableCellFormulation">{taskId.formulation_task}</div>
                <div className="divTableCell">{taskId.counterparty}</div>
                <div className="divTableCell">{taskId.status}</div>
                {/*<ExampleData taskId={taskId}/>*/}
            </div>
        </>

    )
    return (
        <>

            <div className={"tabelContent"} >



                <Button style={{marginBottom: "10px"}}><NewTask/></Button>
                <div className="newTask">
                </div>
                <div className="divTable" style={{width: "900px"}}>
                    <div className="divTableBody" >
                        <div className="divTableRow" style={{backgroundColor: "#0494fc", color: "#ffffff", textAlign: "center"}}>
                            <div className="divTableCell" style={{borderTopLeftRadius: "10px"}}>Номер задачи</div>
                            <div className="divTableCell">Дата</div>
                            <div className="divTableCell">Формулировка задачи</div>
                            <div className="divTableCell">Контрагент</div>
                            <div className="divTableCell" style={{borderTopRightRadius: "10px"}}><StatusFilter/></div>
                        </div>
                        {taskListRender}
                    </div>
                </div>
                <Pagination pageCount={1000 / limit} onPageChange={page => fetchData(page * limit)}/>
            </div>
        </>);
}
export default TaskList