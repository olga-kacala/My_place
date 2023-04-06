import { useState } from "react";
import { SEGMENT_SIZE } from "../Draw/Draw";
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

interface UseGameLogicArgs {
  canvasWidth?: number,
  canvasHeight?: number,
}

export const useGameLogic = ({canvasWidth, canvasHeight}:UseGameLogicArgs) => {
  const [direction, setDirection] = useState<Direction | undefined>();
  const [snakeBody, setSnakeBody] = useState<Position[]>([
    {
      x: 0,
      y: 0,
    },
  ]);

const snakeHeadPosition = snakeBody[snakeBody.length - 1];
  const { moveDown, moveUp, moveLeft, moveRight } = createSnakeMovement();

  const onKeyDownHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
    switch (event.code) {
        case "KeyS":
        if(direction !== Direction.UP){
        setDirection(Direction.DOWN)};
        break;

      case "KeyW":
        if(direction !== Direction.DOWN){
        setDirection(Direction.UP)};
        break;

      case "KeyD":
        if(direction !== Direction.LEFT){
        setDirection(Direction.RIGHT)};
        break;

      case "KeyA":
        if(direction !== Direction.RIGHT){
        setDirection(Direction.LEFT)};
        break;
    }
    console.log(event.code);
  };

  const moveSnake = () => {
    let snakeBodyAfterMovement: Position[] | undefined;
    switch (direction) {
      case Direction.UP:
        if(snakeHeadPosition.y >0) {
        snakeBodyAfterMovement = moveUp(snakeBody)}
        else if (canvasWidth && snakeHeadPosition.x > canvasWidth/2) {
          setDirection(Direction.LEFT);
        } else {
          setDirection(Direction.RIGHT);
        };
        break;
      case Direction.DOWN:
        // console.log('SnakeHead', snakeHeadPosition.y);
        // console.log('Cnvas Height', canvasHeight);
        if(canvasHeight && snakeHeadPosition.y < canvasHeight - SEGMENT_SIZE ) {
          snakeBodyAfterMovement = moveDown(snakeBody)
        } else if (canvasWidth && snakeHeadPosition.x > canvasWidth/2){
          setDirection(Direction.LEFT)
        } else {
          setDirection(Direction.RIGHT)
        }
          
          
        break;
      case Direction.LEFT:
        if(snakeHeadPosition.x >0) {
        snakeBodyAfterMovement = moveLeft(snakeBody)}
        else if (canvasHeight && snakeHeadPosition.y < canvasHeight/2) {
          setDirection(Direction.DOWN)
        } else {
          setDirection(Direction.UP)
        };
        break;
      case Direction.RIGHT:
        if (canvasWidth && snakeHeadPosition.x < canvasWidth - SEGMENT_SIZE) {

        
        snakeBodyAfterMovement = moveRight(snakeBody)}
        else if (canvasHeight && snakeHeadPosition.y < canvasHeight/2) {
          setDirection(Direction.DOWN)
        } else {
          setDirection(Direction.UP)
        };
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
