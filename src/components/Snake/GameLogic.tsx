import { useState } from "react";
import { UseInterval } from "../Utils/UseInterval";

export interface Position {
  x: number;
  y: number;
}

export enum Direction {
  UP,
  DOWN,
  LEFT,
  RIGHT,
}
const movementSpeed = 100;

export const GameLogic = () => {
  const [direction, setDirection] = useState<Direction>();
  const [snakeBody, setSnakeBody] = useState<Position[]>([
    {
      x: 0,
      y: 0,
    },
  ]);

  const onKeyDownHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
    switch (event.code) {
      case "KeyS":
        setDirection(Direction.DOWN);
        break;

      case "KeyW":
        setDirection(Direction.UP);
        break;

      case "KeyD":
        setDirection(Direction.RIGHT);
        break;

      case "KeyA":
        setDirection(Direction.LEFT);
        break;
    }
    console.log(event.code);
  };

  const moveSnake = () => {};

  UseInterval(moveSnake, movementSpeed);

  return {
    snakeBody,
    onKeyDownHandler,
  };
};
