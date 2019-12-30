import { fromEvent, merge } from 'rxjs';
import { map } from 'rxjs/operators';

// mouse handling
const mouseMouse$ = fromEvent(document, 'mousemove').pipe(map(onMouseUpdate));
const mouseEnter$ = fromEvent(document, 'mouseenter').pipe(map(onMouseUpdate));
const mouseOut$ = fromEvent(document, 'mouseout').pipe(map(() => null));

export const cursor$ = merge(
  mouseMouse$,
  mouseEnter$,
  mouseOut$
);

function onMouseUpdate(e: MouseEvent) {
  return {
    x: e.pageX,
    y: e.pageY
  };
}

export function containsCursor(target: HTMLDivElement, state: WorldState) {
  if (!state.cursor) {
    return false;
  }

  const containedX = state.cursor.x >= target.offsetLeft && state.cursor.x <= target.offsetLeft + target.clientWidth;
  const containedY = state.cursor.y >= target.offsetTop && state.cursor.y <= target.offsetTop + target.clientHeight;

  return containedX && containedY;
}