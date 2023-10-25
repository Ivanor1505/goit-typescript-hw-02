/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return {
    ...objA,
    ...objB,
  };
}

const mergedObject = merge({ key1: 'value1' }, { key2: 42 });

export {};