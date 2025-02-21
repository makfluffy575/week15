//создаем пустой массив
let numbers = [];

//заполняем массив целыми числами
for (let n=-10; n<=10; n+=1)
{
  numbers.push(n);
}
// console.log(numbers);


for (let i=0; i<numbers.length; i+=1)
{
  //удаляем из массива отрицательные числа
  while (numbers[i] < 0) {
    numbers.shift();
  } 
  
  //возводим числа в квадрат
  numbers[i] = numbers[i] ** 2;
  
}

  //сортировка в порядке убывания
  // numbers.reverse();
  numbers.sort((a, b) => b-a);

console.log(numbers);





