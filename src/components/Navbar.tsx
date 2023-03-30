import {Link} from "react-router-dom";
import classes from "./Navbar.modules.css";

export const Navbar = (): JSX.Element => {

    return (
<div>
    <Link to='Memory'>Memory</Link>
    <Link to='Snake'>Snake</Link>
</div>

    )
};