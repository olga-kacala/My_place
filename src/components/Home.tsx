import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { useNavigate } from "react-router-dom";

export const Home = (): ReactJSXElement => {
    const navigate = useNavigate();
    
    return (
<div>
   
<img
          alt="Card back"
          src={"/img/cover.png"}
          onClick={()=> navigate('/memory')}
        />  
        
</div>
    )
}