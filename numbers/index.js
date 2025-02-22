//создаем пустой массив
let numbers = [];

//заполняем массив целыми числами
for (let n=-10; n<=10; n+=1) {
  numbers.push(n);
}
// console.log(numbers);


for (let i=0; i<numbers.length; i+=1) {
  //удаляем из массива отрицательные числа
  while (numbers[i] < 0) {
    numbers.shift();
  } 
  
  //возводим числа в квадрат
  numbers[i] = numbers[i] ** 2;
}

//сортировка в порядке убывания
for (let i = numbers.length - 1; i > 0; i -= 1) {
  let indexMax = i;
  for (let j = i - 1; j >= 0; j -= 1) {
    if (numbers[j] < numbers[indexMax]) {
      indexMax = j;
    }
  }
const x = numbers[i];
numbers[i] = numbers[indexMax];
numbers[indexMax] = x;
}

console.log(numbers);


//вывод чисел в порядке убывания (реверс) - 1й вариант
// const numbersReverse = [];
// for (let i = (numbers.length - 1); i >= 0; i--) {
//   numbersReverse.push(numbers[i]);
// }
// console.log(numbersReverse);


//вывод чисел в порядке убывания (реверс) - 2й вариант
// let left = 0;
// let right = numbers.length - 1;

// while (left < right) {
//   const x = numbers[left];
//   numbers[left] = numbers[right];
//   numbers[right] = x;

//   left += 1;
//   right -= 1;
// }
// console.log(numbers);


//вывод чисел в порядке убывания без цикла
// numbers.reverse();
// numbers.sort((a, b) => b-a);







