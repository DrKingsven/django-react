import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import {Button, Container, Form} from "react-bootstrap";
import React from "react";
import {useForm} from "react-hook-form";
import "../components/EntryForm/EntryForm.css"

function Register() {
  // const [username, setUsername] = useState("");
  //
  const { registerUser } = useContext(AuthContext);
  //
  // const handleSubmit = async e => {
  //   e.preventDefault();
  //   registerUser(username);
  // };

  const {
    register,
    formState: {
      errors
    },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur"
  });

  const onSubmit = (data) => {
    // const handleSubmit = e => {
    // data.preventDefault();
    const username = data.username;
    const author = data.author;

    registerUser(username, author);
    // username.length > 0 && loginUser(username, password);
    // alert(JSON.stringify(data));
    // reset();
  }

  return (
      <div className={"context"} style={{backgroundColor: "#eeeaea"}}>
        <form className={"form"} onSubmit={handleSubmit(onSubmit)}>
          <div style={{justifyContent: "center", textAlign :"center"}}>
            <h2 className={"h2"}>Войти:</h2>

            <label style={{textAlign: "left", color: "#2a2929"}}>
              ФИО(логин):
              <input style={{width: "400px", position: "static"}}
                     {...register('author', {
                       required: '⛔️Поле обязательно к заполнению',

                       pattern: {
                         value: /^([А-ЯA-Z]|[А-ЯA-Z][\x27а-яa-z]{1,}|[А-ЯA-Z][\x27а-яa-z]{1,}\-([А-ЯA-Z][\x27а-яa-z]{1,}|(оглы)|(кызы)))\040[А-ЯA-Z][\x27а-яa-z]{1,}(\040[А-ЯA-Z][\x27а-яa-z]{1,})?$/,
                         message: "Введите полное ФИО"

                       },
                       maxLength: {
                         value: 100,
                         message: '⛔️Введите номер в формате X XXX XXX XX XX'
                       }
                     })}
              />
            </label>
            <label style={{textAlign: "left", color: "#2a2929"}}>
              Номер телефона:
              <input style={{width: "400px", position: "static"}}
                     {...register('username', {
                       required: '⛔️Поле обязательно к заполнению',
                       minLength: {
                         value: 11,
                         message: '⛔️Введите номер в формате X XXX XXX XX XX'
                       },

                       maxLength: {
                         value: 11,
                         message: '⛔️Введите номер в формате X XXX XXX XX XX'
                       }
                     })}
              />
            </label>

            <div>
              {errors?.username && <p className={"p"}>{errors?.username?.message || "Error!"}</p>}
            </div>




            {/*<div style={{justifyContent: "center"}}>*/}
            <button  className={"buttonFormReg"}  type="submit">Получить пароль по SMS</button>
            <div style={{width: "80%", justifyContent: "center", marginLeft: "15%", marginTop: "10%"}}>
              <p style={{ textAlign: "left"}}>
                В случае если вы не являетесь клиентом ООО "НЕКСОФТ" ваша заявка будет отклонена
              </p>
            </div>

          </div>
        </form>
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
      // <form onSubmit={handleSubmit}>
      //   <div>
      //     <label htmlFor="username">Username</label>
      //     <input
      //       type="text"
      //       id="username"
      //       onChange={e => setUsername(e.target.value)}
      //       placeholder="Username"
      //       required
      //     /></div>
      //
      //   <button>Register</button>
      // </form>
  );
}

export default Register;
