import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import React, {useEffect} from "react";
import "./NaviBlock.css"
import {Button, Nav} from "react-bootstrap";
import {Navbar} from "react-bootstrap";
import {Container} from "react-bootstrap";
import logo from "../../assets/imges/logoNec.png"
import Profile from "../Profile/Profile";
const NaviBlock = () => {
  const { user, logoutUser } = useContext(AuthContext);

  return (
          <div className={"header"}>

              <Navbar className={"navBar"}  variant="light">

                      <Nav className="me-auto">


                {user ? (
            <>
                    <Nav>
                        <Navbar.Brand href="/" style={{color: "black"}}><img style={{width: "150px"}} src={logo}/></Navbar.Brand>
                        <Nav.Link href="/protected"style={{color: "#2f2f2f", marginTop: "10px", fontWeight: "bold"}}>ЗАДАЧИ</Nav.Link>
                        <Nav.Link style={{color: "#2f2f2f", marginTop: "10px", fontWeight: "bold"}}><Profile/></Nav.Link>

                        <Nav.Link style={{marginLeft: "500px", marginTop: "10px", fontWeight: "bold",}} onClick={logoutUser}>ВЫЙТИ</Nav.Link>
                    </Nav>
            </>
          ) : (
            <>
                    <Nav>
                        <Navbar.Brand href="/" style={{color: "black"}}><img style={{width: "150px"}} src={logo}/></Navbar.Brand>
                        <Nav.Link href="/login" style={{color: "black"}}>Войти</Nav.Link>
                        <Nav.Link  href="/register">Регистрация</Nav.Link>
                    </Nav>
            </>
                )}
                      </Nav>
              </Navbar>
          </div>
  );}
export default NaviBlock