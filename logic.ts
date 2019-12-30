// curried not func passing all args thru
export function not(f) {
  return function (...args) {
    return !f(...args);
  };
}