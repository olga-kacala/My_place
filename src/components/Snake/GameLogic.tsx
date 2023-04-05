import { useState } from "react";
import { UseInterval } from "../Utils/UseInterval";
import { createSnakeMovement } from "./Movement";

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

export const useGameLogic = () => {
  const [direction, setDirection] = useState<Direction>();
  const [snakeBody, setSnakeBody] = useState<Position[]>([
    {
      x: 0,
      y: 0,
    },
  ]);

  const { moveDown, moveUp, moveLeft, moveRight } = createSnakeMovement();

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

  const moveSnake = () => {
    let snakeBodyAfterMovement: Position[] | undefined;
    switch (direction) {
      case Direction.UP:
        snakeBodyAfterMovement = moveUp(snakeBody);
        break;
      case Direction.DOWN:
        snakeBodyAfterMovement = moveDown(snakeBody);
        break;
      case Direction.LEFT:
        snakeBodyAfterMovement = moveLeft(snakeBody);
        break;
      case Direction.RIGHT:
        snakeBodyAfterMovement = moveRight(snakeBody);
        break;
    }
    if (snakeBodyAfterMovement) {
    setSnakeBody(snakeBodyAfterMovement)};
  };

  UseInterval(moveSnake, movementSpeed);

  return {
    snakeBody,
    onKeyDownHandler,
  };
};
