import { containsCursor } from './cursor';
import { when } from './when';
import { World, run } from './world';
import { drawBoxAt } from './drawing';

const page: HTMLDivElement = document.querySelector('.page');

function withOptions(world: World) {
  const height = 20;
  const width = 20;

  return {
    position: {
      x: world.cursor.x - (height / 2),
      y: world.cursor.y - (height / 2)
    },
    height,
    width,
    color: 'blue'
  };
}

when(page, containsCursor, drawBoxAt, withOptions);

run();