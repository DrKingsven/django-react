import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import React, {useEffect} from "react";
import "./NaviBlock.css"
import {Nav} from "react-bootstrap";
import {Navbar} from "react-bootstrap";
import {Container} from "react-bootstrap";
import logo from "../../assets/imges/logoNec.png"
const NaviBlock = () => {
  const { user, logoutUser } = useContext(AuthContext);
  return (
      // useEffect(() => {
      //         CustomersService.getToken().then(result => {
      //             // console.log(result)
      //             const access = result.access
      //             const refresh = result.refresh // console.log(access, 'access')
      //             // console.log(refresh, 'refresh')
      //             CustomersService.getCustomers(access).then(result =>
      //                 console.log(result))
      //         })
      //     }, []
      // )
      //

          <div className={"header"}>
              <Navbar className={"navBar"}  variant="light">
                      <Nav className="me-auto">
                {user ? (
            <>
                    <Nav>
                        <Navbar.Brand href="/home" style={{color: "black"}}><img style={{width: "150px"}} src={logo}/></Navbar.Brand>
                        <Nav.Link href="/protected"style={{color: "black"}}>ЗАДАЧИ</Nav.Link>
                <Nav.Link href="/profile">ПРОФИЛЬ</Nav.Link>
                <Nav.Link onClick={logoutUser}>ВЫЙТИ</Nav.Link>
                    </Nav>

                {/*<Link to="#features"style={{color: "black"}}>ОТЧЕТЫ</Link>*/}
                    {/*<Link to="#pricing"style={{color: "black"}}>ДОКУМЕНТЫ</Link>*/}

            </>
          ) : (
            <>
                    <Nav>
                        <Navbar.Brand href="/" style={{color: "black"}}><img style={{width: "150px"}} src={logo}/></Navbar.Brand>

                        <Nav.Link href="/login" style={{color: "black"}}>Войти</Nav.Link>
                            <Nav.Link  href="/register">Регистрация</Nav.Link>
                    </Nav>
            </>)
                }
                      </Nav>
              </Navbar>
          </div>
  );}
export default NaviBlock