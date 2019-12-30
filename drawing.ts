import uuidv4 from 'uuid/v4';

export function drawBox(options: { 
  position: {x: number, y: number}, 
  height: number, 
  width: number, 
  color: string 
}) {
  // if we have no box div create it
  let uuid = 'box-' + uuidv4();
  let box: HTMLDivElement = document.querySelector('#' + uuid);
  if (!box) {
    const div = document.createElement('div')
    div.id = uuid;
    div.className = 'box';
    div.style.position = 'absolute';
    div.style.border = '1px solid ' + options.color;
    div.style.height = options.height + 'px';
    div.style.width = options.width + 'px';
    document.body.appendChild(div);
    box = div;
  }

  box.style.top = options.position.y + 'px';
  box.style.left = options.position.x + 'px';
}
