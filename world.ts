import { _getWhens } from './when';
import { cursor$ } from './cursor';

export interface World {
  cursor: { x: number, y: number } | null
}

let whens = []

function tick(cursor) {
  const state: World = {
    cursor
  };

  for (let action of whens) {
    const { 
      target, 
      condition, 
      consequence, 
      options 
    } = action;

    if (condition(target, state)) {
      consequence(options(state));
    }
  }
}


export function run () {
  whens = _getWhens();
  cursor$.subscribe(tick)
}