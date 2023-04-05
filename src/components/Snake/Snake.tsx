import React, { useRef } from "react";
import { Canvas } from "../Canvas/Canvas";
import classes from "./Snake.module.css";
import { useGameLogic } from "./GameLogic";
import { draw } from "../Draw/Draw";

interface GameProps {}

export const Snake: React.FC<GameProps> = ({}) => {
  const canvaRef = useRef<HTMLCanvasElement>(null);
  const { snakeBody, onKeyDownHandler } = useGameLogic();
  const drawGame = (ctx: CanvasRenderingContext2D) => {
    draw({ ctx, snakeBody });
  };
  return (
    <div>
      <h1>Snake it</h1>
      <div
        className={classes["Snake"]}
        onKeyDown={onKeyDownHandler}
        tabIndex={0}
      >
        <Canvas ref={canvaRef} draw={drawGame} />
      </div>
    </div>
  );
};
