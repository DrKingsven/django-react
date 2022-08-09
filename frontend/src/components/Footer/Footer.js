import React from "react";
// import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
// import NecSoftLogo from "../../assets/imges/logoNec.png"
import "./Footer.css"
import logoFooter from "../../assets/imges/logoNecFooter.png"
import logoMin from "../../assets/imges/1cLogo.gif"
const Footer = () => {
    return (
        <div className={"footer"}>
           <div className={"box"}>
            <div className={"list"}>
            <img className={"logo1"} src={logoFooter}/>
                <img className={"logo2"} src={logoMin}/>
                <p style={{float: "left", marginTop: "5px"}}>Официальный<br/>
                    статус партнера</p>
            </div>
            <div>
            <ul className={"list"}>
                <li>Симферополь</li>
                    <li>ул. Гагарина, 14а, корп.«В», оф. 232</li>
                <li>+7 978 777 20 43<br/>
                    +7 3652 77 73 55<br/>
                    E-mail: sale@necsoft.ru</li>
            </ul>
            </div>

            <div>
            <ul className={"list"}>
                <li>Краснодар
                </li>
                <li>+7 (861) 217 76 90<br/>
                    E-mail: sale@necsoft.ru</li>
            </ul>
                <ul className={"list"}>
                <li>Севастополь</li>
                <li>+7 (978) 727 74 24<br/>
                    E-mail: sale@necsoft.ru</li>
            </ul>
            </div>
           </div>
        </div>


    );
}

export default Footer;
