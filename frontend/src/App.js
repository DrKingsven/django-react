import React, {Profiler} from "react";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from "./components/Footer/Footer";
import NaviBlock from "./components/NaviBlock/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import AuthContext, { AuthProvider } from "./context/AuthContext";
import Home from "./views/startPage";
import Login from "./views/loginPage";
import Register from "./views/registerPage";
import ProtectedPage from "./views/ProtectedPage";
import Tasks from "./views/Tasks";
import LeftColumn from "./components/leftColumn/leftColumn";
import "./App.css"
import {useContext} from "react";
import TasksCompleted from "./views/TasksCompleted";
import TasksProgress from "./views/TasksProgress";
import HomePage from "./views/startPage";
import Start from "./views/startPage";
import startPage from "./views/startPage";
import homePage from "./views/homePage";
function App() {

  return (
    <Router>

      <div className={"App"}>

        <AuthProvider>

          <NaviBlock />
          <div className={"contet"}>

              <LeftColumn/>
           <Switch className="contet">

                <PrivateRoute component={ProtectedPage} path="/protected" />
                  <Route component={Tasks} path="/tasks" />
               <Route component={TasksCompleted} path="/tasksCompleted" />
               <Route component={TasksProgress} path="/tasksProgress" />
               <Route component={homePage} path="/home" />


               <Route component={startPage} path="/" exact/>

               <Route component={Login} path="/login" />
                  <Route component={Register} path="/register" />
           </Switch>
         </div>
         </AuthProvider>
         <Footer />
       </div>
     </Router>
  );
}

export default App;
