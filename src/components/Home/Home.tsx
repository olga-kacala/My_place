import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { useNavigate } from "react-router-dom";
import classes from "./Home.module.css";
import { Footer } from "../Footer/Footer";

export const Home = (): ReactJSXElement => {
  const navigate = useNavigate();

  return (
    <div className={classes['homeContainer']}>
      <div className={classes["inviteBox"]}>
        <h1>Hello</h1>
        <h2>So, you want to play a little game?</h2>
      </div>
      <div className={classes["imageContainer"]}>
        <img
          alt="Card back"
          src={"../img/cover.png"}
          onClick={() => navigate("/memory")}
        />
        <a href="https://github.com/olga-kacala">
          <img alt="GitHub" src={"../img/GitHub.png"} />
        </a>
        <a href="https://www.linkedin.com/in/olga-kacala/">
          <img alt="LinkedIn" src={"../img/LinkedIn.png"} />
        </a>
        <img
          alt="Snake"
          src={"../img/snake.png"}
          onClick={() => navigate("/snake")}
        />
      </div>
      <Footer />
    </div>
  );
};
