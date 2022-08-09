import React, {Profiler} from "react";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from "./components/Footer/Footer";
import NaviBlock from "./components/NaviBlock/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import Home from "./views/homePage";
import Login from "./views/loginPage";
import Register from "./views/registerPage";
import ProtectedPage from "./views/ProtectedPage";
import Tasks from "./views/Tasks";
import LeftColumn from "./components/leftColumn/leftColumn";
import "./App.css"
import ProfilePage from "./views/profilePage";
function App() {
  return (
    <Router>
      <div className={"App"}>
        <AuthProvider>
          <NaviBlock />
          <div className={"contet"}>
            {/*<LeftColumn/>*/}

            <Switch className="contet">
            <Route component={Home} path="/" exact/>
              <PrivateRoute component={ProtectedPage} path="/protected" />
              <Route component={Tasks} path="/home" />
              <Route component={ProfilePage} path="/profile"/>
            <Route component={Login} path="/login" />
            <Route component={Register} path="/register" />
            {/*<Route component={Home} path="/" />*/}
            <Route component={ProfilePage} path="/profile"/>

            <Route component={Tasks} path="/tasks" />
          </Switch>
        </div>
        </AuthProvider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
