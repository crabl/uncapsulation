import { _getWhens } from './when';
import { cursor$ } from './cursor';

export interface World {
  cursor: { x: number, y: number } | null
}

let whens = []

// FIXME: REMOVE THIS
function clearDOM() {
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

  clearDOM(); // lmao maybe use angular for this idk
  
  // IDEA: rather than clearing the state of the dom every time, 
  // we should do some diffing b/w which actions caused which
  // consequences (since they are pure)

  for (let when of whens) {
    const { 
      target, 
      condition, 
      consequence, 
      options 
    } = when;

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