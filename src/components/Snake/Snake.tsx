import React, { useRef } from 'react';
import { Canvas } from '../Canvas/Canvas';
import classes from './Snake.module.css';

interface GameProps{}

export const Snake: React.FC<GameProps> = ({}) => {

  const canvaRef = useRef<HTMLCanvasElement>(null);
  
  const draw = (ctx: CanvasRenderingContext2D) => {

  }
  return (
    <div>
    <h1>Snake it</h1>
    <div className={classes ['Snake']}>
   
    <Canvas
    ref={canvaRef}
    draw={draw}/>
    </div>
    </div>
  );
}
