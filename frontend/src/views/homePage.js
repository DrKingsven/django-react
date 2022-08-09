import { useContext } from "react";
import UserInfo from "../components/UserInfo";
import AuthContext from "../context/AuthContext";
import ScrollingSlides from "../components/ScrollingSlides/ScrollingSlides";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    // <section>
    //   {user && <UserInfo user={user} />}
    //   <h1>Добро пожаловать в ваш личный кабинет!</h1>
    // </section>
      <ScrollingSlides/>
  );
};

export default Home;
