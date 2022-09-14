import React from "react";
import {Button, Form, Carousel, Container, Navbar} from "react-bootstrap";
import "./animation.css"
import "./autHome.css"
import Img1 from "../../assets/imges/imgHome1.svg"
import Img3 from "../../assets/imges/imgHome3.svg"
import Img4 from "../../assets/imges/imgHome4.svg"
import Img5 from "../../assets/imges/imgHome5.svg"
import logoBlue from "../../assets/imges/logoNec.png"
import ImgBac from "../../assets/imges/circle-blob-7.svg"




import logo from '../../assets/imges/logoNecFooter.png'
import EntryForm from "../EntryForm/EntryForm";
import Footer from "../Footer/Footer";
import {Link} from "react-router-dom";
import {useContext} from "react";
import AuthContext from "../../context/AuthContext";
import ExampleComment from "../TaskList/exampleComment/Example";


function ScrollingSlides() {
    const { user, logoutUser } = useContext(AuthContext);

    return (


        <>
            {user ? (
                <>
                    <div style={{width: "1000px"}}>
                <ExampleComment/>
                    </div>
                    </>


            ):(
                <>
                <div className={"context"}>
                    <img className={"logo"}src={logo}/>
                 <h1 className={"context h1" }>Добро пожаловать в личный кабинет</h1>
            <Link to="/login">
            <Button type="button" style={{backgroundColor: "rgba(204,204,204,0)" ,color: "wheat"}} className={"button"}>Начать работу</Button>
            </Link>

            <div className="area">
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>

            </div>

                </div>
                </>

            )
            }
</>



    );

}

export default ScrollingSlides;