import { Link } from "react-router-dom";
import classes from "./Navbar.module.css" ;


export const Navbar = (): JSX.Element => {
  return (
    <div className={classes ["Nav"]}>
      <Link to='/'>Home</Link>
    </div>
  );
};
