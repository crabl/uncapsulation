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


function options2(world: World) {
  const height = 30;
  const width = 30;

  return {
    position: {
      x: world.cursor.x - (height / 2),
      y: world.cursor.y - (height / 2)
    },
    height,
    width,
    color: 'purple'
  };
}

when(page, containsCursor, drawBox, options2);

// function removeBoxes() {
//   const boxes = document.querySelectorAll('.box');
//   if (boxes.length) {
//     for (let box of boxes) {
//       document.body.removeChild(box);
//     }
//   }
// }

// when(page, not(containsCursor), removeBoxes);

run();