import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { useNavigate } from "react-router-dom";
import classes from "./Home.module.css";

export const Home = (): ReactJSXElement => {
  const navigate = useNavigate();

  return (
    <>
      <div className={classes["inviteBox"]}>
        <h1 className={classes["title"]}>Hello</h1>
        <h2>So, you want to play a little game?</h2>
      </div>
      <div className={classes["Home"]}>
        <img
          alt="Card back"
          src={"/img/cover.png"}
          onClick={() => navigate("/memory")}
        />
        <a href="https://github.com/olga-kacala">
          <img alt="GitHub" src={"/img/GitHub.png"} />
        </a>
        <img
          alt="Snake"
          src={"/img/snake.png"}
          onClick={() => navigate("/snake")}
        />
        <a href="https://www.linkedin.com/in/olga-kacala/">
          <img alt="LinkedIn" src={"img/LinkedIn.png"} />
        </a>
        <a
          href="/home/olga/Pulpit/My REPO/My_place/public/img/ OLGA_KACALA_CV_ENG.pdf"
          download="CV.pdf"
        >
          Download CV
        </a>
      </div>
    </>
  );
};
