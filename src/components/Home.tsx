import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { useNavigate } from "react-router-dom";
import classes from "./Home.module.css";


export const Home = (): ReactJSXElement => {
  const navigate = useNavigate();



  return (
    <div className={classes ["Home"]}>
        <div><img
        alt="Card back"
        src={"/img/cover.png"}
        onClick={() => navigate("/memory")}
      /></div>
      <div>  
        <img
        alt="Snake"
        src={"/img/snake.png"}
        onClick={() => navigate("/snake")}
      /></div>
      
    <a href="/img/OLGA_KACALA_CV_ENG.pdf" download="O_Kacala_CV.pdf">
  Download CV
</a>

    
    </div>
  );
};
