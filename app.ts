import { containsCursor } from './cursor';
import { when } from './when';
import { World, run } from './world';
import { drawBox } from './drawing';
import { not } from './logic';

const page: HTMLDivElement = document.querySelector('.page');

function options(world: World) {
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

when(page, containsCursor, drawBox, options);

function removeBox() {
  const box = document.querySelector('.box');
  if (box) {
    document.body.removeChild(box);
  }
}

when(page, not(containsCursor), removeBox);

run();