import { Position } from "./GameLogic";

export const createSnakeMovement = (gridSize = 5) => ({
  moveRight: (snakeBody: Position[]) => {
    const bodyCopy = [...snakeBody];
    const headPos = bodyCopy[bodyCopy.length -1];
    bodyCopy.shift();
    return [...bodyCopy, {...headPos, x: headPos.x + gridSize}];
  },
  moveLeft: (snakeBody: Position[]) => {
    const bodyCopy = [...snakeBody];
    const headPos = bodyCopy[bodyCopy.length -1];
    bodyCopy.shift();
    return [...bodyCopy, {...headPos, x: headPos.x - gridSize}];
  },
  moveUp: (snakeBody: Position[]) => {
    const bodyCopy = [...snakeBody];
    const headPos = bodyCopy[bodyCopy.length -1];
    bodyCopy.shift();
    return [...bodyCopy, {...headPos, y: headPos.y - gridSize}];
  },
  moveDown: (snakeBody: Position[]) => {
    const bodyCopy = [...snakeBody];
    const headPos = bodyCopy[bodyCopy.length -1];
    bodyCopy.shift();
    return [...bodyCopy, {...headPos, y: headPos.y + gridSize}];
  },
});
