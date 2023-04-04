import React from 'react';
import classes from "./Canvas.module.css";

type CanvasProps= React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement> & {
    draw: (context: CanvasRenderingContext2D) => void;
}

export const Canvas: React.FC<CanvasProps> = ({draw, ...props}) => {
    return (
        <div className={classes ['Canvas']}>

        </div>
    )
}