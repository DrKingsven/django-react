import React, {} from "react";
// import {NaviBlock} from "../../components/NaviBlock/NaviBlock";
// import LeftColumn from "../../components/leftColumn/leftColumn";
// import CardExample from "../../components/leftColumn/leftColumn";
// import SideNav from "../../components/SideNav/SideNav";
import Footer from "../components/Footer/Footer";
import NaviBlock from "../components/NaviBlock/Navbar";
import LeftColumn from "../components/leftColumn/leftColumn";
import TaskList from "../components/TaskList/TaskList";
import TaskListCompleted from "../components/TaskList/TaskListCompleted";




const TasksCompleted = () => {

    return (<div className={"App"}>
        <div className={"contet"}>
            <TaskListCompleted/>
        </div>
    </div>);
};


export default (TasksCompleted);