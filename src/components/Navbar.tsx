import { Link } from "react-router-dom";
import classes from "./Navbar.module.css" ;


export const Navbar = (): JSX.Element => {
  return (
    <div className={classes ["Nav"]}>
      <Link to='/'>Home</Link>
      <div>
      <Link to='memory'>Memory</Link>
        </div>
    <div><Link to='snake'>Snake</Link></div>
    </div>
  );
};
