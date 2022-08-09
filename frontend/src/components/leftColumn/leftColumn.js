// import React from 'react';
import "./leftColumn.css";
// import {MDBCard, MDBCardTitle, MDBCardText, MDBContainer, MDBIcon} from "mdbreact";
// import {Button, Card, Container, Nav, NavDropdown} from "react-bootstrap";
import {Nav, NavDropdown} from "react-bootstrap";

const LeftColumn = () => {
    return (
        <div className={"left-column"}>
            <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link style={{color: "wheat"}} href="/home">Главная</Nav.Link>
                {/*<Nav.Link eventKey="link-1">Задачи</Nav.Link>*/}
                {/*<Nav.Link eventKey="link-2">Отчеты</Nav.Link>*/}
                {/*<Nav.Link eventKey="disabled" Документы>*/}
                {/*    Disabled*/}
                {/*</Nav.Link>*/}
                <NavDropdown title="Задачи" id="collasible-nav-dropdown" >
                    <NavDropdown.Item href="/tasks">Все задачи</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Активные задачи</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Закрытые задачи</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Создать задачу</NavDropdown.Item>
                </NavDropdown>
                {/*<NavDropdown title="Dropdown" id="collasible-nav-dropdown" >*/}
                {/*    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
                {/*    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>*/}
                {/*    <NavDropdown.Item href="#action/3.3">Somdsdsdsdsdsdething</NavDropdown.Item>*/}
                {/*    <NavDropdown.Divider />*/}
                {/*    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>*/}
                {/*</NavDropdown>*/}
                {/*<NavDropdown title="Dropdown" id="collasible-nav-dropdown" >*/}
                {/*    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
                {/*    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>*/}
                {/*    <NavDropdown.Item href="#action/3.3">Somdsdsdsdsdsdething</NavDropdown.Item>*/}
                {/*    <NavDropdown.Divider />*/}
                {/*    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>*/}
                {/*</NavDropdown>*/}
            </Nav>

        </div>
    )
};

export default LeftColumn;