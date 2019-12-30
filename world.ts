import { _getWhens } from './when';
import { cursor$ } from './cursor';

export interface World {
  cursor: { x: number, y: number } | null
}

let whens = []

// FIXME: REMOVE THIS
function removeBoxes() {
  const boxes = document.querySelectorAll('.box');
  if (boxes.length) {
    for (let box of boxes) {
      document.body.removeChild(box);
    }
  }
}

function tick(cursor) {
  const state: World = {
    cursor
  };

  removeBoxes(); // clear the state of the dom

  for (let action of whens) {
    const { 
      target, 
      condition, 
      consequence, 
      options 
    } = action;

    if (condition(target, state)) {
      if (options) {
        consequence(options(state));
      } else {
        consequence();
      }
    }
  }
}


export function run () {
  whens = _getWhens();
  cursor$.subscribe(tick)
}