export function drawBoxAt(options: { 
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
