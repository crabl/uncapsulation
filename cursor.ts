import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

import { World } from './world';

// mouse handling
export const cursor$ = fromEvent(document, 'mousemove').pipe(map(onMouseUpdate));

function onMouseUpdate(e: MouseEvent) {
  return {
    x: e.pageX,
    y: e.pageY
  };
}

export function containsCursor(target: HTMLDivElement, state: World) {
  if (!state.cursor) {
    return false;
  }

  const containedX = state.cursor.x >= target.offsetLeft && state.cursor.x <= target.offsetLeft + target.clientWidth;
  const containedY = state.cursor.y >= target.offsetTop && state.cursor.y <= target.offsetTop + target.clientHeight;

  return containedX && containedY;
}