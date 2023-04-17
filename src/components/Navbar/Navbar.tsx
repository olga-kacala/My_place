import { useNavigate } from "react-router-dom";
import classes from "./Navbar.module.css" ;

export const Navbar = (): JSX.Element => {

  const navigate = useNavigate();
  return (
    <div className={classes ["Nav"]}>
      <img className={classes ["NavPic"]}
      alt="Bill Murray" 
      src={"../img/billMurray.png"}
      onClick={()=> {
        navigate('/')
      }}/>
    </div>
  );
};
