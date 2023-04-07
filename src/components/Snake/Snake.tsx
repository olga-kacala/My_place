import React, { useRef, useState } from "react";
import { Canvas } from "../Canvas/Canvas";
import classes from "./Snake.module.css";
import { useGameLogic } from "./GameLogic";
import { draw } from "../Draw/Draw";

interface GameProps {}

export enum GameState {
  RUNNING,
  GAME_OVER,
  PAUSE,
}


export const Snake: React.FC<GameProps> = ({}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameState, setGameState] = useState<GameState>(GameState.RUNNING);

  const onGameOver = () => setGameState(GameState.GAME_OVER);

  const { snakeBody, onKeyDownHandler, foodPosition, resetGameState} = useGameLogic({
    canvasHeight: canvasRef.current?.height,
    canvasWidth: canvasRef.current?.width,
    onGameOver,
    gameState,
  });
  const drawGame = (ctx: CanvasRenderingContext2D) => {
    draw({ ctx, snakeBody, foodPosition});
  };
  return (
    <div>
      <h1>Snake it</h1>
      <div
        className={classes["Snake"]}
        onKeyDown={onKeyDownHandler}
        tabIndex={0}
      >
        <Canvas ref={canvasRef} draw={drawGame} />
        {gameState === GameState.GAME_OVER ? (
          <button onClick={() => {
            setGameState(GameState.RUNNING);
            resetGameState();
          }}>Play Again</button>
        ) : <button onClick={()=> {
          setGameState(gameState === GameState.RUNNING ? GameState.PAUSE : GameState.RUNNING)
        }}>{gameState === GameState.RUNNING ? 'Pause' : 'Play'} </button>} 
      </div>
    </div>
  );
};
