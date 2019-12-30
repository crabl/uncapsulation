let whens = [];

export function when(target, condition, consequence, options?) {
  whens.push({
    target, 
    condition, 
    consequence, 
    options
  });
}

export function _getWhens() {
  return whens;
}