// import React from 'react';
import "./leftColumn.css";
// import {MDBCard, MDBCardTitle, MDBCardText, MDBContainer, MDBIcon} from "mdbreact";
// import {Button, Card, Container, Nav, NavDropdown} from "react-bootstrap";
import {ButtonGroup, DropdownButton, Nav, Dropdown, NavDropdown} from "react-bootstrap";
import AuthContext from "../../context/AuthContext";
import {useContext} from "react";
import Profile from "../Profile/Profile";
import NewTask from "../TaskList/NewTask/NewTask";
import React from "react";

const LeftColumn = () => {
    const { user, logoutUser } = useContext(AuthContext);

    return (
        <div >

        { user && (


        // <div className={'headerLeftBloc'}>
        <Nav defaultActiveKey="/home" className="flex-column leftColumNav" >



            <div style={{position: "fixed"}}>



                {/*<Nav.Link className={"listGroup3"} ><NewTask/></Nav.Link>*/}

                <Nav.Link className={"listGroup"} ><svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 3H3V6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M18 3H21V6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6 21H3V18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7 18V17C7 14.2386 9.23858 12 12 12V12C14.7614 12 17 14.2386 17 17V18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M18 21H21V18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                    <Profile/></Nav.Link>
                <Nav.Link className={"listGroup"} href="/protected"><svg width="24" stroke-width="1.5" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 6L20 6" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M3.80002 5.79999L4.60002 6.59998L6.60001 4.59999" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M3.80002 11.8L4.60002 12.6L6.60001 10.6" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M3.80002 17.8L4.60002 18.6L6.60001 16.6" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9 12L20 12" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9 18L20 18" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                     ЗАДАЧИ </Nav.Link>
                <Nav.Link onClick={logoutUser} className={"listGroup2"} eventKey="link-2"><svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12H19M19 12L16 15M19 12L16 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M19 6V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                    ВЫЙТИ </Nav.Link>

            </div>
        </Nav>

        // </div>
                    )
        }
        </div>
    )
};

export default LeftColumn;