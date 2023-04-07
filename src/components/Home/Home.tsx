import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { useNavigate } from "react-router-dom";
import classes from "./Home.module.css";


export const Home = (): ReactJSXElement => {
  const navigate = useNavigate();



  return (
    <>
    <h1>Hello</h1>
    <h2>So, you want to play a little game?</h2>
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
      
    <a href="/home/olga/Pulpit/My REPO/My_place/public/img/ OLGA_KACALA_CV_ENG.pdf" download="CV.pdf">
  Download CV
</a>

    
    </div>
    </>
  );
};
