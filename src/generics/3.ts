// function merge(objA, objB) {
//   return Object.assign(objA, objB);
// }

function merge<T, U>(objA: T, objB: U): T & U {
  return { ...objA, ...objB };
}
