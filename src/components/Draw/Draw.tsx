import { Position } from "../Snake/GameLogic";

interface DrawArgs {
  ctx: CanvasRenderingContext2D;
  snakeBody: Position[];
}

const SEGMENT_SIZE = 5;

export const draw = ({ ctx, snakeBody }: DrawArgs) => {
  ctx.fillStyle = 'red';
  snakeBody.forEach((segment) =>
    ctx.fillRect(segment.x, segment.y, SEGMENT_SIZE, SEGMENT_SIZE)
  );
};
