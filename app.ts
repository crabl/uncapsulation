let whens = [];
function when(target, condition, consequence, options) {
  whens.push({
    target, 
    condition, 
    consequence, 
    options
  });
}

interface WorldState {
  cursor: { x: number, y: number } | null
}


import { containsCursor, cursor$ } from './cursor';



// program
const page: HTMLDivElement = document.querySelector('.page');
function withOptions(state: WorldState) {
  return {
    position: state.cursor,
    height: 10,
    width: 10,
    color: 'green'
  };
}

when(page, containsCursor, drawBoxAt, withOptions);


function drawBoxAt(options: { 
  position: {x: number, y: number}, 
  height: number, 
  width: number, 
  color: string 
}) {
  // if we have no box div create it
  let box: HTMLDivElement = document.querySelector('.box');
  if (!box) {
    const div = document.createElement('div')
    div.className = 'box';
    div.style.position = 'absolute';
    div.style.border = '1px solid ' + options.color;
    div.style.height = options.height + 'px';
    div.style.width = options.width + 'px';
    document.body.appendChild(div);
    box = document.querySelector('.box');
  }

  box.style.top = options.position.y + 'px';
  box.style.left = options.position.x + 'px';
}

cursor$.subscribe((cursor) => {
  const state: WorldState = {
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
});