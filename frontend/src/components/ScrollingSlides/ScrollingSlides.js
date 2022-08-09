import React from "react";
import {Button, Carousel, Container, Navbar} from "react-bootstrap";
import "./animation.css"

import Slide3 from "../../assets/imges/slide1.jpg"

import Slide1 from "../../assets/imges/slide3.jpg"
import Slide2 from "../../assets/imges/slide2.jpg"
import Romb from "../../assets/imges/sicstPaper.png"
import Romb1 from "../../assets/imges/sicstPaper1.png"
import logo from '../../assets/imges/logoNecFooter.png'
import TaskListImg from "../../assets/imges/taskList.png"
import EntryForm from "../EntryForm/EntryForm";
import Footer from "../Footer/Footer";
import {Link} from "react-router-dom";


function ScrollingSlides() {
    return (

        <div className={"context" }>
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


    );

}

export default ScrollingSlides;