/*
  Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа. 
  Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.
*/

function getPromise<T> (): Promise<(string | number)[]> {
  return new Promise((resolve) => {
    resolve(['Text', 50]);
  });
}

getPromise <(string | number)[]>()
.then((data) => {
  console.log(data);
});

export {};