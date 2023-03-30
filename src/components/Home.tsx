import { ReactJSXElement } from "@emotion/react/types/jsx-namespace"
import { Memory } from "./Memory";
import {Snake} from "./Snake";


export const Home = (): ReactJSXElement => {
    return (
<div>
    <h1>hello</h1>
    <Memory/>
    <Snake/> 
</div>
    )
}