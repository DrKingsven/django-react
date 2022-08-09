import React from "react";
import {useEffect, useState} from "react";
import useAxios from "../../utils/useAxios";
import "./Profile.css"
import {Card, Container, Figure, ListGroup} from "react-bootstrap";
import UserIcon from "../../assets/imges/ProfileUserImg.png"
import HeaderImg from "../../assets/imges/logoNecFooter.png"
const Profile = () => {
    const [res, setRes] = useState([]);
    const [loading, setLoading] = useState(true)
    const api = useAxios();
    const fetchData = async () => {
        try {
            const response = await api.get(`/v1/profilusers`);
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
    const taskListRender = res.map(userId => <ListGroup className="list-group-flush" key={userId.id}>
        <Card.Img style={{marginLeft: "20px", marginTop: "20px", width: "15%"}} variant="top" src={UserIcon} />
        <Card.Body>
            <Card.Title style={{fontWeight: "500", color: "#ffffff"}}>{userId.title}</Card.Title>
            <Card.Text style={{fontWeight: "500", color: "#ffffff"}}>Email: {userId.email_address}</Card.Text>
        </Card.Body>
        <ListGroup.Item style={{fontWeight: "500",}}>ИНН: {userId.counterparty_inn}</ListGroup.Item>
        <ListGroup.Item style={{fontWeight: "500",}}>Адрес: {userId.client_address}</ListGroup.Item>
        <ListGroup.Item style={{fontWeight: "500",}}>Тип оплаты: {userId.type_payment}</ListGroup.Item>
        <ListGroup.Item style={{fontWeight: "500",}}>Стоимость часа: {userId.cost_hour}</ListGroup.Item>
        <ListGroup.Item style={{fontWeight: "500",}}>Холдинг: {userId.holding}</ListGroup.Item>
        <ListGroup.Item style={{fontWeight: "500",}}>Форма работы: {userId.form_clients_work}</ListGroup.Item>
    </ListGroup>)
    return (

            <div>
                <div className={"userProfile"}>
                    <div className={"imgProfile"}>
                        <img src={UserIcon} style={{width: "150px"}}/>
                    </div>
<div className={"headerUser"}>
<img src={HeaderImg} style={{width: "600px"}}/>
</div>


                    <div className={"leftColum"}>

                    </div>
                    <div className={"rightColum"}>

                    </div>
                </div>

                {/*<Card style={{backgroundColor: "#4b6bc0", width: '950px' }}>*/}
                {/*    <h1 style={{color: "#ffffff",marginLeft: "20px", marginTop: "20px", marginBottom: "20px"}}>Карточка пользователя</h1>*/}
                {/*        {taskListRender}*/}
                {/*</Card>*/}


                    {loading && 'Загрузка...'}

            </div>
    )
}
export default Profile