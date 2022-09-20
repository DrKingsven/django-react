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
            <img className={"LogoHeader"} src={logo}/>
            <div className={"divHomeAuth"}>
                <p className={"pHead"}>
                    Что такое личный кабинет?
                </p>
            </div>
        </div>
        <div className={"contentDivAut"}>
            <div className={"card1"}>
                <div className={"bodyTextCard1"}>
                    В личном кабинете вы сможете оперативно создавать и просматривать ваши задачи через сайт в режиме
                    круглосуточного доступа.<br/>
                    Не опираясь на режим работы нашего предприятия.
                </div>
                <div>
                    <img className={"img3"}  src={Img3}/>
                </div>
            </div>
            <div className={"card2"}>

                <div>
                    <img className={"img1"} src={Img1}/>

                </div>
                <div className={"bodyTextCard2"}>
                    Упрощение общения и получения обратной связи для вас. <br/>
                    Не нужно назначать встречи и конференции для передачи информации, достаточно создать задачу или
                    комментарий и наш сотрудник оперативно получит сведения, после чего предоставит обратную связь.
                </div>
            </div>
            <div className={"card3"} >
                <div className={"bodyTextCard3"}>
                    Детальный контроль исполнения проекта, видимость сроков и трудозатрат. <br/>
                    Полное отражение наших корпоративных сведений по проекту для вас.
                </div>
                <div>
                    <img className={"img4"} src={Img4}/>
                </div>
            </div>
            <div className={"bifCardsAuth"}>
                <div className={"bodyTextCard4"}>
                    Мы ставим приоритеты в виде четкого следования срокам и качества оказания услуг и теперь вы можете
                    убедиться в этом, полностью погружаясь в исполнение порученной задачи или проекта.<br/>
                    С помощью простого и удобного интерфейса личного кабинета, вы теперь можете быть в курсе всей
                    информации по текущим задачам и с легкостью ими управлять.<br/>
                </div>
            </div>
            <div className={"bifCardsAuthFooter"}>
                <img className={"img5"} src={Img5}/>
                <h3 className={"h1LogoFooter"}>
                    {/*С заботой о вашем бизнесе.<br/>*/}
                    {/*С заботой и уважением, компания «НЕКСОФТ»*/}
                    <img className={"logoBlue"} src={logoBlue}/>
                </h3>
            </div>
        </div>
    </div>
</>
    )
}
export default Home