import React, {} from "react";
// import {NaviBlock} from "../../components/NaviBlock/NaviBlock";
// import LeftColumn from "../../components/leftColumn/leftColumn";
// import CardExample from "../../components/leftColumn/leftColumn";
// import SideNav from "../../components/SideNav/SideNav";
import Footer from "../components/Footer/Footer";
import NaviBlock from "../components/NaviBlock/Navbar";
import LeftColumn from "../components/leftColumn/leftColumn";
import TaskList from "../components/TaskList/TaskList";
import NewTask from "../components/TaskList/NewTask/NewTask";




const Tasks = () => {

    return (<div className={"App"}>
        <div className={"contet"}>
            <TaskList/>

        </div>
    </div>);
};


export default (Tasks);