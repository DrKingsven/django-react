import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";
import axios from "axios";
import dayjs from "dayjs";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import React from "@types/react";


const AuthContext = createContext();

export default AuthContext;


// localStorage.clear("person");


export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );

  const [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwt_decode(localStorage.getItem("authTokens"))
      : null
  );


  // console.log(user)
  const [loading, setLoading] = useState(true);

  const history = useHistory();

  const loginUser = async (username, password) => {
    const response = await fetch("http://127.0.0.1:8000/api/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    });
    const data = await response.json();

    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwt_decode(data.access));

      localStorage.setItem("authTokens", JSON.stringify(data))
      personsData()


      history.push("/");
      // if (!person){
      //
      // }

    } else {
      alert("Something went wrong!");
    }
  };



  const registerUser = async (username, author) => {
    const response = await fetch("http://127.0.0.1:8000/api/v1/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "user" : username,
        "login": author,
        // password,
        // password2
      })
    });
    if (response.status === 201) {
      history.push("/login");
    } else {
      alert("Something went wrong!");
    }
  };


  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    localStorage.clear();

    history.push("/");
  };


  const baseURL = "http://127.0.0.1:8000/api";
  const userClients = () => {

    const axiosInstance = axios.create({
      baseURL,
      headers: { Authorization: `Bearer ${authTokens?.access}` }
    });

    axiosInstance.interceptors.request.use(async req => {
      const user = jwt_decode(authTokens.access);
      const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

      if (!isExpired) return req;

      const response = await axios.post(`${baseURL}/token/refresh/`, {
        refresh: authTokens.refresh


      });


      localStorage.setItem("authTokens", JSON.stringify(response.data));

      setAuthTokens(response.data);
      setUser(jwt_decode(response.data.access));

      req.headers.Authorization = `Bearer ${response.data.access}`;
      return req;
    });

    return axiosInstance;
  };







  const personsData = () => {
    const api = userClients()
    // localStorage.getItem("persons") ?
    //     (localStorage.setItem("persons", localStorage.getItem("persons"))) :
        api.get(`v1/user/`)
            .then(res => {
                  let personsData = res.data.user.refClient;
                  // console.log(personsData)
                  let author = res.data.user.author
                  localStorage.setItem("author", author)
                  localStorage.setItem("persons", JSON.stringify(personsData))

                }
            )
  }


    // const persons = localStorage.getItem("persons")
    const author = localStorage.getItem("author")


  const contextData = {
    author,
    // persons,
    // person,
    user,
    setUser,
    authTokens,
    setAuthTokens,
    personsData,
    registerUser,
    loginUser,
    logoutUser
  };




      useEffect(() => {
    if (authTokens) {
      setUser(jwt_decode(authTokens.access));
      personsData()


      // if (persons[0] == undefined) {
      // }
    }
    setLoading(false);
  }, [authTokens, loading]);

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
