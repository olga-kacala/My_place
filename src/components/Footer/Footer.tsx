import classes from "./Footer.module.css";

export const Footer = ()=> {

    return (
        <div className={classes ["footer"]}>
        <a href="/img/OLGA_KACALA_CV_ENG.pdf" download="CV.pdf">
        <button> Download my CV</button>
      </a>  
      </div>
    )
    }