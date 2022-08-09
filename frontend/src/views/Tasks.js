import React, {} from "react";
// import {NaviBlock} from "../../components/NaviBlock/NaviBlock";
// import LeftColumn from "../../components/leftColumn/leftColumn";
// import CardExample from "../../components/leftColumn/leftColumn";
// import SideNav from "../../components/SideNav/SideNav";
import Footer from "../components/Footer/Footer";
import NaviBlock from "../components/NaviBlock/Navbar";
import LeftColumn from "../components/leftColumn/leftColumn";
import TaskList from "../components/TaskList/TaskList";




const Tasks = (props) => {

    return (<div className={"App"}>
        <div className={"contet"}>
            <LeftColumn/>
            <TaskList/>

        </div>
        <Footer/>
    </div>);
};


export default (Tasks);