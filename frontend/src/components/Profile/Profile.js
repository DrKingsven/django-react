import React from "react";
import {useEffect, useState} from "react";
import useAxios from "../../utils/useAxios";
import "./Profile.css"
import {Button, Card, Container, Figure, ListGroup, Offcanvas} from "react-bootstrap";
import logo from '../../assets/imges/logoNecFooter.png'
import "../leftColumn/leftColumn.css"
import {useContext} from "react";
import AuthContext from "../../context/AuthContext";

const Profile = () => {
    // console.log(person)


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [res, setRes] = useState([]);

    const [loading, setLoading] = useState(true)
    const api = useAxios();
    const person = localStorage.getItem("person")
    const author = localStorage.getItem("author")
    // console.log(author)
// console.log(person)


    const fetchData = async () => {
        // console.log(masClients)
        try {

            let dataUser = []
            if (person) {
                const response = await api.get(`/v1/profiluser/${person}`);
                let data = await response.data
                dataUser.push(data)
                setRes(dataUser);
            }
        } catch {
            setRes("Something went wrong");
        }
        setLoading(false)
    };
    // console.log(res)
    useEffect(() => {

        fetchData();
    }, [person]);

    // console.log(res)
    const taskListRender = res.map(userId => <ListGroup className="list-group-flush" key={userId.id}>
        {/*<Card.Img style={{marginLeft: "20px", marginTop: "20px", width: "15%"}} variant="top" src={UserIcon} />*/}

        <ListGroup.Item style={{fontWeight: "700"}}>
        {userId.title}
          </ListGroup.Item>
        <ListGroup.Item style={{fontWeight: "500"}}>Email: {userId.email_address}</ListGroup.Item>
        <ListGroup.Item style={{fontWeight: "500",}}>ИНН: {userId.counterparty_inn}</ListGroup.Item>
        <ListGroup.Item style={{fontWeight: "500",}}>Адрес: {userId.client_address}</ListGroup.Item>
        <ListGroup.Item style={{fontWeight: "500",}}>Тип оплаты: {userId.type_payment}</ListGroup.Item>
        <ListGroup.Item style={{fontWeight: "500",}}>Стоимость часа: {userId.cost_hour}</ListGroup.Item>
        <ListGroup.Item style={{fontWeight: "500",}}>Холдинг: {userId.holding}</ListGroup.Item>
        <ListGroup.Item style={{fontWeight: "500",}}>Форма работы: {userId.form_clients_work}</ListGroup.Item>
    </ListGroup>)

    return (
        <>
        <a onClick={handleShow}>
            ПРОФИЛЬ
        </a>

        <Offcanvas show={show} onHide={handleClose}>

            <Offcanvas.Header closeButton style={{backgroundColor: "#0086fd"}}>
                <Offcanvas.Title>

                    <img style={{width: "300px"}} src={logo}/>
                </Offcanvas.Title>


            </Offcanvas.Header>
            <Offcanvas.Body>


                   {/*<img style={{width: "300px", marginLeft: "150px", paddingTop: "5px"}} src={logo}/>*/}
                   {/*<h1 style={{color: "#ffffff"}}>ПРОФИЛЬ</h1>*/}

                       {taskListRender}


            </Offcanvas.Body>

        </Offcanvas>
        </>
 )
}

export default Profile