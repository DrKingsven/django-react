import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import React from "react";
import "./NaviBlock.css"
import {Button, Nav} from "react-bootstrap";
import {Navbar} from "react-bootstrap";
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
                        <Navbar.Brand href="/" className={"navbarBrand"}><img className={"navbarBrandLogo"} src={logo}/></Navbar.Brand>
                        <Nav.Link href="/protected" className={"navLink"}>ЗАДАЧИ</Nav.Link>
                        <Nav.Link className={"navLink"}><Profile/></Nav.Link>

                        <Nav.Link className={"navLink"} onClick={logoutUser}>ВЫЙТИ</Nav.Link>
                    </Nav>
            </>
          ) : (
            <>
                    <Nav>
                        <Navbar.Brand href="/" className={"navbarBrand"}><img style={{width: "150px"}} src={logo}/></Navbar.Brand>
                        <Nav.Link href="/login" className={"navbarBrand"}>Войти</Nav.Link>
                        <Nav.Link  href="/register" className={"navbarBrand"}>Регистрация</Nav.Link>
                    </Nav>
            </>
                )}
                      </Nav>
              </Navbar>
          </div>
  );}
export default NaviBlock