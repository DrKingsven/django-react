import React, {useContext} from "react";
import "./TaskList.css"
import {Button, Table} from "react-bootstrap";
import {useEffect, useState} from "react";
import useAxios from "../../utils/useAxios";
import Pagination from "../Pagination";
import ExampleData from "./ExampleDataForm/exampleData";
import StatusFilter from "./Drop";
import NewTask from "./NewTask/NewTask";
import AuthContext from "../../context/AuthContext";
const TaskList = () => {
    const person = localStorage.getItem("person")


    const [res, setRes] = useState([]);
    const [loading, setLoading] = useState(true)
    const api = useAxios();
    const limit = 10
    const [count, setCount] = useState(0);
    const fetchData = async (offset = 0) => {
        try {
            // const response = await api.get(`/v1/tasks/?refUsers=d9b19873-0ae6-4dbf-bfd8-8a58c048e98a/?offset=${offset}`);
            const response = await api.get(`/v1/tasks/?offset=${offset}&refUsers=${person}`);
            let data = await response.data.results
            let count = await response.data.count
            setCount(count)
            setRes(data);
        } catch {
            setRes("Something went wrong");
        }
        setLoading(false)
    };
    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [person]);

    const taskListRender = res.map(taskId =>
        <>
        <ExampleData taskId={taskId}/>

        <div key={taskId.id}  className="divTableRow" >
            <div className="divTableCell">{taskId.numberTask}</div>
            <div className="divTableCell">{taskId.date}</div>
            <div className="divTableCellFormulation">{taskId.formulation_task}</div>
            <div className="divTableCell">{taskId.counterparty}</div>
            <div className="divTableCell">{taskId.status}</div>
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
                            <div className="divTableCell" style={{borderTopLeftRadius: "10px"}}>?????????? ????????????</div>
                            <div className="divTableCell">????????</div>
                            <div className="divTableCell">???????????????????????? ????????????</div>
                            <div className="divTableCell">????????????????????</div>
                            <div className="divTableCell" style={{borderTopRightRadius: "10px"}}>????????????</div>
                            {/*<StatusFilter/>*/}
                        </div>
                        {taskListRender}
                    </div>
                </div>
                <Pagination pageCount={count / limit} onPageChange={page => fetchData(page * limit)}/>

            </div>
        </>
);
}
export default TaskList