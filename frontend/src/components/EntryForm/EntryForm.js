import React from "react";
import {Button, Container, Form} from "react-bootstrap";
import "./EntryForm.css";
import {useContext} from "react";
import AuthContext from "../../context/AuthContext";
import {useForm} from "react-hook-form";
import logo from "../../assets/imges/logoNecFooter.png";
import {Link} from "react-router-dom";
import backdrop from "bootstrap/js/src/util/backdrop";
// import data from "bootstrap/js/src/dom/data";





export const  EntryForm = () => {

    const { loginUser } = useContext(AuthContext);

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
                const password = data.password;
                username.length > 0 && loginUser(username, password);



            // alert(JSON.stringify(data));
            // reset();
        }

    return (
        <div className={"context" }>
            {/*<Container className={"container-my "}>*/}
            <form className={"form"} onSubmit={handleSubmit(onSubmit)}>
                <div style={{justifyContent: "center", textAlign :"center"}}>
                <h2 className={"h2"}>Войти:</h2>

                <label style={{textAlign: "left", color: "#2a2929"}}>
                    Номер телефона:
                    <input style={{width: "400px"}}
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

                    <label style={{textAlign: "left", color: "#2a2929"}}>
                        Пароль:
                        <input style={{width: "400px"}} type={"password"}
                               {...register('password', {
                                   required: "⛔️Поле обязательно к заполнению",

                                   minLength: {
                                       value: 6,
                                       message: '⛔️Пароль должен быть 6 символов'
                                   },
                                   maxLength: {
                                       value: 6,
                                       message: '⛔️Пароль должен быть 6 символов'
                                   }
                               })}
                        />
                    </label>
                    <div>
                        {errors?.password && <p className={"p"}>{errors?.password?.message || "Error!"}</p>}
                    </div>
                    {/*<div style={{justifyContent: "center"}}>*/}
                        <button className={"buttonFormAut"}  type="submit">Войти</button>

                         <Button className={"buttonFormReg"} href={"/register"} variant="primary" type="submit">
                             Получить пароль
                         </Button >
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

    )

}

export default EntryForm;