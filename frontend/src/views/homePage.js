import logo from "../assets/imges/logoNecFooter.png";
import Img3 from "../assets/imges/imgHome3.svg";
import Img1 from "../assets/imges/imgHome1.svg";
import Img4 from "../assets/imges/imgHome4.svg";
import Img5 from "../assets/imges/imgHome5.svg";
import logoBlue from "../assets/imges/logoNec.png";

const Home = () => {
    return(
    <>
    <div className={"section"}>

        <div className={"authAnimated"}>
            <img className={"LogoHeader"} src={logo} style={{width: "400px"}}/>
            <div style={{zIndex: 10, paddingBottom: "70px"}}>
                <p style={{textAlign: "center", color: "rgba(255,255,255,0.85)", fontSize: "22px"}}>
                    Что такое личный кабинет?
                </p>
            </div>
        </div>
        <div className={"contentDivAut"}>
            <div style={{color: "#ffffff", marginLeft: "100px", display: "flex", marginBottom: "100px"}}>
                <div className={"cardsAuth"}
                     style={{marginRight: "30px", marginTop: "80px", backgroundColor: "rgba(4,149,253,0.85)"}}>
                    В личном кабинете вы сможете оперативно создавать и просматривать ваши задачи через сайт в режиме
                    круглосуточного доступа.<br/>

                    Не опираясь на режим работы нашего предприятия.
                </div>
                <div>
                    <img style={{width: "450px"}} src={Img3}/>

                </div>
            </div>
            <div style={{color: "#ffffff", marginLeft: "30px", display: "flex", marginBottom: "100px"}}>

                <div>
                    <img style={{width: "450px"}} src={Img1}/>

                </div>
                <div className={"cardsAuth"}
                     style={{marginTop: "55px", marginRight: "60px", backgroundColor: "rgba(4,149,253,0.85)"}}>
                    Упрощение общения и получения обратной связи для вас. <br/>
                    Не нужно назначать встречи и конференции для передачи информации, достаточно создать задачу или
                    комментарий и наш сотрудник оперативно получит сведения, после чего предоставит обратную связь.
                </div>
            </div>
            {/*<div style={{color: "#ffffff", marginLeft: "100px", display: "flex", marginBottom: "20px",}}>*/}
            {/*    <div className={"cardsAuthLine"} style={{marginRight: "100px"}}>*/}
            {/*        Создание новых задач.<br/> Мониторинг и изменение статусов и приоритетов в уже существующих задачах.<br/>*/}
            {/*        Возможность прикреплять дополнительные файлы к задачам и менять свои контакты самостоятельно.*/}

            {/*    </div>*/}
            {/*</div>*/}


            <div style={{color: "#ffffff", marginLeft: "100px", display: "flex", marginBottom: "100px"}}>
                <div className={"cardsAuth"}
                     style={{marginRight: "30px", marginTop: "80px", backgroundColor: "rgba(4,149,253,0.85)"}}>
                    Детальный контроль исполнения проекта, видимость сроков и трудозатрат. <br/>
                    Полное отражение наших корпоративных сведений по проекту для вас.
                </div>


                {/*<img style={{width: "400px"}} src={Img2}/>*/}

                <div>
                    <img style={{width: "450px"}} src={Img4}/>
                </div>
            </div>

            {/*<div style={{color: "#ffffff", marginLeft: "100px"}}>*/}
            <div className={"bifCardsAuth"}>
                <div style={{float: "left", width: "100%",}}>
                    Мы ставим приоритеты в виде четкого следования срокам и качества оказания услуг и теперь вы можете
                    убедиться в этом, полностью погружаясь в исполнение порученной задачи или проекта.<br/>
                    С помощью простого и удобного интерфейса личного кабинета, вы теперь можете быть в курсе всей
                    информации по текущим задачам и с легкостью ими управлять.<br/>

                </div>

            </div>
            <div style={{marginTop: "20px"}}>
                <img style={{width: "450px", marginLeft: "280px"}} src={Img5}/>

                <h3 style={{textAlign: "center", color: "#2d2a2a", fontSize: 40}}>
                    {/*С заботой о вашем бизнесе.<br/>*/}
                    {/*С заботой и уважением, компания «НЕКСОФТ»*/}
                    <img className={"logoBlue"} src={logoBlue}/>

                </h3>

            </div>
            {/*</div>*/}

        </div>

    </div>
</>
    )
}
export default Home