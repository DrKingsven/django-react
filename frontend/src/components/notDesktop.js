import React from "react";
import "./notDesktop.css"
import img10 from "../assets/imges/img10.svg"
import ImgLogo from "../assets/imges/logoNec.png"
import logo from "../assets/imges/logoNecFooter.png";
const NotPageDesktop = () => {
    return (
        <div className={"all"}>
            <img className={"ImgLogoNotDesktop"} src={ImgLogo}/>
            <h1 className={"h1NotDesktop"}>
            В настоящий момент мобильная версия сервиса находится в разработке.<br/><br/>

                Пожалуйста, откройте сервис с компьютера.</h1>
            <img className={"imgNotDesktop"} src={img10}/>
        </div>
    );
};

export default NotPageDesktop;
